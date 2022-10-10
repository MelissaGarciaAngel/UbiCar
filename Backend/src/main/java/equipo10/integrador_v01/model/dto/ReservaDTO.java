package equipo10.integrador_v01.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ReservaDTO {
    private Long id;
    private String horaInicio;
    private LocalDate fechaRecogida;
    private LocalDate fechaEntrega;

}
