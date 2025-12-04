interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class ConcreteSubject implements Subject {
  public state: number;
  private observers: Observer[] = [];
  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log("Observer is already attached");
    }
    console.log("Attached observer");
    this.observers.push(observer);
  }
  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Subject: Nonexistent observer.");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Subject: Detached an observer.");
  }
  public notify(): void {
    console.log("Subject: Notifying observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}

interface Observer {
  update(subject: Subject): void;
}

class ConcreteObserverA implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log("ConcreteObserverA: Reacted to the event.");
    }
  }
}
