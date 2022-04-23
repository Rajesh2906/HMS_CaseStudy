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
	Rooms rooms;

	@Autowired
	private RoomsRepository roomrepo;

	public void addRoom(Rooms rooms) {
		rooms.setRoomStatus_("Not Active");
		rooms.setTotalRooms_(roomrepo.count() + 1);
		roomrepo.insert(rooms);
	}

	public List<Rooms> getAllRooms() {
		return roomrepo.findAll();
	}

	public List<Rooms> availableRoooms() {
		List<Rooms> list = new ArrayList<>();
		roomrepo.findAll().stream().filter(p -> p.getRoomStatus_().equals("Not Active")).forEach(list::add);
		return list;
	}

	public List<Rooms> updatetotalrooms() {
		List<Rooms> list = new ArrayList<>();
		roomrepo.findAll().stream().filter(p -> p.setTotalRooms_(roomrepo.count())).forEach(list::add);
		roomrepo.save(list);
	}

	public void updateNoofRooms(Rooms rooms) {
		rooms.setTotalRooms_(roomrepo.count());
		roomrepo.save(rooms);
	}

	public void deleteRooms(String roomNo) {
		rooms.setTotalRooms_(roomrepo.count() - 1);
		roomrepo.deleteById(roomNo);
	}

}