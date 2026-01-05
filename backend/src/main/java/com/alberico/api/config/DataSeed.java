package com.alberico.api.config;

import com.alberico.api.product.Product;
import com.alberico.api.product.ProductRepository;
import com.alberico.api.tag.TagRepository;
import com.alberico.api.tag.Tag;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;

@Configuration
public class DataSeed {

    @Bean
    CommandLineRunner seed(ProductRepository productRepository, TagRepository tagRepository) {
        return args -> {
            if (tagRepository.count() > 0) return;

            Tag t1 = new Tag("VEG", "Vegetariana");
            Tag t2 = new Tag("PROMO", "Promocion");
            Tag t3 = new Tag("PICANTE", "Picante");
            Tag t4 = new Tag("NUEVO", "Nuevo");
            Tag t5 = new Tag("HOLA", "Hola");
            Tag t6 = new Tag("CHAU", "Chau");
            Tag t7 = new Tag("MEMEMEM", "123");

            tagRepository.save(t1);
            tagRepository.save(t2);
            tagRepository.save(t3);
            tagRepository.save(t4);
            tagRepository.save(t5);
            tagRepository.save(t6);
            tagRepository.save(t7);

            if (productRepository.count() > 0) return;

            Product p1 = new Product("muzzarella", "Pizza Muzzarella", new BigDecimal(450));
            p1.setDescription("Salsa, muzza, orégano.");
            p1.setImageUrl("https://picsum.photos/seed/muzza/600/400");
            p1.addTag(t2);
            productRepository.save(p1);

            Product p2 = new Product("fugazzeta", "Pizza Fugazzeta", new BigDecimal(400));
            p2.setDescription("Cebolla, jamon.");
            p2.setImageUrl("https://picsum.photos/seed/muzza/600/400");
            productRepository.save(p2);




        };
    }


}
