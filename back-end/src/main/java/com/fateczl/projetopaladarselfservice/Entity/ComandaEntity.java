package com.fateczl.projetopaladarselfservice.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;
import java.util.List;

@Entity
public class ComandaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long uniqueId;

    private LocalDate dataCriacao;

    private Integer numComandaFisica;

    private String status;

    private List<ItemEntity> itens;

    public Long getUniqueId() {
        return uniqueId;
    }

    public void setUniqueId(Long uniqueId) {
        this.uniqueId = uniqueId;
    }

    public LocalDate getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(LocalDate dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public Integer getNumComandaFisica() {
        return numComandaFisica;
    }

    public void setNumComandaFisica(Integer numComandaFisica) {
        this.numComandaFisica = numComandaFisica;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<ItemEntity> getItens() {
        return itens;
    }

    public void setItens(List<ItemEntity> itens) {
        this.itens = itens;
    }
}
