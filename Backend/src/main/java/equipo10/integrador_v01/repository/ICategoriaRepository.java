package equipo10.integrador_v01.repository;

import equipo10.integrador_v01.model.entity.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository //le aviso que voy a usar el repo de hibernate en la tabla de categorias
public interface ICategoriaRepository extends JpaRepository<Categoria, Long> {

}
