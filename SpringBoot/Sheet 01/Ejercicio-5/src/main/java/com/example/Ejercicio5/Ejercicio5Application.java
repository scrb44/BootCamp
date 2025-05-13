package com.example.Ejercicio5;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

class Libro{
	private static int contador = 1;

	private int id;
	private String titulo;
	private String autor;
	private int anio;

	public Libro(){}

	public Libro(String titulo,String  autor, int anio){
		this.id = contador;
		this.titulo = titulo;
		this.autor = autor;
		this.anio = anio;

		contador++;
	}

	public int getId() {
		return id;
	}

	public String getTitulo() {
		return titulo;
	}

	public String getAutor() {
		return autor;
	}

	public int getAnio() {
		return anio;
	}
}

@SpringBootApplication
@RestController
public class Ejercicio5Application {

	public static void main(String[] args) {
		SpringApplication.run(Ejercicio5Application.class, args);
	}

	List<Libro> libros = new ArrayList<>(List.of(
			new Libro("Cien años de soledad", "Gabriel García Márquez", 1967),
			new Libro("1984", "George Orwell", 1949),
			new Libro("El señor de los anillos", "J.R.R. Tolkien", 1954),
			new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605),
			new Libro("Crónica de una muerte anunciada", "Gabriel García Márquez", 1981),
			new Libro("Orgullo y prejuicio", "Jane Austen", 1813),
			new Libro("Fahrenheit 451", "Ray Bradbury", 1953),
			new Libro("El principito", "Antoine de Saint-Exupéry", 1943),
			new Libro("La sombra del viento", "Carlos Ruiz Zafón", 2001),
			new Libro("Los pilares de la Tierra", "Ken Follett", 1989)
	));

	@GetMapping("/libros")
	public List<Libro> getLibrosAutor(@RequestParam(required = false) String autor, @RequestParam(required = false) String titulo){
		return libros.stream()
				.filter(l -> autor == null || l.getAutor().toLowerCase().contains(autor))
				.filter(l -> titulo == null || l.getTitulo().toLowerCase().contains(titulo))
				.collect(Collectors.toList());
	}

	@PostMapping("/libros")
	public List<Libro> postLibro(@RequestBody Libro l){
		Libro libro = new Libro(l.getTitulo(), l.getAutor(), l.getAnio());
		libros.add(libro);
		return libros;
	}
}
