package com.hms.owner.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hms.owner.models.OwnerSecurityModel;

@Repository
public interface OwnerSecurityRepository extends MongoRepository<OwnerSecurityModel, String> {

}
