package com.example.Ejercicio3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

class Frase {
	private static int contador = 1;
	private int id;
	private String texto;
	private String autor;

	public Frase(){
		this("", "");
	}
	public Frase(String texto, String autor){
		this.id = contador;
		this.texto = texto;
		this.autor = autor;

		contador++;
	}

	public int getId() {
		return id;
	}

	public String getTexto() {
		return texto;
	}

	public String getAutor() {
		return autor;
	}

}

@SpringBootApplication
@RestController
public class Ejercicio3Application {
	public static List<Frase> frases = new ArrayList<>(List.of(
			new Frase("La vida es lo que pasa mientras estás ocupado haciendo otros planes.", "John Lennon"),
			new Frase("El único modo de hacer un gran trabajo es amar lo que haces.", "Steve Jobs"),
			new Frase("Sé tú el cambio que quieres ver en el mundo.", "Mahatma Gandhi"),
			new Frase("No cuentes los días, haz que los días cuenten.", "Muhammad Ali"),
			new Frase("El éxito es aprender a ir de fracaso en fracaso sin desesperarse.", "Winston Churchill"),
			new Frase("La imaginación es más importante que el conocimiento.", "Albert Einstein"),
			new Frase("El futuro pertenece a quienes creen en la belleza de sus sueños.", "Eleanor Roosevelt"),
			new Frase("Cree que puedes y ya estás a medio camino.", "Theodore Roosevelt"),
			new Frase("No hay caminos para la paz, la paz es el camino.", "Martin Luther King Jr."),
			new Frase("Haz lo que puedas, con lo que tengas, donde estés.", "Theodore Roosevelt")
	));

	public static void main(String[] args) {
		SpringApplication.run(Ejercicio3Application.class, args);
	}

	@GetMapping("/frases")
	public List<Frase> frases(){
		return frases;
	}

	@GetMapping("frases/{id}")
	public Frase frase(@PathVariable int id){
		Frase f = null;
		int i = 0;

		while(i<frases.size() && f == null){
			if(frases.get(i).getId() == id){
				f = frases.get(i);
			}
			i++;
		}
		
		return f;
	}

	@PostMapping("/frases")
	@ResponseStatus(HttpStatus.CREATED)
	public List<Frase> crearFrase(@RequestBody Frase f){
		frases.add(f);
		return frases;
	}
}
