class Direccion {
    private String calle;
    private String ciudad;
    private int codigoPostal;

    public Direccion(String calle, String ciudad, int codigoPostal) {
        this.calle = calle;
        this.ciudad = ciudad;
        this.codigoPostal = codigoPostal;
    }

    public void mostrarDireccion() {
        System.out
                .println("Calle: " + this.calle + "\nCiudad: " + this.ciudad + "\nCódigo Postal: " + this.codigoPostal);
    }

    // Getters
    public String getCalle() {
        return this.calle;
    }

    public String getCiudad() {
        return this.ciudad;
    }

    public int getCodigoPostal() {
        return this.codigoPostal;
    }

    // Setters
    public void setCalle(String calle) {
        this.calle = calle;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public void setCodigoPostal(int codigoPostal) {
        this.codigoPostal = codigoPostal;
    }
}

class Persona {
    private String nombre;
    private int edad;
    private Direccion direccion;

    public Persona(String nombre, int edad, String calle, String ciudad, int codigoPostal) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = new Direccion(calle, ciudad, codigoPostal);
    }

    public void mostrarDetalles() {
        System.out.println("Nombre: " + this.nombre + "\nEdad: " + this.edad);
        System.out.println("Dirección:");
        this.direccion.mostrarDireccion();
    }

    // Getters
    public String getNombre() {
        return this.nombre;
    }

    public int getEdad() {
        return this.edad;
    }

    public Direccion getDireccion() {
        return this.direccion;
    }

    // Setters
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setDireccion(String calle, String ciudad, int codigoPostal) {
        this.direccion.setCalle(calle);
        this.direccion.setCiudad(ciudad);
        this.direccion.setCodigoPostal(codigoPostal);
    }
}

public class Main {
    public static void main(String[] args) {
        Persona p = new Persona("Sofia", 27, "Inventada", "Málaga", 29651);

        p.mostrarDetalles();
    }
}