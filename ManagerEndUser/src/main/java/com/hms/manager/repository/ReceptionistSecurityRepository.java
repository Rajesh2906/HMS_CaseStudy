package com.hms.manager.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hms.manager.models.ReceptionistSecurityModel;

@Repository
public interface ReceptionistSecurityRepository extends MongoRepository<ReceptionistSecurityModel, String> {

}
