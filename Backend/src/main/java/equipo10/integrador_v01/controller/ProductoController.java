package equipo10.integrador_v01.controller;

import equipo10.integrador_v01.exceptions.BadRequestException;
import equipo10.integrador_v01.exceptions.ResourceNotFoundException;
import equipo10.integrador_v01.model.dto.ProductoDTO;
import equipo10.integrador_v01.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/producto")
public class ProductoController {

    @Autowired
    IProductoService productoService;

    @RequestMapping(value = "/listar", method = RequestMethod.GET)
    public ResponseEntity<Set<ProductoDTO>> traerTodosProductos(){
        return ResponseEntity.ok(productoService.listarProductos());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<ProductoDTO> buscarProductoPorId(@PathVariable Long id) throws ResourceNotFoundException {
        Optional<ProductoDTO> producto = Optional.ofNullable(productoService.buscarProductosPorId(id));
        if (producto.isPresent()) {
            return ResponseEntity.ok(productoService.buscarProductosPorId(id));
        } else throw new ResourceNotFoundException("No se encontro el id solicitado");
    }

    @RequestMapping(value = "/guardar", method = RequestMethod.POST)
    public ResponseEntity<ProductoDTO> guardarProducto(@RequestBody ProductoDTO productoDTO) throws BadRequestException {
        return ResponseEntity.ok(productoService.guardarProductos(productoDTO));
    }

    //ProductoDTO productoDTO = new ProductoDTO()
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> eliminarProducto(@PathVariable Long id) throws ResourceNotFoundException {
        productoService.eliminarProductos(id);
        return ResponseEntity.ok("Producto: " + id + " fue eliminado con exito.");
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> modificarProducto(@PathVariable Long id, @RequestBody ProductoDTO productoDTO) throws ResourceNotFoundException {
        productoService.actualizarProductos(productoDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @RequestMapping(value = "/ciudad/{id}", method = RequestMethod.GET)
    public ResponseEntity<Set<ProductoDTO>> buscarPorCiudad(@PathVariable Long id) throws ResourceNotFoundException{
        productoService.filtrarProductoPorCiudad(id);
        return ResponseEntity.ok(productoService.filtrarProductoPorCiudad(id));
    }

    @RequestMapping(value = "/categoria/{id}", method = RequestMethod.GET)
    public ResponseEntity <Set<ProductoDTO>> filtrarPorCategoria(@PathVariable Long id) throws ResourceNotFoundException{
        productoService.filtrarProductoPorCategoria(id);
        return ResponseEntity.ok(productoService.filtrarProductoPorCategoria(id));
    }

}
