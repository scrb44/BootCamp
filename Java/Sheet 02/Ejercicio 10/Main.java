abstract class Animal {
    abstract void hacerSonido();
}

class Perro extends Animal {
    @Override
    void hacerSonido() {
        System.out.println("El perro hace: Guau Guau");
    }
}

class Gato extends Animal {
    @Override
    void hacerSonido() {
        System.out.println("El gato hace: Miau Miau");
    }
}

public class Main {
    public static void main(String[] args) {
        Perro p = new Perro();
        Gato g = new Gato();

        p.hacerSonido();
        g.hacerSonido();
    }
}