package equipo10.integrador_v01.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

//Mapear los atributos de la tabla “categorías” con una clase de nuestro modelo.
@Entity // El ORM hibernate va a leer esto como bdd
@Table
//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Getter
@Setter
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //id autoincremental
    private Long id;
    private String titulo;
    private String descripcion;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "imagen_id", referencedColumnName = "id")
    private Imagen imagenCategoria;


    @OneToMany(mappedBy = "categoria") //la lista de productos se instancia junto con el resto de los atributos.
    @JsonIgnore
    private Set<Producto> productos = new HashSet<>();

    //constructores
    public Categoria() {
    }

    public Categoria(String titulo, String descripcion, Imagen imagenCategoria) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagenCategoria = imagenCategoria;
    }

    @Override
    public String toString() {
        return "Categoria{" +
                "titulo='" + titulo + '\'' +
                '}';
    }
}
