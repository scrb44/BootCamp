import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        ArrayList<Integer> al = new ArrayList<Integer>();
        int total = 0;

        al.add(10);
        al.add(20);
        al.add(30);

        for (int i : al) {
            total += i;
        }

        System.out.println("El total es de: " + total);
    }
}