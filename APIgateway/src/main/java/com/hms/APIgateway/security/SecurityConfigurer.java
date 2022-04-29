package com.hms.APIgateway.security;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.client.RestTemplate;

import com.hms.APIgateway.model.ReceptionistSecurityModel;

@EnableWebSecurity
public class SecurityConfigurer extends WebSecurityConfigurerAdapter {

	@Autowired
	private ReceptionistSecurityModel recSecurityModel;
	@Autowired
	private RestTemplate restTemplate;

	int i;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		ResponseEntity<List<ReceptionistSecurityModel>> responseEntity = restTemplate.exchange(
				"http://ReceptionistEndUser/receptionist/security/getuserdetails", HttpMethod.GET, null,
				new ParameterizedTypeReference<List<ReceptionistSecurityModel>>() {
				});

		List<ReceptionistSecurityModel> listOfReceptionistDetails = responseEntity.getBody();

		for (i = 0; i < listOfReceptionistDetails.size(); i++) {
			auth.inMemoryAuthentication().withUser(listOfReceptionistDetails.get(i).getUserId())
					.password(listOfReceptionistDetails.get(i).getPassword()).roles("RECEPTIONIST");
		}

	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers("/Receptionist/**").hasRole("RECEPTIONIST").antMatchers("/").permitAll()
				.and().formLogin();
	}

	@Bean
	public PasswordEncoder getPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

}