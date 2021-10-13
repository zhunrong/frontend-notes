# 原型

其实谈到JavaScript的原型，只要记住3个原则就可以推出所有对象之间的关系：
1. 实例对象的 **\_\_proto\_\_** 属性与构造函数的 **prototype** 属性指向同一个原型对象；
2. 原型对象的 **constructor** 属性指向构造函数。
3. Object.prototype.\_\_proto\_\_ === null

### 举例

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

以上由 **\_\_proto\_\_** 属性够成的单向链表结构就形成了**原型链**