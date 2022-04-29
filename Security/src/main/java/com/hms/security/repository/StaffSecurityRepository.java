package com.hms.security.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hms.security.models.StaffSecurityModel;

@Repository
public interface StaffSecurityRepository extends MongoRepository<StaffSecurityModel, String> {

}
