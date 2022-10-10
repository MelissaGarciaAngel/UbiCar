package equipo10.integrador_v01.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import equipo10.integrador_v01.exceptions.BadRequestException;
import equipo10.integrador_v01.exceptions.ResourceNotFoundException;
import equipo10.integrador_v01.model.dto.ProductoDTO;
import equipo10.integrador_v01.model.entity.Producto;
import equipo10.integrador_v01.repository.IProductoRepository;
import equipo10.integrador_v01.service.IProductoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Slf4j
@Service
public class ProductoService implements IProductoService {


    //Inyección de dependencias
    @Autowired
    IProductoRepository productoRepository;

    @Autowired
    ObjectMapper mapper;

    //sobreescribo el CRUD

    public Set<ProductoDTO> listarProductos() {
        List<Producto> listaProductos = productoRepository.findAll();
        Set<ProductoDTO> listaProductosDTO = new HashSet<>();

        for (Producto producto : listaProductos) {


            listaProductosDTO.add(mapper.convertValue(producto, ProductoDTO.class));


        }

        log.info("Listado de categorías: " + listaProductos.toString());
        return listaProductosDTO;
    }

    @Override
    public ProductoDTO buscarProductosPorId(Long id) {
        Optional<Producto> producto = productoRepository.findById(id);
        ProductoDTO productoDTO = null;
        if (producto.isPresent())
            productoDTO = mapper.convertValue(producto, ProductoDTO.class);

        log.info("Producto: " + id + productoDTO.toString());
        return productoDTO;
    }

    @Override
    public ProductoDTO guardarProductos(ProductoDTO productoDTO) throws BadRequestException {
        if (productoDTO.getImagen() == null || productoDTO.getCaracteristicaDTO() == null || productoDTO.getCiudad() == null /*|| productoDTO.getCategoria() == null*/) {
            throw new BadRequestException("No se pudo guardar el producto");
        } else {
            Producto productoAGuardar = mapper.convertValue(productoDTO, Producto.class);
            productoRepository.save(productoAGuardar);
            log.info("Guardando nuevo producto: " + productoAGuardar.getId());
            return mapper.convertValue(productoAGuardar, ProductoDTO.class);
        }
    }

    @Override
    public void eliminarProductos(Long id) throws ResourceNotFoundException {
        Optional<Producto> productoEncontrado = productoRepository.findById(id);
        if (productoEncontrado.isPresent()) {
            log.info("Eliminando el producto: " + id);
            productoRepository.deleteById(id);
        } else
            throw new ResourceNotFoundException("No se encontro ningun producto con el id: " + id);

    }

    @Override
    public void actualizarProductos(ProductoDTO productoDTO) throws ResourceNotFoundException {
        Optional<Producto> productoEncontrado = productoRepository.findById(productoDTO.getId());
        if (productoEncontrado.isPresent()) {
            Producto productoActualizado = productoEncontrado.get();
            productoActualizado.setTitulo(productoDTO.getTitulo());
            productoActualizado.setDescripcion(productoDTO.getDescripcion());
            /*productoActualizado.setCaracteristica((productoDTO.getCaracteristica()));
            productoActualizado.setCiudad(productoDTO.getCiudad());
            productoActualizado.setCategoria(productoDTO.getCategoria());*/
            log.info("Producto : " + productoActualizado.getId() + " actualizado.");
            productoRepository.saveAndFlush(productoActualizado);
        } else throw new ResourceNotFoundException("No se puede modificar un id inexistente");
    }


    @Override
    public Set<ProductoDTO> filtrarProductoPorCiudad(Long id) throws ResourceNotFoundException {
        Set<ProductoDTO> listaProductosDTO = this.listarProductos();
        List<Producto> listaProductos = productoRepository.findAll();
        for (Producto producto : listaProductos) {
            if (producto.getCiudad().getId() == id) {
                listaProductosDTO.add(mapper.convertValue(producto, ProductoDTO.class));
                return listaProductosDTO;
            } else throw new ResourceNotFoundException("No se han encontrado productos para la ciudad seleccionada");

        }
        return null;
    }
    public Set<ProductoDTO> filtrarProductoPorCategoria(Long id) throws ResourceNotFoundException {
        Set<ProductoDTO> listaProductosDTO = this.listarProductos();
        List<Producto> listaProductos = productoRepository.findAll();
        for (Producto producto : listaProductos) {
            if (producto.getCategoria().getId() == id) {
                listaProductosDTO.add(mapper.convertValue(producto, ProductoDTO.class));
                return listaProductosDTO;
            } else throw new ResourceNotFoundException("No se han encontrado productos de la categoria seleccionada");
        }
        return null;
    }
}