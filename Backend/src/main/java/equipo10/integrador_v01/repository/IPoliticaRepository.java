package equipo10.integrador_v01.repository;

import equipo10.integrador_v01.model.entity.Politica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPoliticaRepository extends JpaRepository<Politica, Long> {
}
