package equipo10.integrador_v01.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class CiudadDTO {

    private Long id;

    private String localidad;

    private String provincia;

    private Set<ProductoDTO> producto = new HashSet<>();

}
