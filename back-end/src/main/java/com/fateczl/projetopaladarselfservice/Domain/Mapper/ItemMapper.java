package com.fateczl.projetopaladarselfservice.Domain.Mapper;

import com.fateczl.projetopaladarselfservice.Domain.Dto.ItemDto;
import com.fateczl.projetopaladarselfservice.Entity.Item;
import org.springframework.stereotype.Component;


@Component
public class ItemMapper {

    public Item toEntity(ItemDto itemDto) {
        Item entity = new Item();
        entity.setUniqueID(itemDto.getUniqueId());
        entity.setValue(itemDto.getValor());
        return entity;
    }

    public ItemDto toDto(Item item) {
        ItemDto itemDto = new ItemDto();
        itemDto.setUniqueId(item.getUniqueID());
        itemDto.setValor(item.getValue());
        return itemDto;
    }

}
