class Caja<T> {
    private T contenido;

    public Caja(T contenido) {
        this.contenido = contenido;
    }

    public void setContenido(T contenido) {
        this.contenido = contenido;
    }

    public T getContenido() {
        return this.contenido;
    }
}

class Persona {
    private String nombre;
    private int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public void mostrarDetalles() {
        System.out.println("Nombre: " + this.nombre + "\nEdad: " + this.edad);
    }

    // Getters
    public String getNombre() {
        return this.nombre;
    }

    public int getEdad() {
        return this.edad;
    }

    // Setters
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }
}

public class Main {
    public static <U> U identidad(U valor) {
        return valor;
    }

    public static void main(String[] args) {
        Caja<Persona> c1 = new Caja(new Persona("Sofía", 27));
        Caja<String> c2 = new Caja("Hola mundo");

        c1.getContenido().mostrarDetalles();

        System.out.println(c2.getContenido());

        identidad(c1);
    }
}