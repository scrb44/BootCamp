import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;

public class Main {
    public static void main(String[] args) {
        List<Integer> lista = new LinkedList<Integer>();

        lista.add(10);
        lista.add(15);
        lista.add(20);
        lista.add(25);

        ListIterator<Integer> it = lista.listIterator();

        System.out.println("Lista entera: " + lista.toString());

        while (it.hasNext()) {
            int a = it.next();
            if (a % 2 == 1) {
                it.remove();
            }
        }

        System.out.println("Lista despues de eliminar impares: " + lista.toString());
    }
}