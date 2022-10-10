package equipo10.integrador_v01.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ImagenDTO {

    private Long id;
    private String titulo;
    private String urlImg;


    private Set<ProductoDTO> productos;

}