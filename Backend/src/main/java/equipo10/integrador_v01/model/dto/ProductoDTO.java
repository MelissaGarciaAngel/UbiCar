package equipo10.integrador_v01.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProductoDTO {

    private Long id;

    private String titulo;

    private String descripcion;

    private Set<ImagenDTO> imagen = new HashSet<>();


    private Set<CaracteristicaDTO> caracteristicaDTO = new HashSet<>();

    //@JsonManagedReference
    //@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer"}, allowSetters = true)
    private Set<PoliticaDTO> politica = new HashSet<>();


    private CiudadDTO ciudad;

    private CategoriaDTO categoria;

}
