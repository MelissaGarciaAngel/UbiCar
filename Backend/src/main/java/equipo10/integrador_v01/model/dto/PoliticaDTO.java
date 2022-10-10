package equipo10.integrador_v01.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PoliticaDTO {

    private Long id;

    private String titulo;
    private String descripcion;

    //  @JsonBackReference
    //  @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"}, allowSetters = true)
    /*
    @JsonIgnore
    @ManyToMany(mappedBy = "politica")
    private Set<Producto> producto;
    */
}
