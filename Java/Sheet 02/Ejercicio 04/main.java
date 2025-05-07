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

class Estudiante extends Persona {
    private String grado;

    public Estudiante(String nombre, int edad, String grado) {
        super(nombre, edad);
        this.grado = grado;
    }

    @Override
    public void mostrarDetalles() {
        super.mostrarDetalles();
        System.out.println("Grado: " + this.grado);
    }
}

class Empleado extends Persona {
    private double salario;

    public Empleado(String nombre, int edad, double salario) {
        super(nombre, edad);
        this.salario = salario;
    }

    @Override
    public void mostrarDetalles() {
        super.mostrarDetalles();
        System.out.println("Salario: " + this.salario);
    }
}

public class Main {

    public static void main(String[] args) {
        Persona[] personas = {
                new Estudiante("Ana", 20, "Ingeniería"),
                new Empleado("Luis", 30, 50000),
                new Persona("Marta", 40)
        };

        for (Persona persona : personas) {
            System.out.println("---------");
            persona.mostrarDetalles();
        }
        System.out.println("---------");
    }
}