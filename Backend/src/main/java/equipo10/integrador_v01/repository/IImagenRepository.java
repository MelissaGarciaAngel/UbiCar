package equipo10.integrador_v01.repository;

import equipo10.integrador_v01.model.entity.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IImagenRepository extends JpaRepository<Imagen, Long> {
}