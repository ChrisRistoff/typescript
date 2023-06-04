enum ConsoleType{
  xbox = 'xbox',
  playstation = 'playstation',
}

interface ConsoleInterface {
  _model: string;
  conType: string;
  prototype?: any;
  origin?: string;
  founded?: number;
  manufacturer?: Manufacturers;
  type?: string;
  psMethod?(): void;
  xboxMethod?(): void;
}

function MethodDecorator(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor
  ) {
  descriptor.writable = false;
  console.log(classPrototype.constructor);
  console.log(methodName);
  console.log(descriptor);
}


class Console implements ConsoleInterface{
  constructor(
    public _model: string,
    public conType: string,
  ) {}

public get model(): string {
  return this._model;
  }

public set model(value: string) {
  this._model = value;
  }

@MethodDecorator
public conTypeName(): void {
  console.log(`The console name is ${this.conType}`);
  }
}

const ps5 = new Console('PS5', ConsoleType.playstation);

// this will throw an error because I changed the descriptor to not be writable
// ps5.conTypeName = () => { console.log('Another method'); }
