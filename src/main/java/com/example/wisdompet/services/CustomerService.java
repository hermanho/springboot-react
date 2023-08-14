package com.example.wisdompet.services;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.wisdompet.data.entities.CustomerEntity;
import com.example.wisdompet.data.mappers.CustomerMapper;
import com.example.wisdompet.data.repositories.CustomerRepository;
import com.example.wisdompet.web.models.CustomerDto;

import graphql.schema.DataFetchingEnvironment;

@Service
public class CustomerService extends BaseCustomerService<CustomerEntity> {

  private final CustomerRepository customerRepository;

  public CustomerService(CustomerRepository customerRepository) {
    this.customerRepository = customerRepository;
  }

  public List<CustomerDto> getAllCustomer(DataFetchingEnvironment env) {
    Specification<CustomerEntity> specification = getSpecification(env, "where");
    List<CustomerEntity> entities = null;
    if (specification != null) {
      entities = customerRepository.findAll(specification);
    } else {
      entities = customerRepository.findAll();
    }
    List<CustomerDto> customers = entities.stream().map(entity -> CustomerMapper.INSTANCE.dbToWebDto(entity)).toList();
    return customers;

  }

  public CustomerDto getCustomer(String id) {
    Optional<CustomerEntity> optional = this.customerRepository.findById(id);
    if (optional.isEmpty()) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, "customer not found with id");
    }
    return CustomerMapper.INSTANCE.dbToWebDto(optional.get());
  }

  public CustomerDto createOrUpdate(CustomerDto customer) {
    CustomerEntity entity = CustomerMapper.INSTANCE.webDtoToDb(customer);
    entity = this.customerRepository.save(entity);
    return CustomerMapper.INSTANCE.dbToWebDto(entity);
  }

  public void deleteCustomer(String id) {
    this.customerRepository.deleteById(id);
  }
}
