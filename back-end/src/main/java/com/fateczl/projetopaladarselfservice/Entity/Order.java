package com.fateczl.projetopaladarselfservice.Entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long uniqueId;

    @Column(name = "date_create")
    private LocalDate dateCreate;

    @Column(name = "order_physical")
    private Integer orderPhysical;

    @Column(name = "status")
    private String status;

    //private List<Item> items;

    public Long getUniqueId() {
        return uniqueId;
    }

    public void setUniqueId(Long uniqueId) {
        this.uniqueId = uniqueId;
    }

    public LocalDate getDateCreate() {
        return dateCreate;
    }

    public void setDateCreate(LocalDate dateCreate) {
        this.dateCreate = dateCreate;
    }

    public Integer getOrderPhysical() {
        return orderPhysical;
    }

    public void setOrderPhysical(Integer orderPhysical) {
        this.orderPhysical = orderPhysical;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


}
