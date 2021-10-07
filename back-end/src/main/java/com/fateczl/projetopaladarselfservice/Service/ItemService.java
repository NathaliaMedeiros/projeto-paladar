package com.fateczl.projetopaladarselfservice.Service;

import com.fateczl.projetopaladarselfservice.Domain.Dto.ItemDto;
import com.fateczl.projetopaladarselfservice.Domain.Mapper.ItemMapper;
import com.fateczl.projetopaladarselfservice.Entity.Item;
import com.fateczl.projetopaladarselfservice.Repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private ItemMapper itemMapper;

    public List<ItemDto> getList() {
        List<Item> items = itemRepository.findAll();
        List<ItemDto> itensDto = items.stream().map(i -> itemMapper.toDto(i)).collect(Collectors.toList());
        return itensDto;
    }

    public ItemDto createItem(ItemDto item) {
        Item itemEntity = itemMapper.toEntity(item);
        Item entity = itemRepository.save(itemEntity);
        return itemMapper.toDto(entity);
    }

}
