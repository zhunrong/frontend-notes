# 装饰器

在 TypeScript 中可以使用装饰器语法对类和类的成员添加注解或者进行修改。

> 装饰器语法目前仍处于 JavaScript 提案 stage 2 阶段，但是在 TypeScript 中可以作为一项实验性功能使用

在 TypeScript 项目中使用装饰器语法需要在 **tsconfig.json** 中进行配置：

```json
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true // 如果用到装饰器元数据，还要开启这个
  }
}
```

装饰器本身就是一个函数，可以通过 **@expression** 语法附加到类、类的方法、类的访问器、类的属性以及类的形参上，然后将会在运行时被一些有用的参数调用。把装饰器附加在不同的目标上，将会获得不同的参数。

## 类装饰器

类装饰器应用于类的构造函数，可以用来观察、修改或替换类定义。在运行时调用时，类的构造函数将作为它的唯一参数。

```ts
function ClassDecorator<T extends { new (...args: any[]): any }>(
  constructor: T
) {
  // to do
}

@ClassDecorator
class A {
  // ...
}
```

## 方法装饰器

方法装饰器应用于方法的属性描述符，并可用于观察、修改或替换方法定义。在运行时调用时，将接受 3 个参数：

1. 对于静态方法，这个参数将是类的构造函数；对于实例方法，这个参数将是类的原型对象
2. 成员名称
3. 成员属性描述符

```ts
function MethodDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // to do
}

class A {
  @MethodDecorator
  foo() {
    // ...
  }
}
```

## 访问器装饰器

访问器装饰器应用于访问器的属性描述符，并可用于观察、修改或替换访问器的定义。在运行时调用时，将接受 3 个参数：

1. 对于静态成员，这个参数将是类的构造函数；对于实例成员，这个参数将是类的原型对象
2. 成员名称
3. 成员属性描述符

> 访问器装饰器不能同时作用于同一成员的 setter 和 getter 上

```ts
function AccessorDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // to do
}

class A {
  name = "";

  @AccessorDecorator
  get alias() {
    return this.name;
  }
}
```

## 属性装饰器

属性装饰器应用于类的属性。在运行时调用时，将接受 2 个参数：

1. 对于静态成员，这个参数将是类的构造函数；对于实例成员，这个参数将是类的原型对象
2. 成员名称

> 拿不到属性描述符，大概是因为实例成员定义在实例对象上，而此时实例并没有创建

```ts
function PropertyDecorator(target: any, propertyKey: string) {
  // to do
}

class A {
  @PropertyDecorator
  name: string = "";
}
```

## 形参装饰器

形参装饰器应用于类构造函数或方法声明的函数。在运行时调用时，将接受 2 个参数：

1. 对于静态成员，这个参数将是类的构造函数；对于实例成员，这个参数将是类的原型对象
2. 成员名称
3. 该形参在参数列表中的索引

```ts
function ParameterDecorator(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  // to do
}

class A {
  constructor(@ParameterDecorator name: string) {
    // ...
  }

  foo(@ParameterDecorator name: string) {
    // ...
  }
}
```

## 装饰器工厂

可以通过一个工厂函数包裹装饰器，使用不同的参数调用工厂函数返回不同的装饰器。

```ts
function ClassDecoratorFactory(options: any) {
  // 根据参数执行相应逻辑
  return function ClassDecorator<T extends { new (...args: any[]): any }>(
    ctor: T
  ) {
    // 也可以在这里根据参数执行相应逻辑
    console.log(options);
  };
}

@ClassDecoratorFactory({
  // ...
})
class A {
  // ...
}
```

## 装饰器复合

多个装饰器可以复合使用，作用于同一个对象。

```ts
function First() {
  console.log("First factory");
  return function () {
    console.log("First decorator");
  };
}

function Second() {
  console.log("Second factory");
  return function () {
    console.log("Second decorator");
  };
}

class ExampleClass {
  @First()
  @Second()
  method() {}
}
```

装饰器复合使用时，执行顺序为：

1. 从上到下执行 @ 后的表达式；
2. 从下到上执行装饰器函数。

上面示例代码的执行顺序：

```js
// First factory
// Second factory
// Second decorator
// First decorator
```

当多种装饰器作用于同一个类时，它们的执行顺序是：

1. 实例成员的装饰器（同一方法上，形参装饰器早于方法装饰器执行，其他的按代码书写位置顺序执行）
2. 静态成员的装饰器（同上）
3. 构造函数形参装饰器
4. 类装饰器

## 装饰器元数据

TypeScript 在编译时可以注入元数据信息，装饰器在运行时可以获取这些元数据。

元数据功能需要手动开启，并搭配 **reflect-metadata** 这个库使用：

1、安装

```shell
npm i reflect-metadata --save
```

2、配置 **tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

源码：

```ts
import 'reflect-metadata';

function ParameterDecoratorFactory() {
  return function ParameterDecorator(target: any, propertyKey: string, parameterIndex: number) {
    // 获取形参类型
    const paramtypes = Reflect.getMetadata('design:paramtypes', target, propertyKey);
    // 获取返回值类型
    const returntype = Reflect.getMetadata('design:returntype', target, propertyKey);
    console.log(paramtypes[parameterIndex], returntype);
  }
}

class Math {

  static plus(@ParameterDecoratorFactory() x: number, @ParameterDecoratorFactory() y: number): number {
    return x + y;
  }

}
```

编译后：

```js
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function ParameterDecoratorFactory() {
    return function ParameterDecorator(target, propertyKey, parameterIndex) {
        // 获取形参类型
        const paramtypes = Reflect.getMetadata('design:paramtypes', target, propertyKey);
        // 获取返回值类型
        const returntype = Reflect.getMetadata('design:returntype', target, propertyKey);
        console.log(paramtypes[parameterIndex], returntype);
    };
}
let Math = /** @class */ (() => {
    class Math {
        static plus(x, y) {
            return x + y;
        }
    }
    __decorate([
        __param(0, ParameterDecoratorFactory()), __param(1, ParameterDecoratorFactory()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", Number)
    ], Math, "plus", null);
    return Math;
})();
```
