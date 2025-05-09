class Libro {
    private String isbn;
    private String titulo;
    private int numPaginas;
    private String autor;
    private boolean prestado;

    public Libro() {
        this("", "", 0, "", false);
    }

    public Libro(String isbn, String titulo, int numPaginas, String autor) {
        this(isbn, titulo, numPaginas, autor, false);
    }

    public Libro(String isbn, String titulo, int numPaginas, String autor, boolean prestado) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.numPaginas = numPaginas;
        this.autor = autor;
        this.prestado = prestado;
    }

    public String prestar() {
        String mensaje;

        if (!this.prestado) {
            this.prestado = !this.prestado;
            mensaje = "Se le ha prestado el libro";
        } else {
            mensaje = "El libro ya esta prestado";
        }

        return mensaje;
    }

    public String devolver() {
        String mensaje;

        if (this.prestado) {
            this.prestado = !this.prestado;
            mensaje = "Libro devuelto correctamente";
        } else {
            mensaje = "Este libro no había sido prestado";
        }

        return mensaje;
    }

    public double imprimir(double coste) {
        return this.numPaginas * coste;
    }

    @Override
    public String toString() {
        String mensajePrestamo = this.prestado ? "" : "no ";
        return "El libro (" + this.isbn + ") con título " + this.titulo + " y autor " + this.autor + " tiene "
                + this.numPaginas + " páginas y " + mensajePrestamo + "está prestado";
    }
}

public class Main {

    public static void main(String[] args) {
        Libro archivo = new Libro("123-456-789", "El archivo de las tormentas", 1500, "Brandon Sanderos");

        System.out.println(archivo.toString());

        System.out.println(archivo.prestar());

        System.out.println(archivo.toString());

        System.out.println(archivo.devolver());
    }
}