package com.alberico.api.product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, String> {
    @Query("""
    SELECT DISTINCT p
    FROM Product p
    LEFT JOIN p.tags t
    WHERE (:q IS NULL OR LOWER(p.name) LIKE LOWER(CONCAT('%', :q, '%')))
      AND (:tags IS NULL OR t.id IN :tags)
""")
    Page<Product> search(
            @Param("q") String q,
            @Param("tags") List<String> tags,
            Pageable pageable
    );
}
