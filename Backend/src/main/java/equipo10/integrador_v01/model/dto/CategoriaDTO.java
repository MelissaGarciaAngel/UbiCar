package equipo10.integrador_v01.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

//Mapear los atributos de la tabla “categorías” con una clase de nuestro modelo.
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CategoriaDTO {


    private Long id;
    private String titulo;
    private String descripcion;

    private ImagenDTO imagenCategoria;

    private Set<ProductoDTO> productos = new HashSet<>();


}
