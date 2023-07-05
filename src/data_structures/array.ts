type ByID<T> = {
  [id: string]: T;
}

export class Array<T> {
  public length: number;
  public data: ByID<T | undefined>;

  public constructor(length: number = 0) {
    this.length = length
    this.data = {};
  }

  public delete(index: number): T | undefined {
    const item = this.data[index];
    delete this.data[index];
    this.length -= 1;

    this.shiftItems(index);

    return item;
  }

  public get(index: number): T | undefined {
    return this.data[index];
  }

  public pop(): T | undefined {
    const item = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length -= 1;

    return item;
  }

  public print(): void {
    for (let i = 0; i < this.length; i++) {
      console.log(this.data[i]);
    }
  }

  public push(item: T): void {
    this.data[this.length] = item;
    this.length += 1;
  };

  private shiftItems(index: number): void {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}
