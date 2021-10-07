package com.fateczl.projetopaladarselfservice.Controller;

import com.fateczl.projetopaladarselfservice.Domain.Dto.ItemDto;
import com.fateczl.projetopaladarselfservice.Service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/itens")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ItemDto> getList(){
        return itemService.getList();
    }


}
