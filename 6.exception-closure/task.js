function parseCount(n) {
    let parseResult = Number.parseInt(n);
    if (Number.isNaN(parseResult)) throw new Error("Невалидной значение");
    return parseResult;
 }

 function validateCount(n) {
    try {
        return parseCount(n);
    } catch (error) {
        return error;
    }
 }

 class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a > b + c || b > a + c || c > a + b) {
            throw new Error("The triangle does not exist")
        }

    }

    getPerimeter() {
        return (this.a + this.b + this.c);
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        return (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5.toFixed(3);
    }
 }

 function getTrangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getArea: function() {
                return "Ошибка! Треугольник не существует"
            },
            getPerimeter: function() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
 function parseCount(n) {
    let parseResult = Number.parseInt(n);
    if (Number.isNaN(parseResult)) throw new Error("Невалидной значение");
    return parseResult;
 }

 function validateCount(n) {
    try {
        return parseCount(n);
    } catch (error) {
        return error;
    }
 }

 class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a > b + c || b > a + c || c > a + b) {
            throw new Error("The triangle does not exist")
        }

    }

    getPerimeter() {
        return (this.a + this.b + this.c);
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        return (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5;
    }
 }

 function getTrangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            getArea: function() {
                return "Ошибка! Треугольник не существует"
            },
            getPerimeter: function() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
 }