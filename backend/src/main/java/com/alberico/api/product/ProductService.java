package com.alberico.api.product;

import com.alberico.api.tag.TagRepository;
import com.alberico.api.tag.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
public class ProductService {

    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public Page<Product> search(
            String q,
            List<String> tags,
            Pageable pageable
    ) {
        return repo.search(
                q == null || q.isBlank() ? null : q,
                tags == null || tags.isEmpty() ? null : tags,
                pageable
        );
    }
}

