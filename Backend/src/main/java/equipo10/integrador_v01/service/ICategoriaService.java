package equipo10.integrador_v01.service;

import equipo10.integrador_v01.model.dto.CategoriaDTO;

import java.util.List;

public interface ICategoriaService {

    List<CategoriaDTO> listarCategoria();

    //read
    CategoriaDTO buscarCategoriaPorId(Long id);

    //create
    CategoriaDTO guardarCategoria(CategoriaDTO categoriaDTO);

    //delete
    void eliminarCategoria(Long id);

    //update
    void actualizarCategoria(Long id, CategoriaDTO categoriaDTO);
}