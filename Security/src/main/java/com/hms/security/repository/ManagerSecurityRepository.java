package com.hms.security.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hms.security.models.ManagerSecurityModel;

@Repository
public interface ManagerSecurityRepository extends MongoRepository<ManagerSecurityModel, String> {

}
