# this

JavaScript中的this是一个十分灵活的存在，因为this的指向是运行时动态确定的。

下面列举了6种主要场景下对this指向的判断。

#### 1. 全局作用域中

在全局作用域中，this指向全局对象，在浏览器环境下就是window对象。

```js
console.log(this); // window
```

#### 2. 函数直接调用

当直接调用一个函数时，函数内部的this在严格模式下为undefined，在非严格模式下指向全局对象。

```js
function foo() {
  console.log(this);
}

function bar() {
  "use strict";
  console.log(this);
}

foo(); // window
bar(); // undefined
```

#### 3. 对象方法调用

当以对象方法的形式调用函数时，函数内部的this会指向这个对象。

```js
const person = {
  name: "张三",
  sayHi() {
    console.log(`你好，我是${this.name}`);
  }
};

person.sayHi(); // 你好，我是张三
```

#### 4. call/apply/bind

对函数使用call/apply/bind方法时，可以使函数内部的this指向传入的第一个参数对象。

```js
function log() {
  console.log(this.name);
}

const obj = {
  name: 'obj'
};

log.call(obj); // obj
log.apply(obj); // obj

const logBind = log.bind(obj);
logBind(); // obj
```

#### 5. 构造函数调用

当函数作为一个构造函数被new操作符调用时，函数内部的this指向创建出来的实例。

```js
function Dog() {
  console.log(this);
}

const dog = new Dog(); // this === dog
```

#### 6. 箭头函数

箭头函数中的this在代码编写时就确定了，与如何调用无关，此时this的指向与外部作用域（词法层面）中的this是一致的。

```js
const obj = {
  name: 'obj',
  foo() {
    const bar = () => {
      console.log(this.name);
    }
    bar();
  }
};

obj.foo(); // obj
```