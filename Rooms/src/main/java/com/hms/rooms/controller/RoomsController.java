package com.hms.rooms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hms.rooms.models.Rooms;
import com.hms.rooms.service.RoomsService;

@RestController
@RequestMapping("/manager")
public class RoomsController {

	@Autowired
	private RoomsService roomservice;

	@GetMapping("/getallrooms")
	public List<Rooms> getAllRoomsData() {
		return roomservice.getAllRooms();
	}

	@GetMapping("/availablerooms")
	public List<Rooms> getAvailableRooms() {
		return roomservice.availableRoooms();
	}

	@PostMapping("/addrooms")
	public void addRooms(@RequestBody Rooms rooms) {
		roomservice.addRoom(rooms);
	}

	@PostMapping("/makestatusactive")
	public void makeStatusActive(@RequestParam String roomNumber) {
		roomservice.makeStatusActive(roomNumber);
	}

	@PostMapping("/makestatusnotactive")
	public void makeStatusNotActive(@RequestParam String roomNumber) {
		roomservice.makeStatusNotActive(roomNumber);
	}

	@PutMapping("/updatetotalrooms")
	public void updateRooms() {
		roomservice.updateNoofRooms();
	}

	@DeleteMapping("/deleteRooms")
	public void deleteRooms(@RequestParam String roomCode) {
		roomservice.deleteRooms(roomCode);
	}

}