package com.alberico.api.product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductRepository repo;

    public ProductController(ProductRepository repo) {
        this.repo = repo;
    }

    // GET /api/products?q=pizza&page=0&size=20
    @GetMapping
    public Page<Product> list(@RequestParam(required = false) String q, Pageable pageable) {
        if (q == null || q.isBlank()) return repo.findAll(pageable);
        return repo.findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCase(q, q, pageable);
    }

    // GET /api/products/{id}
    @GetMapping("/{id}")
    public Product get(@PathVariable String id) {
        return repo.findById(id).orElseThrow();
    }
}

