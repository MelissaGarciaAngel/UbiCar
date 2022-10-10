package equipo10.integrador_v01.repository;

import equipo10.integrador_v01.model.entity.Caracteristica;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICaracteristicaRepository extends JpaRepository<Caracteristica, Long> {
}