package com.example.wisdompet.web.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDto {

  private String id;
  private String firstName;
  private String lastName;
  private String emailAddress;
  private String phoneNumber;
  private String address;
}
