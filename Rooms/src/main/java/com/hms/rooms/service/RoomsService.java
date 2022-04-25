package com.hms.rooms.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.rooms.models.Rooms;
import com.hms.rooms.repository.RoomsRepository;

@Service
public class RoomsService {

	@Autowired
	private RoomsRepository roomrepo;

	public void addRoom(Rooms rooms) {
		rooms.setRoomStatus_("Not Active");
		roomrepo.insert(rooms);
		List<Rooms> list = roomrepo.findAll();
		list.forEach(p -> p.setTotalRooms_(roomrepo.count()));
		roomrepo.saveAll(list);
	}

	public List<Rooms> getAllRooms() {
		return roomrepo.findAll();
	}

	public List<Rooms> availableRoooms() {
		List<Rooms> list = new ArrayList<>();
		roomrepo.findAll().stream().filter(p -> p.getRoomStatus_().equals("Not Active")).forEach(list::add);
		return list;
	}

//	public void updateNoofRooms() {
//		List<Rooms> list = roomrepo.findAll();
//		list.forEach(p -> p.setTotalRooms_(roomrepo.count()));
//		roomrepo.saveAll(list);
//	}

	public void makeStatusActive(String roomNumber) {
		Rooms roomobj = roomrepo.findById(roomNumber).get();
		roomobj.setRoomStatus_("Active");
		roomrepo.save(roomobj);
	}

	public void makeStatusNotActive(String roomNumber) {
		Rooms roomobj = roomrepo.findById(roomNumber).get();
		roomobj.setRoomStatus_("Not Active");
		roomrepo.save(roomobj);
	}

	public void deleteRooms(String roomNo) {
		roomrepo.deleteById(roomNo);
		List<Rooms> list = roomrepo.findAll();
		list.forEach(p -> p.setTotalRooms_(roomrepo.count()));
		roomrepo.saveAll(list);
	}

}