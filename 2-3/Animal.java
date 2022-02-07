public class Animal {
    void move(){ System.out.println("moving");}
    void cry(){ System.out.println("crying");}
}

class Mammal extends Animal{
    void bear(){ System.out.println("bearing");}
}

class Bird extends Animal{
    void fly(){ System.out.println("flying");}
}
