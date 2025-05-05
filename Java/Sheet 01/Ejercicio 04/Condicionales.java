import java.util.Scanner;

public class Condicionales {
    public static void main(String[] args) {
        Scanner escaner = new Scanner(System.in);
        int num;

        System.out.print("Dame un numero  entero: ");
        num = escaner.nextInt();

        if (num > 0) {
            System.out.println("El número es positivo");
        } else if (num < 0) {
            System.out.println("El número es negativo");
        } else {
            System.out.println("El número es cero");
        }

        escaner.close();
    }
}