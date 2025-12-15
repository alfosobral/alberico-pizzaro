package com.alberico.api.product;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;

@Configuration
public class DataSeed {

    @Bean
    CommandLineRunner seed(ProductRepository repo) {
        return args -> {
            if (repo.count() > 0) return;

            Product p1 = new Product();
            p1.setId("muzzarella");
            p1.setName("Pizza Muzzarella");
            p1.setDescription("Salsa, muzza, orégano.");
            p1.setPrice(new BigDecimal("450"));
            p1.setImageUrl("https://picsum.photos/seed/muzza/600/400");

            repo.save(p1);
        };
    }
}
