public abstract class Animal {
    abstract String cry() ;  
}

class Baby extends Animal{
    String cry(){
        return "mewl";
    }
}

class Dog extends Animal{
    String cry(){
        return "bowwow";
    }
}

class Crow extends Animal{
    String cry(){
        return "caw";
    }
}

