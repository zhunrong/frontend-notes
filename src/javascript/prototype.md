# 原型&继承

## 原型

原型的存在是了实现多个对象共享属性与方法。

其实谈到JavaScript的原型，只要记住3个原则就可以推出所有对象之间的关系：
1. 实例对象的 **\_\_proto\_\_** 属性与构造函数的 **prototype** 属性指向同一个原型对象；
2. 原型对象的 **constructor** 属性指向构造函数。
3. Object.prototype.\_\_proto\_\_ === null

```js
// 构造函数
function Person() {}
// 实例
const bob = new Person();
```

这里Person是一个构造函数，bob是通过构造函数创建的实例，则

```js
console.log(Person.prototype === bob.__proto__); // true
console.log(bob.__proto__.constructor === Person); // true
```

> 注意：并不是只有构造函数才有prototype属性，只要是函数都会有

原型对象是一个对象，所以它也有 **\_\_proto\_\_** 属性，普通对象的构造函数是 **Object**，于是

```js
console.log(bob.__proto__.__proto__ === Object.prototype); // true
```

构造函数一个函数对象，所以它也有 **\_\_proto\_\_** 属性，函数对象的构造函数都是 **Function**，于是

```js
console.log(Person.__proto__ === Function.prototype); // true
```

因为Object.prototype.\_\_proto\_\_ === null，可以推出

```js
console.log(Person.__proto__.__proto__ === Object.prototype); // true
console.log(Person.__proto__.__proto__.__proto__ === null); // true
console.log(bob.__proto__.__proto__.__proto__ === null); // true
```

以上由 **\_\_proto\_\_** 属性构成的单向链表结构就形成了**原型链**。

在JavsScript中访问对象的属性时（方法也是属性），首先会在对象自身上查找，如果没找到，则沿着原型链的顺序去各个原型上查找，直到找到该属性或者抵达原型链的尽头。

但是，给对象的属性赋值时，如果对象没有该属性，并不会去原型链上查找，而是直接给对象自身增加该属性再赋值。

## instanceof

instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

根据原理可以手写一个方法实现 instanceof 的功能。

```js
function isInstance(object, constructor) {
  if (typeof constructor !== "function") {
    throw new Error("constructor无效");
  }
  if (!object || typeof object !== "object") {
    return false;
  }
  let prototype = object.__proto__;
  while (prototype) {
    if (prototype === constructor.prototype) {
      return true;
    }
    prototype = prototype.__proto__;
  }
  return false;
}

/****** 以下为测试代码 *******/

console.log({} instanceof Object); // true
console.log(isInstance({}, Object)); // true

console.log({} instanceof Array); // false
console.log(isInstance({}, Array)); // false
```

## new

new 一个对象经历的过程：
1. 创建一个空对象，将构造函数的prototype属性赋值给该对象的__proto__属性；
2. 将this指向该对象，执行构造函数；
3. 返回该对象。

用代码描述大概是这样

```js
function newCtor(constructor, ...args) {
  // 1
  const object = Object.create(constructor.prototype);
  // 2
  constructor.apply(object, args);
  // 3
  return object;
}
```

## 继承

JavaScript中的继承是基于原型的继承。在JavaScript发展过程中先后出现了很多种继承模式，比如：组合继承、原型继承等等。这些模式或多或少都一些局限性，时至今日也没有太大了解的必要，在ES6 class继承出现之前，只要掌握被称为**寄生组合式继承**模式就好了。

```js
// 超类
function SuperClass(prop1, prop2) {
  this.prop1 = prop1;
  this.prop2 = prop2;
}
SuperClass.prototype.method1 = function() {
  console.log(this.prop1);
}
SuperClass.prototype.method2 = function() {
  console.log(this.prop2);
}

// 子类
function SubClass(prop1, prop2, prop3) {
  // 借用超类构造函数
  SuperClass.call(this, prop1, prop2);
  this.prop3 = prop3;
}
// 原型继承
SubClass.prototype = Object.create(SuperClass.prototype, {
  constructor: {
    value: SubClass,
    writable: false,
    enumerable: false,
    configurable: false,
  }
});
SubClass.prototype.method3 = function() {
  console.log(this.prop3);
}

/********* 以下为测试代码 ***********/

const o = new SubClass(1, 2, 3);
o.method1(); // 1
o.method2(); // 2
o.method3(); // 3
console.log(o.constructor); // SubClass
console.log(o instanceof SubClass); // true
console.log(o instanceof SuperClass); // true
console.log(o instanceof Object); // true
```

ES6之后可以这么写

```js
// 超类
class SuperClass {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  method1() {
    console.log(this.prop1);
  }

  method2() {
    console.log(this.prop2);
  }
}

// 子类
class SubClass extends SuperClass {
  constructor(prop1, prop2, prop3) {
    super(prop1, prop2);
    this.prop3 = prop3;
  }

  method3() {
    console.log(this.prop3);
  }
}

/********* 以下为测试代码 ***********/

const o = new SubClass(1, 2, 3);
o.method1(); // 1
o.method2(); // 2
o.method3(); // 3
console.log(o.constructor); // SubClass
console.log(o instanceof SubClass); // true
console.log(o instanceof SuperClass); // true
console.log(o instanceof Object); // true
```

