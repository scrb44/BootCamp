package com.example.Ejercicio4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

class Tarea{
	private static int contador = 1;

	private int id;
	private String descripcion;
	private boolean completado;

	public Tarea(){
		this("", false);
	}

	public Tarea(String descripcion){
		this(descripcion, false);
	}

	public Tarea(String descripcion, boolean completado){
		this.id = contador;
		this.descripcion = descripcion;
		this.completado = completado;

		contador++;
	}

	public int getId() {
		return this.id;
	}

	public String getDescripcion() {
		return this.descripcion;
	}

	public boolean getCompletado(){
		return this.completado;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public void setCompletado(boolean completado) {
		this.completado = completado;
	}
}

@SpringBootApplication
@RestController
public class Ejercicio4Application {

	public static void main(String[] args) {
		SpringApplication.run(Ejercicio4Application.class, args);
	}

	static List<Tarea> tareas = new ArrayList<>();

	@GetMapping("/tareas")
	public List<Tarea> getAllTareas(){
		return tareas;
	}

	@RequestMapping(value = "/tareas", params = {"completado"})
	public List<Tarea> getTareasFiltered(@RequestParam boolean completado){
		return tareas.stream()
				.filter(tarea -> tarea.getCompletado() == completado)
				.collect(Collectors.toList());
	}

	@PostMapping("/tareas")
	@ResponseStatus(HttpStatus.CREATED)
	public List<Tarea> crearFrase(@RequestBody Tarea tarea){
		tareas.add(tarea);
		return tareas;
	}

	@PutMapping("/tareas/{id}")
	public Tarea modificarTarea(@PathVariable int id, @RequestBody Tarea tarea){
		List<Tarea> buscada = tareas.stream().filter(tar -> tar.getId() == id).collect(Collectors.toList());
		Tarea tareaBuscada = buscada.getFirst();

		tareaBuscada.setDescripcion(tarea.getDescripcion());
		tareaBuscada.setCompletado(tarea.getCompletado());

		return tareaBuscada;
	}

	@DeleteMapping("/tareas/{id}")
	public List<Tarea> eliminarTarea(@PathVariable int id){
		tareas = tareas.stream().filter(t -> t.getId() != id).collect(Collectors.toList());
		return tareas;
	}
}
