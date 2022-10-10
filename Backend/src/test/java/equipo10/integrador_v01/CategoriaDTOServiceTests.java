package equipo10.integrador_v01;

import com.fasterxml.jackson.databind.ObjectMapper;
import equipo10.integrador_v01.model.dto.CategoriaDTO;
import equipo10.integrador_v01.model.dto.ImagenDTO;
import equipo10.integrador_v01.model.entity.Categoria;
import equipo10.integrador_v01.model.entity.Imagen;
import equipo10.integrador_v01.model.entity.Producto;
import equipo10.integrador_v01.repository.ICategoriaRepository;
import equipo10.integrador_v01.service.impl.CategoriaService;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.*;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
public class CategoriaDTOServiceTests {
/*
    @Autowired
    private CategoriaService categoriaService;
    @Autowired
    ObjectMapper mapper;
    @MockBean
    private ICategoriaRepository categoriaRepository;

    @Test
    public void aGuardarCategoriaTest() {
        ImagenDTO imagen = new ImagenDTO("img", ":./img/test");
        CategoriaDTO categoriaDTO1 = new CategoriaDTO("Imagen Test", "Test: test test test, test test test.", imagen);
        Categoria categoria = new Categoria();
        categoria.setTitulo("Imagen Test");

        Mockito.when(categoriaRepository.findById(1L)).thenReturn(Optional.of(categoria));
        categoriaService.guardarCategoria(categoriaDTO1);

        Assert.assertEquals(categoriaDTO1.getTitulo(), categoriaRepository.findById(1L).get().getTitulo());
    }

    @Test
    public void bEliminarCategoriaTest() {
        Mockito.doNothing().when(categoriaRepository).deleteById(2L);
        Mockito.when(categoriaRepository.findById(2L)).thenReturn(Optional.empty());

        //Mockito.doThrow(new SQLException("No")).when(categoriaRepository).deleteById(2L);
        //Mockito.when(asasas).thenThrow(new NullPointerException);
        categoriaService.eliminarCategoria(2L);
        Assert.assertTrue(categoriaRepository.findById(2L).isEmpty());
    }

    @Test
    public void cListarCategoriaTest() {
        ImagenDTO imagen2 = new ImagenDTO("img", ":./img/test");
        ImagenDTO imagen3 = new ImagenDTO("img", ":./img/test");

        CategoriaDTO categoriaDTO3 = new CategoriaDTO("Imagen Test3", "Test3: test test test, test test test.", imagen2);
        CategoriaDTO categoriaDTO4 = new CategoriaDTO("Imagen Test4", "Test4: test test test, test test test.", imagen3);

        List<Categoria> categoriaLista = new ArrayList<>();
        categoriaLista.add(mapper.convertValue(categoriaDTO3, Categoria.class));
        categoriaLista.add(mapper.convertValue(categoriaDTO4, Categoria.class));


        Mockito.when(categoriaRepository.findAll()).thenReturn(categoriaLista);

        categoriaService.guardarCategoria(categoriaDTO3);
        categoriaService.guardarCategoria(categoriaDTO4);

        List<CategoriaDTO> listaCategoriasEncontradas = categoriaService.listarCategoria();

        Assert.assertEquals(2, listaCategoriasEncontradas.size());
    }

    @Test
    public void dBuscarCategoriaPorIdTest() {
        ImagenDTO imagen4 = new ImagenDTO("img", ":./img/test");
        CategoriaDTO categoriaDTO5 = new CategoriaDTO("Imagen Test5", "Test5: test test test, test test test.", imagen4);
        categoriaService.guardarCategoria(categoriaDTO5);

        Categoria categoria5 = new Categoria();
        categoria5.setTitulo("Imagen Test5");

        Mockito.when(categoriaRepository.findById(5L)).thenReturn(Optional.of(categoria5));

        Assert.assertEquals(categoriaDTO5.getTitulo(), categoriaService.buscarCategoriaPorId(5L).getTitulo());
    }

    @Test
    public void eActualizarCategoriaTest() {
        ImagenDTO imagen = new ImagenDTO("img", ":./img/test");

        CategoriaDTO categoriaDTO6 = new CategoriaDTO("Imagen Test", "Test: test test test, test test test.", imagen);
        categoriaService.guardarCategoria(categoriaDTO6);
        categoriaDTO6.setId(6L);
        categoriaDTO6.setTitulo("Imagen Test6 Modif");

        categoriaService.actualizarCategoria(categoriaDTO6.getId(), categoriaDTO6);
        Categoria categoria = new Categoria();
        categoria.setId(6L);
        categoria.setTitulo("Imagen Test6 Modif");

        Mockito.when(categoriaRepository.findById(6L)).thenReturn(Optional.of(categoria));

        Assert.assertEquals(categoriaDTO6.getTitulo(), categoriaRepository.findById(6L).get().getTitulo());

    }
*/
}