package com.example.Ejercicio2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
public class Ejercicio2Application {

	public static void main(String[] args) {
		SpringApplication.run(Ejercicio2Application.class, args);
	}

	@GetMapping("/suma/{a}/{b}")
	public int suma(@PathVariable int a,@PathVariable int b){
		return a+b;
	}

	@RequestMapping(value = "/multiplica", params = {"a", "b"})
	public int multiplica(@RequestParam int a, @RequestParam int b){
		return a*b;
	}
}
