enum ComputerType {
  Desktop = 'desktop',
  Laptop = 'laptop',
}

interface ComputerInterface {
  _model: string;
  computerType: ComputerType;
  prototype?: any;
  ram?: string;
  processor?: string;
  gpu?: string;
  psu?: string;
  desktopMethod?(): void;
  laptopMethod?(): void;
}

function StaticMethodDecorator(
  constructor: Object,
  methodName: string,
  descriptor: PropertyDescriptor
  ) {
  descriptor.writable = false;
  console.log(constructor);
  console.log(methodName);
  console.log(descriptor);
}



class Computer implements ComputerInterface {
  constructor(
    public _model: string,
    public computerType: ComputerType,
  ) {}

public get model(): string {
  return this._model;
  }

public set model(value: string) {
  this._model = value;
  }

@StaticMethodDecorator
public static computerCondition(): void {
  console.log('computer is in fully working condition');
  }
}

Computer.computerCondition();
