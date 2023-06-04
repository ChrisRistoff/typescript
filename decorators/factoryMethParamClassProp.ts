interface CoinsInterface {
  name: string;
  value: number;
  origin?: string;
  year?: number;
}

function CoinDecorator(name: string) {
  return function(constructor: Function) {
    console.log(`${name} was invoked`);
    console.log(constructor);
  };
}

function ParameterDecorator(
  classPrototype: Object,
  methodName: string,
  parameterIndex: number
) {
  console.log(classPrototype);
  console.log(methodName);
  console.log(parameterIndex);
}

function PropertyDecorator(
  classPrototype: Object,
  propertyName: string,
) {
  console.log(classPrototype);
  console.log(propertyName);
}
  

@CoinDecorator("CoinDecorator")
class Coin implements CoinsInterface {
  constructor(
    public _name: string,
    public value: number,
    public origin?: string,
    public year?: number
  ) {}

  public get name(): string {
    return this._name;
  }

  public set name(n: string) {
    this._name = n;
  }

  public coinCondition(@ParameterDecorator name:string, score: number): void{
    console.log(`Coin ${name} is in mint condition`);
  }
}
