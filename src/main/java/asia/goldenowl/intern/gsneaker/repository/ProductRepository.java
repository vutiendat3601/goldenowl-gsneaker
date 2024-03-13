package asia.goldenowl.intern.gsneaker.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import asia.goldenowl.intern.gsneaker.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("""
            SELECT p FROM Product p WHERE p.name ILIKE %:name%
            """

    )
    Page<Product> findAllByName(Pageable pageable, @Param("name") String name);
}
