interface Imprimible {
    public void imprimir();
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

class Estudiante extends Persona implements Imprimible {
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

    @Override
    public void imprimir() {
        System.out.println("Imprimiendo detalles del estudiante:");
    }
}

class Empleado extends Persona implements Imprimible {
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

    @Override
    public void imprimir() {
        System.out.println("Imprimiendo detalles del empleado:");
    }
}

public class main {

    public static void main(String[] args) {
        Estudiante ana = new Estudiante("Ana", 20, "Ingeniería");
        Empleado luis = new Empleado("Luis", 30, 50000);

        System.out.println("---------");
        ana.imprimir();
        ana.mostrarDetalles();
        System.out.println("---------");
        luis.imprimir();
        luis.mostrarDetalles();
        System.out.println("---------");
    }
}