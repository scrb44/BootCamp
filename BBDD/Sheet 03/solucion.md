# Sheet 03 Ejercicios

## 1. Selecciona todos los registros de una tabla:

-   Consulta todas los datos de la tabla `film`.

```sql
SELECT * FROM film;
```

## 2. Filtrado de datos:

-   Encuentra todas las películas con una duración (`length`) mayor a 120 minutos.

```sql
SELECT * FROM film
WHERE length > 120;
```

-   Busca clientes cuyo apellido sea "Smith" en la tabla `customer`.

```sql
SELECT * FROM customer
WHERE last_name = "SMITH";
```

## 3. Ordenar datos:

-   Ordena las películas de `film` alfabéticamente por el título.

```sql
SELECT * FROM film
ORDER BY title ASC;
```

-   Ordena las películas por duración de mayor a menor.

```sql
SELECT * FROM film
ORDER BY length DESC;
```

## 4. Usar funciones agregadas:

-   Cuenta cuántos actores hay en la tabla `actor`.

```sql
SELECT COUNT(*) AS 'Cantidad de actores' FROM actor;
```

-   Encuentra la duración promedio de las películas en la tabla `film`.

```sql
SELECT AVG(length) AS 'Media de duracion' FROM film;
```

## 5. Filtrar con operadores:

-   Encuentra todas las películas con una clasificación (`rating`) de 'PG' o 'R'.

```sql
SELECT * FROM film
WHERE rating IN ('PG', 'R');
```

-   Muestra los clientes con `last_name` que terminen en "FORD".

```sql
SELECT * FROM customer
WHERE last_name like '%FORD';
```

## 6. JOIN simple:

-   Muestra el nombre completo de los actores y los títulos de las películas en las que han actuado (usa las tablas `actor` , `film_actor` y `film` ).

```sql
SELECT a.first_name, a.last_name, f.title
FROM film_actor AS fa
JOIN ACTOR as a ON a.actor_id = fa.actor_id
JOIN FILM as f ON f.film_id= fa.film_id;
```

## 7. Filtrar con JOIN:

-   Encuentra los títulos de películas alquiladas por el cliente con el nombre "MARY SMITH".

```sql
SELECT f.title FROM customer AS c
JOIN rental as r
    ON c.customer_id = r.customer_id
JOIN inventory as i
    ON r.inventory_id = i.inventory_id
JOIN film as f
    ON f.film_id = i.film_id
WHERE
    first_name = 'MARY' AND
    last_name = 'SMITH'
ORDER BY f.title ASC;
```

## 8. Subconsultas:

-   Encuentra los clientes que hayan alquilado más de 20 películas.

```sql
SELECT c.first_name, c.last_name, sc.rented_films
FROM customer AS c
JOIN (
		SELECT customer_id , COUNT(*) AS rented_films
		FROM rental
		GROUP BY customer_id
) AS sc ON sc.customer_id = c.customer_id
WHERE 20 < sc.rented_films;
```

## 9. Agrupación y agregación:

-   Muestra la cantidad total de alquileres ( `rental_id` ) por cliente ( `customer_id` ).

```sql
SELECT c.first_name, c.last_name, count(r.customer_id) as rented_films
FROM customer AS c
JOIN rental AS r ON c.customer_id = r.customer_id
GROUP BY r.customer_id;
```

-   Calcula el total de ingresos generados por cada película.

```sql
SELECT title, SUM(p.amount) AS earned
FROM film AS f
JOIN inventory AS i
	ON f.film_id = i.inventory_id
JOIN rental AS r
	ON i.inventory_id = r.inventory_id
JOIN payment AS p
	ON r.rental_id = p.rental_id
GROUP BY f.film_id
ORDER BY earned DESC;
```

## 10. Consultas con múltiples JOIN:

-   Muestra los nombres de las películas y las fechas de alquiler para un cliente específico (combina `film` , `rental` y `inventory` ).

```sql
SELECT f.title FROM rental AS r
JOIN inventory AS i
	ON i.inventory_id = r.inventory_id
JOIN film AS f
	ON f.film_id = i.film_id
WHERE r.customer_id = 2
ORDER BY f.title;
```

## 11. Subconsultas correlacionadas:

-   Encuentra las películas que tienen más alquileres que la película promedio.

```sql

```

## 12. Usar funciones de ventana:

-   Agrega un número de fila a cada película basada en su duración (usa `ROW_NUMBER` ).

```sql

```

## 13. Consultas anidadas:

-   Encuentra el título de las películas con el mayor número de actores.

```sql

```

## 14. Usar CASE en consultas:

-   Crea una consulta que clasifique las películas en "Corta", "Media", y "Larga" según su duración (por ejemplo, <60, 60-120, >120 minutos).

```sql

```

## 15. JOIN con CASE:

-   Muestra los clientes junto con un indicador (`vip_status`) que diga "VIP" si han alquilado más de 50 películas.

```sql

```

## 16. Análisis de tendencias:

-   Encuentra el mes con la mayor cantidad de ingresos por alquiler.

```sql

```

## 17. Optimización de subconsultas:

-   Reescribe una subconsulta que encuentre los actores más frecuentes para que use un `JOIN` en lugar de una subconsulta.

```sql

```

## 18. Crear vistas:

-   Crea una vista que muestre los ingresos totales por cada cliente.

```sql

```

## 19. Usar índices:

-   Asegúrate de que las consultas para encontrar películas por duración sean rápidas creando índices en las columnas relevantes.

```sql

```

## 20. Procedimientos almacenados:

-   Crea un procedimiento almacenado que reciba un rango de fechas y devuelva los alquileres realizados en ese período.

```sql

```
