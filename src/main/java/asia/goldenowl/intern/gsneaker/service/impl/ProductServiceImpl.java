package asia.goldenowl.intern.gsneaker.service.impl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import asia.goldenowl.intern.gsneaker.dto.PaginationDto;
import asia.goldenowl.intern.gsneaker.dto.ProductDto;
import asia.goldenowl.intern.gsneaker.entity.Product;
import asia.goldenowl.intern.gsneaker.mapper.ProductMapper;
import asia.goldenowl.intern.gsneaker.repository.ProductRepository;
import asia.goldenowl.intern.gsneaker.service.ProductService;
import asia.goldenowl.intern.gsneaker.util.PaginationUtil;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepo;

    @Override
    public PaginationDto<ProductDto> getProducts(int pageNum, int pageSize, String q) {
        Pageable pageable = PaginationUtil.parsePagination(pageNum, pageSize);
        Page<Product> productsPage = productRepo.findAllByName(pageable, q);
        Page<ProductDto> productDtosPage = productsPage.map(ProductMapper::mapToProductDto);
        return PaginationDto.mapToPaginationDto(productDtosPage);
    }

}
