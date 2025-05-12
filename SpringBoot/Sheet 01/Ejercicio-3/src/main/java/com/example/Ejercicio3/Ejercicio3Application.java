package com.example.Ejercicio3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

class Frase {
	public int id;
	public String texto;
	public String autor;

	public Frase(){}
	public Frase(int id, String texto, String autor){
		this.id = id;
		this.texto = texto;
		this.autor = autor;
	}
}

@SpringBootApplication
@RestController
public class Ejercicio3Application {
	public static List<Frase> frases = new ArrayList<>(List.of(
			new Frase(1, "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", "John Lennon"),
			new Frase(2, "El único modo de hacer un gran trabajo es amar lo que haces.", "Steve Jobs"),
			new Frase(3, "Sé tú el cambio que quieres ver en el mundo.", "Mahatma Gandhi"),
			new Frase(4, "No cuentes los días, haz que los días cuenten.", "Muhammad Ali"),
			new Frase(5, "El éxito es aprender a ir de fracaso en fracaso sin desesperarse.", "Winston Churchill"),
			new Frase(6, "La imaginación es más importante que el conocimiento.", "Albert Einstein"),
			new Frase(7, "El futuro pertenece a quienes creen en la belleza de sus sueños.", "Eleanor Roosevelt"),
			new Frase(8, "Cree que puedes y ya estás a medio camino.", "Theodore Roosevelt"),
			new Frase(9, "No hay caminos para la paz, la paz es el camino.", "Martin Luther King Jr."),
			new Frase(10, "Haz lo que puedas, con lo que tengas, donde estés.", "Theodore Roosevelt")
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
			if(frases.get(i).id == id){
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
