package com.hms.staff;

import org.hibernate.annotations.Entity;
import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Component;

@Component
@Entity
public class Staff {

	@Id
	private String staffCode;
	private String employeeName;
	private String employeeAddress;
	private Double salary;
	private int age;
	private String occupation;
	private String email;

	public Staff() {
	}

	public Staff(String staffCode, String employeeName, String employeeAddress, Double salary, int age,
			String occupation, String email) {
		super();
		this.staffCode = staffCode;
		this.employeeName = employeeName;
		this.employeeAddress = employeeAddress;
		this.salary = salary;
		this.age = age;
		this.occupation = occupation;
		this.email = email;
	}

	public String getStaffCode() {
		return staffCode;
	}

	public void setStaffCode(String staffCode) {
		this.staffCode = staffCode;
	}

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}

	public String getEmployeeAddress() {
		return employeeAddress;
	}

	public void setEmployeeAddress(String employeeAddress) {
		this.employeeAddress = employeeAddress;
	}

	public Double getSalary() {
		return salary;
	}

	public void setSalary(Double salary) {
		this.salary = salary;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}