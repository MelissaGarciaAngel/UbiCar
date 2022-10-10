package equipo10.integrador_v01.controller;

import equipo10.integrador_v01.exceptions.BadRequestException;
import equipo10.integrador_v01.exceptions.ResourceNotFoundException;
import equipo10.integrador_v01.model.dto.CategoriaDTO;
import equipo10.integrador_v01.model.dto.CiudadDTO;
import equipo10.integrador_v01.model.dto.ProductoDTO;
import equipo10.integrador_v01.service.ICategoriaService;
import equipo10.integrador_v01.service.ICiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/ciudad")
public class CiudadController {

    @Autowired
    ICiudadService ciudadService;

    @GetMapping
    public ResponseEntity<Set<CiudadDTO>> listarCiudades() {
        ciudadService.listarCiudades();
        return ResponseEntity.ok(ciudadService.listarCiudades());
    }

    @PostMapping
    public ResponseEntity<CiudadDTO> guardarCiudad(@RequestBody CiudadDTO ciudadDTO){
        ciudadService.guardarCiudad(ciudadDTO);
        return ResponseEntity.ok(ciudadService.guardarCiudad(ciudadDTO));
    }
}
