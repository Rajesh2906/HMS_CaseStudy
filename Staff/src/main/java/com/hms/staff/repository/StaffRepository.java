package com.hms.staff.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hms.staff.models.Staff;

@Repository
public interface StaffRepository extends JpaRepository<Staff, String> {

}