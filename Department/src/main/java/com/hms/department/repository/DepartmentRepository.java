package com.hms.department.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hms.department.models.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, String> {

}
