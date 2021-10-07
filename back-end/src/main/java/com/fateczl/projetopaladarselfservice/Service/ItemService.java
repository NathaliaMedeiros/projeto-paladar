package com.fateczl.projetopaladarselfservice.Service;

import com.fateczl.projetopaladarselfservice.Domain.Dto.ItemDto;
import com.fateczl.projetopaladarselfservice.Entity.ItemEntity;
import com.fateczl.projetopaladarselfservice.Repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public List<ItemDto> getList() {
        List<ItemEntity> itens = itemRepository.findAll();
        List<ItemDto> itensDto = itens.stream().map(i -> new ItemDto(i)).collect(Collectors.toList());
        return itensDto;
    }

    public void createItem(ItemDto item) {
        ItemEntity itemEntity = new ItemEntity();
    }

}
