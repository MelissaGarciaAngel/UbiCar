package equipo10.integrador_v01.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column
    private String titulo;
    @Column
    private String descripcion;
    /* A implementar a futuro en el opcional
    @Column(name = "LATITUD")
    private Double lalitud;
    @Column(name = "LONGITUD")
    private Double longitud; 3
    */

    @ManyToMany
    //@JsonIgnore
    @JoinTable(
            name = "producto_has_imagen",
            joinColumns = @JoinColumn(name = "producto_id"),
            inverseJoinColumns = @JoinColumn(name = "imagen_id"))
    private Set<Imagen> imagen = new HashSet<>();

    @ManyToMany
    @JoinTable(
            name = "producto_has_caracteristica",
            joinColumns = @JoinColumn(name = "producto_id"),
            inverseJoinColumns = @JoinColumn(name = "caracteristica_id"))
    private Set<Caracteristica> caracteristica = new HashSet<>();

    //@JsonManagedReference
    //@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer"}, allowSetters = true)

    @ManyToMany
    @JoinTable(
            name = "producto_has_politica",
            joinColumns = @JoinColumn(name = "producto_id"),
            inverseJoinColumns = @JoinColumn(name = "politica_id"))
    private Set<Politica> politica = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(
            name = "ciudad_id",
            referencedColumnName = "id")
    private Ciudad ciudad;

    @ManyToOne (fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(
            name = "categoria_id",
            referencedColumnName = "id")
    private Categoria categoria;

    public Producto() {
    }

    public Producto(String titulo, String descripcion, Set<Imagen> imagen, Set<Caracteristica> caracteristica, Set<Politica> politica, Ciudad ciudad, Categoria categoria) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.caracteristica = caracteristica;
        this.politica = politica;
        this.ciudad = ciudad;
        this.categoria = categoria;
    }

    /* Electiva a implementar a futuro
    @OneToMany(mappedBy = "producto")
    private Set<Puntuacion> puntuacion = new HashSet<>();
    */

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<Imagen> getImagen() {
        return imagen;
    }

    public void setImagen(Set<Imagen> imagen) {
        this.imagen = imagen;
    }

    public Set<Caracteristica> getCaracteristica() {
        return caracteristica;
    }

    public void setCaracteristica(Set<Caracteristica> caracteristica) {
        this.caracteristica = caracteristica;
    }

    public Set<Politica> getPolitica() {
        return politica;
    }

    public void setPolitica(Set<Politica> politica) {
        this.politica = politica;
    }

    public Ciudad getCiudad() {
        return ciudad;
    }

    public void setCiudad(Ciudad ciudad) {
        this.ciudad = ciudad;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}
