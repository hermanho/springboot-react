package com.example.wisdompet.web.graphqls;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import com.example.wisdompet.data.mappers.CustomerMapper;
import com.example.wisdompet.services.CustomerService;
import com.example.wisdompet.web.models.CustomerDto;
import com.example.wisdompet.web.models.CustomerUpdateInput;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsMutation;
import com.netflix.graphql.dgs.InputArgument;

import graphql.schema.DataFetchingEnvironment;

@DgsComponent
public class CustomerMutation {

  private final CustomerService customerService;

  public CustomerMutation(CustomerService customerService) {
    this.customerService = customerService;
  }

  @DgsMutation
  public CustomerDto createCustomer(@InputArgument("input") CustomerDto input) {
    return this.customerService.createOrUpdate(input);
  }

  @DgsMutation
  public CustomerDto updateCustomer(@InputArgument("input") CustomerUpdateInput input,
      DataFetchingEnvironment dataFetchingEnvironment) {
    Map<String, Object> mInput = dataFetchingEnvironment.getArgument("input");
    // CustomerUpdateInput input = new ObjectMapper().convertValue(mInput,
    // CustomerUpdateInput.class);
    System.out.println("Id " + input.getWhere().getId() + " with firstname " + input.getData().getFirstName());
    System.out.println("DataFetchingEnvironment: " + mInput);

    var dto = CustomerMapper.INSTANCE.webDtoToWebDto(input.getData());
    dto.setId(input.getWhere().getId());
    return this.customerService.createOrUpdate(dto);
  }
}
