package com.hms.manager.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hms.manager.models.ManagerSecurityModel;

@Repository
public interface ManagerSecurityRepository extends MongoRepository<ManagerSecurityModel, String> {

}
