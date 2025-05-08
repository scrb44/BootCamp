import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        String[] lista = { "Banana", "Apple", "Cherry" };

        Arrays.sort(lista, (a, b) -> a.compareTo(b));

        System.out.println(Arrays.toString(lista));
    }
}