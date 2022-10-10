package equipo10.integrador_v01.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@Table
public class Imagen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String titulo;
    private String urlImg;

    @JsonIgnore
    @ManyToMany(fetch=FetchType.LAZY, mappedBy = "imagen")
    private Set<Producto> productos;

    public Imagen() {
    }

    public Imagen(String titulo, String urlImg, Set<Producto> productos) {
        this.titulo = titulo;
        this.urlImg = urlImg;
        this.productos = productos;
    }

    public Imagen(String titulo, String urlImg) {
        this.titulo = titulo;
        this.urlImg = urlImg;
    }
}