public class Main {
    public static void main(String[] args) {
        
        Dog dog = new Dog();
        Baby baby = new Baby();
        Crow crow = new Crow();
        
        Trainer trainer = new Trainer();

        trainer.execute(dog);
        trainer.execute(baby);
        trainer.execute(crow);
    }
}
