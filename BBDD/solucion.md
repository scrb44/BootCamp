# Solución de ejercicios

## Ejercicio 1

### Parte 1

Find the **title** of each film

```sql
SELECT title FROM movies;
```

### Parte 2

Find the **director** of each film

```sql
SELECT director FROM movies;
```

### Parte 3

Find the **title** and **director** of each film

```sql
SELECT title, director FROM movies;
```

### Parte 4

Find the **title** and **year** of each film

```sql
SELECT title, year FROM movies;
```

### Parte 5

Find **all** the information about each film

```sql
SELECT * FROM movies;
```

## Ejercicio 2

### Parte 1

Find the movie with a row **id** of 6

```sql
SELECT * FROM movies WHERE ID = 6;
```

### Parte 2

Find the movies released in the **year**s between 2000 and 2010

```sql
SELECT * FROM movies
WHERE year BETWEEN 2000 AND 2010;
```

### Parte 3

Find the movies **not** released in the **year**s between 2000 and 2010

```sql
SELECT * FROM movies
WHERE year NOT BETWEEN 2000 AND 2010;
```

### Parte 4

Find the first 5 Pixar movies and their release **year**

```sql
SELECT * FROM movies
WHERE id < 6;
```

## Ejercicio 3

### Parte 1

Find all the Toy Story movies

```sql
SELECT * FROM movies
WHERE title LIKE "Toy Story%";
```

### Parte 2

Find all the movies directed by John Lasseter

```sql
SELECT * FROM movies
WHERE director LIKE "John Lasseter";
```

### Parte 3

Find all the movies (and director) not directed by John Lasseter

```sql
SELECT * FROM movies
WHERE director NOT LIKE "John Lasseter";
```

### Parte 4

Find all the WALL-\* movies

```sql
SELECT * FROM movies
WHERE title LIKE "WALL-%";
```

## Ejercicio 4

### Parte 1

List all directors of Pixar movies (alphabetically), without duplicates

```sql
SELECT * FROM movies
GROUP BY director;
```

### Parte 2

List the last four Pixar movies released (ordered from most recent to least)

```sql
SELECT * FROM movies
ORDER BY year DESC
LIMIT 4;
```

### Parte 3

List the **first** five Pixar movies sorted alphabetically

```sql
SELECT * FROM movies
ORDER BY title
LIMIT 5;
```

### Parte 4

List the next five Pixar movies sorted alphabetically

```sql
SELECT * FROM movies
ORDER BY title
LIMIT 5 OFFSET 5;
```

## Ejercicio 5

### Parte 1

List all the Canadian cities and their populations

```sql
SELECT * FROM north_american_cities
WHERE Country = "Canada";
```

### Parte 2

Order all the cities in the United States by their latitude from north to south

```sql
SELECT * FROM north_american_cities
WHERE Country = "United States"
ORDER BY latitude DESC;
```

### Parte 3

List all the cities west of Chicago, ordered from west to east

```sql
SELECT * FROM north_american_cities
WHERE longitude < -87.629798
ORDER BY longitude;
```

### Parte 4

List the two largest cities in Mexico (by population)

```sql
SELECT * FROM north_american_cities
WHERE country = "Mexico"
ORDER BY population DESC
LIMIT 2;
```

### Parte 5

List the third and fourth largest cities (by population) in the United States and their population

```sql
SELECT * FROM north_american_cities
WHERE country = "United States"
ORDER BY population DESC
LIMIT 2 OFFSET 2;
```

## Ejercicio 6

### Parte 1

Find the domestic and international sales for each movie

```sql
SELECT * FROM movies
INNER JOIN boxoffice on id = movie_id;
```

### Parte 2

Order all the cities in the United States by their latitude from north to south

```sql
SELECT movies.title, domestic_sales, international_sales
FROM movies
INNER JOIN boxoffice
    on id = movie_id
WHERE domestic_sales < international_sales;
```

### Parte 3

List all the cities west of Chicago, ordered from west to east

```sql
SELECT title, rating
FROM movies
INNER JOIN boxoffice on id = movie_id
ORDER BY rating DESC;
```

## Ejercicio 7

### Parte 1

Find the list of all buildings that have employees

```sql
SELECT DISTINCT b.building_name
FROM employees as e
INNER JOIN buildings as b
    ON e.building = b.building_name;
```

### Parte 2

Find the list of all buildings and their capacity

```sql
SELECT *
FROM buildings as b;
```

### Parte 3

List all buildings and the distinct employee roles in each building (including empty buildings)

```sql
SELECT DISTINCT b.Building_name, role
FROM buildings b
LEFT JOIN employees e
    ON b.Building_name = e.Building;
```

## Ejercicio 8

### Parte 1

Find the name and role of all employees who have not been assigned to a building

```sql
SELECT * FROM employees
WHERE building IS NULL;
```

### Parte 2

Find the names of the buildings that hold no employees

```sql
SELECT * FROM Buildings b
LEFT JOIN Employees e
    ON b.Building_name = e.Building
WHERE e.Building IS NULL;
```

## Ejercicio 9

### Parte 1

List all movies and their combined sales in **millions** of dollars

```sql
SELECT movies.*, (domestic_sales + international_sales)/1000000 as "Sales"
from boxoffice
INNER JOIN movies ON Movies.Id = Boxoffice.Movie_id
ORDER BY movie_id;
```

### Parte 2

List all movies and their ratings in **percent**

```sql
SELECT movies.*, boxoffice.rating*10 as "Rating %"
from boxoffice
INNER JOIN movies ON Movies.Id = Boxoffice.Movie_id
ORDER BY movie_id;
```

### Parte 3

List all movies that were released on even number years

```sql
SELECT *
FROM movies
WHERE year%2 == 0;
```

## Ejercicio 10

### Parte 1

Find the longest time that an employee has been at the studio

```sql
SELECT name, MAX(years_employed) FROM employees;
```

### Parte 2

For each role, find the average number of years employed by employees in that role

```sql
SELECT AVG(Years_employed) AS "Media por rol"
FROM employees
GROUP BY role;
```

### Parte 3

Find the total number of employee years worked in each building

```sql
SELECT Building, SUM(Years_employed) as "Años totales"
FROM employees
GROUP BY Building
```

## Ejercicio 11

### Parte 1

Find the number of Artists in the studio (without a **HAVING** clause)

```sql
SELECT count(*) as "Cantidad de artistas"
FROM employees
WHERE role = "Artist";
```

### Parte 2

Find the number of Employees of each role in the studio

```sql
SELECT role, count(*) as "Cantidad de trabajadores"
FROM employees
GROUP BY role;
```

### Parte 3

Find the total number of years employed by all Engineers

```sql
SELECT SUM(years_employed) AS "Años totales trabajados por ingenieros"
FROM employees
WHERE role = "Engineer";
```

## Ejercicio 12

### Parte 1

Find the number of movies each director has directed

```sql
SELECT director, count(*) AS "Cantidad de peliculas"
FROM movies
GROUP BY director;
```

### Parte 2

Find the total domestic and international sales that can be attributed to each director

```sql
SELECT
    director,
    SUM(domestic_sales) AS "Domesticas",
    SUM(international_sales) AS "Internacionales",
    SUM(domestic_sales+international_sales) AS "Totales"
FROM movies
INNER JOIN Boxoffice ON id = movie_id
GROUP BY director
```

## Ejercicio 13

### Parte 1

Add the studio's new production, **Toy Story 4** to the list of movies (you can use any director)

```sql
INSERT INTO movies
    (Title, Director, Year, Length_minutes)
VALUES
    ("Toy Story 4", "Lee Unkrich", 2018, 120)
```

### Parte 2

Toy Story 4 has been released to critical acclaim! It had a rating of **8.7**, and made **340 million domestically** and **270 million internationally**. Add the record to the **BoxOffice** table.

```sql
INSERT INTO boxoffice
    (movie_id, rating, domestic_sales, international_sales)
VALUES
    (15, 8.7, 340000000, 270000000);
```

## Ejercicio 14

### Parte 1

The director for A Bug's Life is incorrect, it was actually directed by **John Lasseter**

```sql
UPDATE movies
SET director = "John Lasseter"
WHERE title = "A Bug's Life";
```

### Parte 2

The year that Toy Story 2 was released is incorrect, it was actually released in **1999**

```sql
UPDATE movies
SET year = 1999
WHERE title = "Toy Story 2";
```

### Parte 3

Both the title and director for Toy Story 8 is incorrect! The title should be "Toy Story 3" and it was directed by **Lee Unkrich**

```sql
UPDATE movies
SET title = "Toy Story 3",
    director = "Lee Unkrich"
WHERE title = "Toy Story 8";
```

## Ejercicio 15

### Parte 1

This database is getting too big, lets remove all movies that were released **before** 2005.

```sql
DELETE FROM movies
WHERE YEAR < 2005;
```

### Parte 2

Andrew Stanton has also left the studio, so please remove all movies directed by him.

```sql
DELETE FROM movies
WHERE director = "Andrew Stanton";
```

## Ejercicio 16

### Parte 1

Create a new table named **Database** with the following columns:

-   **Name**: A string (text) describing the name of the database
-   **Version**: A number (floating point) of the latest version of this database
-   **Download_count**: An integer count of the number of times this database was downloaded

This table has no constraints.

```sql
CREATE TABLE IF NOT EXISTS "Database" (
    name TEXT,
    version REAL,
    download_count INTEGER
);
```

## Ejercicio 17

### Parte 1

Add a column named **Aspect_ratio** with a **FLOAT** data type to store the aspect-ratio each movie was released in.

```sql
ALTER TABLE movies
    ADD Aspect_ratio FLOAT;
```

### Parte 2

Add another column named **Language** with a **TEXT** data type to store the language that the movie was released in. Ensure that the default for this language is **English**.

```sql
ALTER TABLE movies
    ADD Language TEXT DEFAULT 'English';
```

## Ejercicio 18

### Parte 1

We've sadly reached the end of our lessons, lets clean up by removing the **Movies** table

```sql
DROP TABLE IF EXISTS movies;
```

### Parte 2

And drop the **BoxOffice** table as well

```sql
DROP TABLE IF EXISTS boxoffice;
```
