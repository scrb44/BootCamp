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

class Empleado extends Persona {
    private static int contadorEmpleados = 0;
    private double salario;

    public Empleado(String nombre, int edad, double salario) {
        super(nombre, edad);
        this.salario = salario;
        this.contadorEmpleados++;
    }

    @Override
    public void mostrarDetalles() {
        super.mostrarDetalles();
        System.out.println("Salario: " + this.salario);
    }

    public static int getContadorEmpleados() {
        return contadorEmpleados;
    }
}

class Utilidades {
    public static boolean esMayorDeEdad(Persona p) {
        return (p.getEdad() >= 18);
    }
}

public class main {
    public static void main(String[] args) {
        Empleado p1 = new Empleado("Sofía", 27, 2000);
        Empleado p2 = new Empleado("Gustavo", 35, 2200);
        Persona p3 = new Persona("Ana", 17);

        System.out.println("Empleados totales creados: " + Empleado.getContadorEmpleados());

        System.out.println("¿" + p1.getNombre() + " es mayor de edad? " + Utilidades.esMayorDeEdad(p1));
        System.out.println("¿" + p2.getNombre() + " es mayor de edad? " + Utilidades.esMayorDeEdad(p2));
        System.out.println("¿" + p3.getNombre() + " es mayor de edad? " + Utilidades.esMayorDeEdad(p3));
    }
}