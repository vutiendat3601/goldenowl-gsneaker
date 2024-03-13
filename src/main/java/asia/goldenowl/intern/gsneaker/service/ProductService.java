package asia.goldenowl.intern.gsneaker.service;

import asia.goldenowl.intern.gsneaker.dto.PaginationDto;
import asia.goldenowl.intern.gsneaker.dto.ProductDto;

public interface ProductService {
    PaginationDto<ProductDto> getProducts(int pageNum, int pageSize, String q);
}
