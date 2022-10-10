package equipo10.integrador_v01.controller;

import equipo10.integrador_v01.exceptions.BadRequestException;
import equipo10.integrador_v01.exceptions.ResourceNotFoundException;
import equipo10.integrador_v01.exceptions.ValidationException;
import equipo10.integrador_v01.model.dto.CategoriaDTO;
import equipo10.integrador_v01.service.ICategoriaService;
import org.hibernate.mapping.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {

    @Autowired
    ICategoriaService categoriasService;

    @RequestMapping(value = "/listar", method = RequestMethod.GET)
    public ResponseEntity<List<CategoriaDTO>> listarTodasCategorias() throws ResourceNotFoundException, BadRequestException {
        categoriasService.listarCategoria();
        return ResponseEntity.ok(categoriasService.listarCategoria());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<CategoriaDTO> buscarCategoriaPorId(@PathVariable Long id) throws ResourceNotFoundException, BadRequestException {
        Optional<CategoriaDTO> categoria = Optional.ofNullable(categoriasService.buscarCategoriaPorId(id));
        if (categoria.isPresent()) {
            return ResponseEntity.ok(categoriasService.buscarCategoriaPorId(id));
        } else throw new ResourceNotFoundException("No se encuentra el id");
    }

    @RequestMapping(value = "/guardar", method = RequestMethod.POST)
    public ResponseEntity<Map<String, Object>> guardarCategoria(@Valid @RequestBody CategoriaDTO categoriaDTO, BindingResult result) throws BadRequestException, ValidationException {
        Map<String, Object> response = new HashMap<>();
        if (result.hasErrors()) {
            List<String> errors = result.getFieldErrors().stream()
                    .map(err -> "El campo '" + err.getField() + "' " + err.getDefaultMessage())
                    .collect(Collectors.toList());
            response.put("error", errors);
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
        } else {
            response.put("Categoria", categoriasService.guardarCategoria(categoriaDTO));
            return ResponseEntity.ok(response);
        }
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<CategoriaDTO> eliminarCategoria(@PathVariable Long id) throws ResourceNotFoundException {
        Optional<CategoriaDTO> categoria = Optional.ofNullable(categoriasService.buscarCategoriaPorId(id));
        if (categoria.isPresent()) {
            categoriasService.eliminarCategoria(id);
        } else throw new ResourceNotFoundException("El id no existe");
        return null;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Map<String, Object>> actualizarCategoria(@PathVariable Long id, @Valid @RequestBody CategoriaDTO categoriaDTO, BindingResult result) throws ResourceNotFoundException, BadRequestException {
        Map<String, Object> response = new HashMap<>();
        if (result.hasErrors()) {
            List<String> errors = result.getFieldErrors().stream()
                    .map(err -> "El campo '" + err.getField() + "' " + err.getDefaultMessage())
                    .collect(Collectors.toList());
            response.put("error", errors);
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
        } else {
            Optional<CategoriaDTO> categoria = Optional.ofNullable(categoriasService.buscarCategoriaPorId(id));
            if (categoria.isPresent()) {
                categoriasService.actualizarCategoria(id, categoriaDTO);
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
            } else throw new ResourceNotFoundException("El recurso que intenta actualizar no existe");
        }

    }
}