package com.fateczl.projetopaladarselfservice.Repository;

import com.fateczl.projetopaladarselfservice.Entity.ComandaEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComandaRepository extends JpaRepository<ComandaEntity, Long> {
}
