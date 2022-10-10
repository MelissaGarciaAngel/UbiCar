package equipo10.integrador_v01.service.impl;
import com.fasterxml.jackson.databind.ObjectMapper;
import equipo10.integrador_v01.exceptions.BadRequestException;
import equipo10.integrador_v01.model.dto.CiudadDTO;
import equipo10.integrador_v01.model.dto.ProductoDTO;
import equipo10.integrador_v01.model.entity.Ciudad;
import equipo10.integrador_v01.model.entity.Producto;
import equipo10.integrador_v01.repository.ICiudadRepository;
import equipo10.integrador_v01.repository.IProductoRepository;
import equipo10.integrador_v01.service.ICiudadService;
import equipo10.integrador_v01.service.IProductoService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class CiudadService implements ICiudadService {

    final static Logger log = Logger.getLogger(ICiudadService.class);

    //Inyección de dependencias
    @Autowired
    ICiudadRepository ciudadRepository;

    @Autowired
    ObjectMapper mapper;
    @Override
    public Set<CiudadDTO> listarCiudades() {
            Set<CiudadDTO> listaCiudadesDTO = new HashSet<>();
            List<Ciudad> listaCiudades = ciudadRepository.findAll();
            for(Ciudad ciudad: listaCiudades){
                listaCiudadesDTO.add(mapper.convertValue(ciudad, CiudadDTO.class));
            }
            log.info("Total de ciudades: "+listaCiudades.toArray().length);
            return listaCiudadesDTO;
        }

    @Override
    public CiudadDTO guardarCiudad(CiudadDTO ciudadDTO) {
            Ciudad ciudadAGuardar = mapper.convertValue(ciudadDTO, Ciudad.class);
            ciudadRepository.save(ciudadAGuardar);
            log.info("Guardando nueva ciudad: " + ciudadAGuardar.getLocalidad());
            return mapper.convertValue(ciudadAGuardar, CiudadDTO.class);
        }
    }


