package com.example.wisdompet.data.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "customers")
@Data
@ToString
@Getter
@Setter
public class CustomerEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private String id;
  private String firstName;
  private String lastName;
  private String email;
  private String phone;
  private String address;
}
