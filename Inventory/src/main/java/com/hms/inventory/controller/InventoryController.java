package com.hms.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hms.inventory.models.Inventory;
import com.hms.inventory.service.InventoryService;

@RestController
@RequestMapping("/inventory")
public class InventoryController {

	@Autowired
	private InventoryService inventoryService;

	@PostMapping("/addinventory")
	public void addInventory(@RequestBody Inventory inventory) {
		inventoryService.addInventory(inventory);

	}

	@PutMapping("/updateinventory")
	public void updateInventory(@RequestBody Inventory inventory) {
		inventoryService.updateInventory(inventory);
	}

	@GetMapping("/getallinventory")
	public List<Inventory> getAllInventory() {
		return inventoryService.getAllInventory();

	}

	@GetMapping("/getinventorybyid")
	public Inventory getInventoryById(@RequestParam String inventoryCodse) {
		return inventoryService.getInventoryById(inventoryCodse);

	}

}
