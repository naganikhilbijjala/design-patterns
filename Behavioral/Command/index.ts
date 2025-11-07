interface Command {
  execute(): void;
}

class SimpleCommand implements Command {
  private payload: string;
  constructor(payload: string) {
    this.payload = payload;
  }
  public execute(): void {
    console.log("Simple Command");
  }
}

class Receiver {
  public doSomething(a: string): void {
    console.log(`Receiver: Working on (${a}.)`);
  }

  public doSomethingElse(b: string): void {
    console.log(`Receiver: Also working on (${b}.)`);
  }
}

class Invoker {
  private onStart: Command;
  private onFinish: Command;

  private setOnStart(command: Command): void {
    this.onStart = command;
  }

  private setOnFinish(command: Command): void {
    this.onFinish = command;
  }

  private isCommand(object): object is Command {
    return object.execute !== undefined;
  }

  public doSomethingImportant(): void {}
}

class ComplexCommand implements Command {
  public execute(): void {}
}
