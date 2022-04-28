package com.hms.staff.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.staff.models.Staff;
import com.hms.staff.repository.StaffRepository;

@Service
public class StaffService {

	@Autowired
	private StaffRepository staffrep;

	public List<Staff> getAllStaff() {
		return (List<Staff>) staffrep.findAll();
	}

	public Staff addStaff(Staff staff) {
		return staffrep.insert(staff);
	}

	public void deleteStaffById(String staffCode) {
		staffrep.deleteById(staffCode);
	}

	public Staff updateStaff(Staff staff) {
		return staffrep.save(staff);
	}

	public Staff getStaffById(String staffCode) {
		return staffrep.findById(staffCode).get();
	}

}