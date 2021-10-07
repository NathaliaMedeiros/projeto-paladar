package com.fateczl.projetopaladarselfservice.Repository;

import com.fateczl.projetopaladarselfservice.Entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
