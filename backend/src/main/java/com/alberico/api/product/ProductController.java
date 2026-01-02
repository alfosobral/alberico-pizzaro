package com.alberico.api.product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;
    private final ProductRepository repo;

    public ProductController(ProductService productService, ProductRepository repo) {
        this.repo = repo;
        this.productService = productService;
    }

    // GET /api/products?q=pizza&page=0&size=20
    @GetMapping
        public Page<Product> searchProducts(
                @RequestParam(required = false) String q,
                @RequestParam(required = false) List<String> tags,
                Pageable pageable
        ) {
            return productService.search(q, tags, pageable);
        }


    // GET /api/products/{id}
    @GetMapping("/{id}")
    public Product get(@PathVariable String id) {
        return repo.findById(id).orElseThrow();
    }


}

