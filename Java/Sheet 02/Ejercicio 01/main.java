class Persona {
    String nombre;
    int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public void mostrarDetalles() {
        System.out.println("Nombre: " + this.nombre + "\nEdad: " + this.edad);
    }
}

public class Main {
    public static void main(String[] args) {
        Persona juan = new Persona("Juan", 25);
        juan.mostrarDetalles();
    }
}