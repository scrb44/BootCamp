import java.util.Scanner;

public class EntradaSalida {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String nombre;

        System.out.print("¿Como te llamas? ");
        nombre = sc.nextLine();

        System.out.println("¡Que bonito nombre! Me gusta mucho tu nombre " + nombre);

        sc.close();
    }
}