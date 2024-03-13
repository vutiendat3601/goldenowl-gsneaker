package asia.goldenowl.intern.gsneaker.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Table(name = "products")
@Entity
public class Product {
    @Id
    private Long id;

    private String name;

    private String image;

    private String description;

    private Double price;

    private String color;
}
