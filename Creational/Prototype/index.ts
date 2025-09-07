class ComponentWithBackReference {
  public prototype;
  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

class Prototype {
  public primitive: any;
  public component: object;
  public circularReference: ComponentWithBackReference;

  public clone(): this {
    const clone = Object.create(this);
    clone.component = Object.create(this.component);
    clone.circularReference = new ComponentWithBackReference(clone);

    return clone;
  }
}

function clientCode() {
  const p1 = new Prototype();
  p1.primitive = 245;
  p1.component = new Date();
  p1.circularReference = new ComponentWithBackReference(p1);

  const p2 = p1.clone();

  if ((p1.primitive = p2.primitive)) {
    console.log("Primitive field values are carried over to a clone. Yay!");
  } else {
    console.log("Primitive field values have not been copied. Boo!");
  }
}

clientCode();
