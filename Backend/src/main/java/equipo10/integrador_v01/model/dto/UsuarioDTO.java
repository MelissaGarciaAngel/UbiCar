package equipo10.integrador_v01.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO {
    private Long id;

    private String nombre;

    private String apellido;

    private String email;

    private String contrasenia;

    private Set<PuntuacionDTO> puntuacion = new HashSet<>();
}