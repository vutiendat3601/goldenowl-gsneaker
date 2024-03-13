package asia.goldenowl.intern.gsneaker.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import asia.goldenowl.intern.gsneaker.dto.PaginationDto;
import asia.goldenowl.intern.gsneaker.dto.ProductDto;
import asia.goldenowl.intern.gsneaker.service.ProductService;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.RequiredArgsConstructor;

@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("v1/products")
public class ProductController {
    private final ProductService productService;

    @GetMapping
    public ResponseEntity<PaginationDto<ProductDto>> getProducts(
            @PositiveOrZero(message = "pageNum must be in range [0, " + Integer.MAX_VALUE + "]")
           
            @RequestParam(required = false, defaultValue = "0") int pageNum,

            @Positive(message = "pageSize must be in range [0, 50]")
            @Max(value = 50, message = "pageSize must be in range [0, 50]")
            @RequestParam(required = false, defaultValue = "10") int pageSize,
            @RequestParam(required = false, defaultValue = "") String q

    ) {
        PaginationDto<ProductDto> productDtosPage = productService.getProducts(pageNum, pageSize, q);
        return ResponseEntity.ok(productDtosPage);
    }
}
