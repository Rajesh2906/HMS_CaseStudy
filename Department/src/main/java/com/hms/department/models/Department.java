package com.hms.department.models;

import javax.persistence.Id;

import org.hibernate.annotations.Entity;
import org.springframework.stereotype.Component;

@Component
@Entity
public class Department {

	@Id
	private String departmentId;
	private String departmentName;
	private Integer numberOfEmplyees;

	public Department() {

	}

	public Department(String departmentId, String departmentName, Integer numberOfEmplyees) {
		super();
		this.departmentId = departmentId;
		this.departmentName = departmentName;
		this.numberOfEmplyees = numberOfEmplyees;
	}

	public String getDepartmentId() {
		return departmentId;
	}

	public void setDepartmentId(String departmentId) {
		this.departmentId = departmentId;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public Integer getNumberOfEmplyees() {
		return numberOfEmplyees;
	}

	public void setNumberOfEmplyees(Integer numberOfEmplyees) {
		this.numberOfEmplyees = numberOfEmplyees;
	}

}
