import java.util.Scanner;

public class Palindromo {

    public static void main(String[] args) {
        Scanner escaner = new Scanner(System.in);
        String posiblePalindromo, posiblePalindromoAlReves = "";
        int longitud;

        System.out.print("Da una palabra que quieras saber si es un palíndromo o no: ");
        posiblePalindromo = escaner.nextLine().trim();
        longitud = posiblePalindromo.length();

        for (int i = 0; i < longitud; i++) {
            posiblePalindromoAlReves += posiblePalindromo.charAt(longitud - i - 1);
        }

        if (posiblePalindromo.toLowerCase().compareTo(posiblePalindromoAlReves.toLowerCase()) == 0) {
            System.out.println("El texto es un palíndromo");
        } else {
            System.out.println("El texto no es un palíndromo");
        }
        escaner.close();
    }

}