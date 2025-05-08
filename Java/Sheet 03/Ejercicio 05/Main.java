import java.util.HashSet;

public class Main {

    public static void main(String[] args) {
        HashSet<Integer> hs = new HashSet<Integer>();

        hs.add(10);
        hs.add(20);
        hs.add(30);
        hs.add(10);

        for (int number : hs) {
            System.out.println(number);
        }
    }
}