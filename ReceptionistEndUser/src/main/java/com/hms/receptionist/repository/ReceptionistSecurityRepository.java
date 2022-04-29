package com.hms.receptionist.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hms.receptionist.model.ReceptionistSecurityModel;

@Repository
public interface ReceptionistSecurityRepository extends MongoRepository<ReceptionistSecurityModel, String> {

}
