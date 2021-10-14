package com.fateczl.projetopaladarselfservice.Repository;

import com.fateczl.projetopaladarselfservice.Entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
