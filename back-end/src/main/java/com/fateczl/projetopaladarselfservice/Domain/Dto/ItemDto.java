package com.fateczl.projetopaladarselfservice.Domain.Dto;

import com.fateczl.projetopaladarselfservice.Entity.ItemEntity;

public class ItemDto {

    private Long uniqueId;
    private Double valor;

    public ItemDto() {}

    public ItemDto(ItemEntity item){
        uniqueId = item.getUniqueID();
        valor = item.getValor();
    }

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
