package com.hms.reports;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hms.reports.models.Bill;

@Repository
public interface ReportsRepository extends MongoRepository<Bill, String> {

}