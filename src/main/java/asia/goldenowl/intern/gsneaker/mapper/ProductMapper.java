package asia.goldenowl.intern.gsneaker.mapper;

import asia.goldenowl.intern.gsneaker.dto.ProductDto;
import asia.goldenowl.intern.gsneaker.entity.Product;

public class ProductMapper {
    public static ProductDto mapToProductDto(Product product, ProductDto productDto) {
        productDto.setId(product.getId());
        productDto.setImage(product.getImage());
        productDto.setName(product.getName());
        productDto.setColor(product.getColor());
        productDto.setDescription(product.getDescription());
        productDto.setPrice(product.getPrice());
        return productDto;
    }

    public static ProductDto mapToProductDto(Product product) {
        return mapToProductDto(product, new ProductDto());
    }
}
