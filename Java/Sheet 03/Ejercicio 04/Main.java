import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> m = new HashMap<String, Integer>();

        m.put("Ana", 25);
        m.put("Luis", 35);
        m.put("Juan", 30);

        for (String nombre : m.keySet()) {
            System.out.println(nombre + " tiene " + m.get(nombre) + " años.");
        }
    }
}