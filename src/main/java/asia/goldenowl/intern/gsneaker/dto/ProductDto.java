package asia.goldenowl.intern.gsneaker.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
    private Long id;
    
    private String image;

    private String name;

    private String description;

    private Double price;

    private String color;
}
