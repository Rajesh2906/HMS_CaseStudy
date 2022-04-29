/*
 * package com.hms.APIgateway.service;
 * 
 * import java.util.List;
 * 
 * import org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.core.ParameterizedTypeReference; import
 * org.springframework.http.HttpMethod; import
 * org.springframework.http.ResponseEntity; import
 * org.springframework.stereotype.Service; import
 * org.springframework.web.client.RestTemplate;
 * 
 * import com.hms.APIgateway.model.ReceptionistSecurityModel;
 * 
 * @Service public class SecurityService {
 * 
 * @Autowired private RestTemplate restTemplate;
 * 
 * public void getReceptionistDetails() {
 * ResponseEntity<List<ReceptionistSecurityModel>> responseEntity =
 * restTemplate.exchange(
 * "http://ManagerEndUser/manager/security/getreceptionistdetails",
 * HttpMethod.GET, null, new
 * ParameterizedTypeReference<List<ReceptionistSecurityModel>>() { });
 * 
 * List<ReceptionistSecurityModel> listOfReceptionistDetails =
 * responseEntity.getBody();
 * 
 * ReceptionistSecurityModel resobj = listOfReceptionistDetails.stream()
 * .filter(p -> modle.getUserId().equals(p.getUserId())) .filter(q ->
 * modle.getPassword().equals(q.getPassword())).findAny().orElse(null); }
 * 
 * }
 */