package com.example.wisdompet.web.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerUpdateInput {
  private CustomerUpdateWhere where;
  private CustomerDto data;
}
