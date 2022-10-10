package equipo10.integrador_v01.repository;

import equipo10.integrador_v01.model.entity.Puntuacion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPuntuacionRepository extends JpaRepository<Puntuacion, Long> {
}