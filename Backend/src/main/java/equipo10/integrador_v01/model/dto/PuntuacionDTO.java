package equipo10.integrador_v01.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PuntuacionDTO {
    private Long id;

    private Integer puntuacion;

    private ProductoDTO producto;

    private UsuarioDTO usuario;
}
