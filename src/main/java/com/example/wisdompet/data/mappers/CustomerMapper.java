package com.example.wisdompet.data.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.example.wisdompet.data.entities.CustomerEntity;
import com.example.wisdompet.web.models.CustomerDto;

@Mapper
public interface CustomerMapper {

  CustomerMapper INSTANCE = Mappers.getMapper(CustomerMapper.class);

  @Mapping(source = "id", target = "id")
  @Mapping(source = "email", target = "emailAddress")
  @Mapping(source = "phone", target = "phoneNumber")
  CustomerDto dbToWebDto(CustomerEntity entity);

  @Mapping(source = "id", target = "id")
  @Mapping(source = "emailAddress", target = "email")
  @Mapping(source = "phoneNumber", target = "phone")
  CustomerEntity webDtoToDb(CustomerDto dto);

  CustomerDto webDtoToWebDto(CustomerDto dto);
}