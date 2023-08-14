package com.example.wisdompet.web.graphqls;

import java.util.Arrays;
import java.util.List;

import com.example.wisdompet.services.CustomerService;
import com.example.wisdompet.web.models.CustomerDto;
import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;
import com.netflix.graphql.dgs.InputArgument;

import graphql.schema.DataFetchingEnvironment;

@DgsComponent
public class CustomerDataFetcher {

  private final CustomerService customerService;

  public CustomerDataFetcher(CustomerService customerService) {
  this.customerService = customerService;
  }

  @DgsQuery
  public List<CustomerDto> customers(DataFetchingEnvironment env) {
    return this.customerService.getAllCustomer(env);
  }

  @DgsQuery
  public CustomerDto customerById(@InputArgument String id) {
    return this.customerService.getCustomer(id);
  }
}
