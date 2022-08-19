export interface MemberScope {
  name: string;
  scope: number;
  buyIn?: number;
}

const initScope: MemberScope = {
  name: '',
  scope: 0,
  buyIn: 0,
};

export class Person {
  private scope: MemberScope = initScope;
  private static id = 0;
  myId: number;
  constructor(props: MemberScope) {
    this.scope = props;
    this.myId = Person.id++;
  }

  public buyIn() {
    this.scope.scope += 10000;
    this.scope.buyIn = (this.scope.buyIn ?? 0) + 1;
  }

  public buy(money: number) {
    this.scope.scope -= money;
  }

  public getState() {
    return this.scope;
  }

  public allin() {
    const currentScope = this.scope.scope;
    this.scope.scope = 0;
    return currentScope;
  }

  public win(scope: number) {
    this.scope.scope += scope;
  }
}
