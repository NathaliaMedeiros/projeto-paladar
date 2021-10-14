package com.fateczl.projetopaladarselfservice.Domain.Dto;

public class ItemDto {

    private Long uniqueId;
    private Double valor;

    public Long getUniqueId() {
        return uniqueId;
    }

    public void setUniqueId(Long uniqueId) {
        this.uniqueId = uniqueId;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }
}
