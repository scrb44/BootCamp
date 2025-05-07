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

public class main {
    public static void main(String[] args) {
        Persona juan = new Persona("Juan", 25);
        System.out.println("Datos antes de modificarlos: ");
        juan.mostrarDetalles();

        juan.setNombre("Carlos");
        juan.setEdad(30);

        System.out.println("Datos modificados: ");
        juan.mostrarDetalles();
    }
}