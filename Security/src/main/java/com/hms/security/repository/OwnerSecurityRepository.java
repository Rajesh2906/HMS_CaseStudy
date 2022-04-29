package com.hms.security.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hms.security.models.OwnerSecurityModel;

@Repository
public interface OwnerSecurityRepository extends MongoRepository<OwnerSecurityModel, String> {

}
