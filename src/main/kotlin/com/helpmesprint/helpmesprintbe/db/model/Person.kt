package com.helpmesprint.helpmesprintbe.db.model

import org.springframework.data.annotation.Id

data class Person(
    @Id val id: Long,
    val identifier: String,
    val name: String
)
