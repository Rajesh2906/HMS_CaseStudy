package com.hms.department.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.department.models.Department;
import com.hms.department.repository.DepartmentRepository;

@Service
public class DepartmentService {

	@Autowired
	private DepartmentRepository departmentRepository;

	public Department addDepartment(Department department) {
		return departmentRepository.insert(department);
	}

	public Department updateDepartment(Department department) {
		return departmentRepository.save(department);
	}

	public List<Department> findAllDepartments() {
		return departmentRepository.findAll();
	}

	public Department findById(String departmentId) {
		return departmentRepository.findById(departmentId).get();
	}

}
