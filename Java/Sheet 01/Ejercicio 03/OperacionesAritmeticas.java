import java.util.Scanner;

public class OperacionesAritmeticas {
    public static void main(String[] args) {
        Scanner escaner = new Scanner(System.in);
        int num1, num2;

        System.out.print("Dame un numero  entero: ");
        num1 = escaner.nextInt();

        System.out.print("Dame otro número entero no nulo: ");
        num2 = escaner.nextInt();

        escaner.close();

        System.out.println("La suma de " + num1 + " y de " + num2 + " es de: " + (num1 + num2));
        System.out.println("La resta de " + num1 + " y de " + num2 + " es de: " + (num1 - num2));
        System.out.println("La multiplicación de " + num1 + " por " + num2 + " es de: " + (num1 * num2));
        System.out.println("La division de " + num1 + " entre " + num2 + " es de: " + (num1 / num2));
    }
}