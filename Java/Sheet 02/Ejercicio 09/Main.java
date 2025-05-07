enum EstadoCivil {
    SOLTERO, CASADO, DIVORCIADO, VIUDO
}

class Persona {
    private String nombre;
    private int edad;
    private EstadoCivil estadoCivil;

    public Persona(String nombre, int edad, EstadoCivil estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.estadoCivil = estadoCivil;
    }

    public void mostrarDetalles() {
        System.out.println(
                "Nombre: " + this.nombre +
                        "\nEdad: " + this.edad +
                        "\nEstado Civil: " + this.estadoCivil);
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
    public static void main(String[] args) {
        Persona s = new Persona("Sofía", 27, EstadoCivil.SOLTERO);

        s.mostrarDetalles();
    }
}