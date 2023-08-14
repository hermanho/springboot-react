package com.example.wisdompet.data.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.wisdompet.data.entities.CustomerEntity;

public interface CustomerRepository
    extends BaseRepository<CustomerEntity, String> {
  CustomerEntity findByEmail(String email);

  Page<CustomerEntity> findAll(Pageable pageable);
}
