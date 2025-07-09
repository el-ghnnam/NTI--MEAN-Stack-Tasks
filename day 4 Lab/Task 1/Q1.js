class Shape {
  width = 0;
  height = 0;
  radius = 0;

  constructor(width, height, radius) {
    this.width = width;
    this.height = height;
    this.radius = radius;
  }

  calcArea() {}

  calcPerimeter() {}
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  calcArea() {
    return this.width * this.height;
  }

  calcPerimeter() {
    return 2 * (this.width + this.height);
  }

  toString() {
    return `Rectangle -> Area: ${this.calcArea()}, Perimeter: ${this.calcPerimeter()}`;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super(0, 0, radius);
  }

  calcArea() {
    return Math.PI * this.radius ** 2;
  }

  calcPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `Circle -> Area: ${this.calcArea().toFixed(
      2
    )}, Perimeter: ${this.calcPerimeter().toFixed(2)}`;
  }
}

class Square extends Shape {
  constructor(side) {
    super(side, side);
  }

  calcArea() {
    return this.width ** 2;
  }

  calcPerimeter() {
    return 4 * this.width;
  }

  toString() {
    return `Square -> Area: ${this.calcArea()}, Perimeter: ${this.calcPerimeter()}`;
  }
}

export { Rectangle, Circle, Square };
