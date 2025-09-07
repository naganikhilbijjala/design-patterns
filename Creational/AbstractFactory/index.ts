interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements