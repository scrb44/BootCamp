import java.util.Scanner;

public class Aleatorios {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int numAdivinar = (int) (Math.random() * 100 + 1);
        int prueba;
        boolean adivinado = false;

        System.out.println("Hemos generado un numero aleatorio entre 1 y 100.");

        while (!adivinado) {
            System.out.print("Prueba a adivinar el número: ");
            prueba = sc.nextInt();

            if (prueba == numAdivinar) {
                adivinado = true;
            } else if (numAdivinar > prueba) {
                System.out.println("El número a adivinar es mayor que el que has dado.");
            } else {
                System.out.println("El número a adivinar es menor que el que has dado.");
            }
            System.out.println("");
        }

        System.out.println("¡Enhorabuena! ¡Has acetado el número!");
        System.out.println("El número era efectivamente " + numAdivinar);
    }
}