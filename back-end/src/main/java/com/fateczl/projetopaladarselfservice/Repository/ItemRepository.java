package com.fateczl.projetopaladarselfservice.Repository;

import com.fateczl.projetopaladarselfservice.Entity.ItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<ItemEntity, Long> {
}
