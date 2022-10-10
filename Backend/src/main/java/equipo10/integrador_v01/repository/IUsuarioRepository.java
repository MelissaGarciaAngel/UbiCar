package equipo10.integrador_v01.repository;

import equipo10.integrador_v01.model.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUsuarioRepository extends JpaRepository<Usuario, Long> {
}