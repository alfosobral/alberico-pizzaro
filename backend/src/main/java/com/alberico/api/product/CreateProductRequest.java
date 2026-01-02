package com.alberico.api.product;

import java.math.BigDecimal;
import java.util.Set;

public record CreateProductRequest(
        String id,
        String name,
        String description,
        BigDecimal price,
        String imageUrl,
        Set<String> tags // ej: ["VEG", "PROMO"]
) {}