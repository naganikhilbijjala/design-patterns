/**
 * The creator class declares the factory method that is supposed to return an object of a Product Class
 * The Creator's subclass usually provides implementation of this method.
 */
abstract class Creator {
  /**
   * Creator may also provide default implementation of the product
   */
  public abstract factoryMethod(): Product;

  /**
   * Creator's can also have some core business logic that relies in product object
   */
  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: The same creators code has just worked with ${product.operation()}`;
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

interface Product {
  operation(): string;
}

class ConcreteProduct1 implements Product {
  public operation(): string {
    return "{Result of concrete product 1}";
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return "{Result of concrete product 2}";
  }
}

function clientCode(creator: Creator) {
  console.log("I'm not aware of Creator's class, but it still works");
  console.log(creator.someOperation());
}

console.log("App: Launched with the Concrete Creator 1");
clientCode(new ConcreteCreator1());

console.log("App: Launched with Concrete Creator 2");
clientCode(new ConcreteCreator2());
