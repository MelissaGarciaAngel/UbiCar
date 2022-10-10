package equipo10.integrador_v01.service;

import equipo10.integrador_v01.exceptions.BadRequestException;
import equipo10.integrador_v01.exceptions.ResourceNotFoundException;
import equipo10.integrador_v01.model.dto.ProductoDTO;

import java.util.List;
import java.util.Set;

public interface IProductoService {
    Set<ProductoDTO> listarProductos();

    //read
    ProductoDTO buscarProductosPorId(Long id);

    //create
    ProductoDTO guardarProductos(ProductoDTO productoDTO) throws BadRequestException;

    //delete
    void eliminarProductos(Long id) throws ResourceNotFoundException;

    //update
    void actualizarProductos(ProductoDTO productoDTO) throws ResourceNotFoundException;

    Set<ProductoDTO> filtrarProductoPorCiudad(Long id) throws ResourceNotFoundException;

    Set<ProductoDTO> filtrarProductoPorCategoria(Long id) throws ResourceNotFoundException;
}
