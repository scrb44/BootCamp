import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> a = new LinkedList<String>();

        a.add("Hola");
        a.add("Mundo");
        a.add("Java");

        for (String s : a) {
            System.out.println(s);
        }
    }
}