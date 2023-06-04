package com.helpmesprint.helpmesprintbe.db.repository

import com.helpmesprint.helpmesprintbe.db.model.Person
import org.springframework.data.mongodb.repository.MongoRepository


interface CustomerRepository : MongoRepository<Person, String?> {
    fun findByIdentifier(identifier: String?): Person
}