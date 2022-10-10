package equipo10.integrador_v01;

import equipo10.integrador_v01.exceptions.BadRequestException;
import equipo10.integrador_v01.exceptions.ResourceNotFoundException;
import equipo10.integrador_v01.model.dto.*;
import equipo10.integrador_v01.model.entity.*;
import equipo10.integrador_v01.repository.IProductoRepository;
import equipo10.integrador_v01.service.impl.ProductoService;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


import java.util.HashSet;
import java.util.Set;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
public class ProductoDTOServiceTest {

   @Autowired
   private ProductoService productoService;
   @Autowired
   private IProductoRepository productoRepository;

/*
        @Test
        public void aGuardarProductoTest() throws BadRequestException {
            Set<ImagenDTO> imagen = new HashSet<>();
            Set<Caracteristica> caracteristicas = new HashSet<>();
            Set<Politica> politicas = new HashSet<>();
            Ciudad ciudad = new Ciudad();
            Categoria categoria = new Categoria();
            ProductoDTO productoDTO = new ProductoDTO("titulo1", "descrip", imagen, caracteristicas, politicas ,ciudad, categoria);
            productoService.guardarProductos(productoDTO);
            Assert.assertEquals(productoDTO.getTitulo(), productoRepository.findById(1L).get().getTitulo());
        }

        @Test
        public void bEliminarProductoTest() throws ResourceNotFoundException {
            productoService.eliminarProductos(1L);
            Assert.assertTrue(productoRepository.findById(1L).isEmpty());
        }
        @Test
        public void cListarCategoriaTest() throws BadRequestException {
            Set<ImagenDTO> imagen1 = new HashSet<>();
            Set<Caracteristica> caracteristicas1 = new HashSet<>();
            Set<Politica> politicas1 = new HashSet<>();
            Ciudad ciudad1 = new Ciudad();
            Categoria categoria1 = new Categoria();
            ProductoDTO productoDTO1 = new ProductoDTO("titulo1", "descrip1", imagen1, caracteristicas1, politicas1,ciudad1, categoria1);
            productoService.guardarProductos(productoDTO1);

            Set<ImagenDTO> imagen2 = new HashSet<>();
            Set<Caracteristica> caracteristicas2 = new HashSet<>();
            Set<Politica> politicas2 = new HashSet<>();
            Ciudad ciudad2 = new Ciudad();
            Categoria categoria2 = new Categoria();
            ProductoDTO productoDTO2 = new ProductoDTO("titulo2", "descrip2", imagen2, caracteristicas2, politicas2 ,ciudad2, categoria2);
            productoService.guardarProductos(productoDTO2);

            Set<ProductoDTO> listaProductosEncontrados = productoService.listarProductos();

            Assert.assertEquals(2, listaProductosEncontrados.size());
        }
        @Test
        public void dBuscarCategoriaPorIdTest() throws BadRequestException {
            Set<ImagenDTO> imagen4 = new HashSet<>();
            Set<Caracteristica> caracteristicas4 = new HashSet<>();
            Set<Politica> politicas4 = new HashSet<>();
            Ciudad ciudad4 = new Ciudad();
            Categoria categoria4 = new Categoria();
            ProductoDTO productoDTO4 = new ProductoDTO("titulo4", "descrip4", imagen4, caracteristicas4, politicas4 ,ciudad4, categoria4);
            productoService.guardarProductos(productoDTO4);

            Assert.assertEquals(productoDTO4.getTitulo(), productoService.buscarProductosPorId(4L).getTitulo());
        }

        @Test
        public void eActualizarCategoriaTest() throws BadRequestException, ResourceNotFoundException {
            Set<ImagenDTO> imagen5 = new HashSet<>();
            Set<Caracteristica> caracteristicas5 = new HashSet<>();
            Set<Politica> politicas5 = new HashSet<>();
            Ciudad ciudad5 = new Ciudad();
            Categoria categoria5 = new Categoria();
            ProductoDTO productoDTO5 = new ProductoDTO("titulo5", "descrip5", imagen5, caracteristicas5, politicas5 ,ciudad5, categoria5);
            productoService.guardarProductos(productoDTO5);

            ProductoDTO productoDTO5M = new ProductoDTO(5L, "tituloMODIFICADO", "descrip5", imagen5, caracteristicas5, politicas5 ,ciudad5, categoria5);
            productoService.actualizarProductos(productoDTO5M);

            Assert.assertEquals("tituloMODIFICADO", productoRepository.findById(5L).get().getTitulo());
        }

*/


}