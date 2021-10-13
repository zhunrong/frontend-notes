# 原型

其实谈到JavaScript的原型，只要记住2个原则就可以推出所有对象之间的关系：
1. 实例对象的 **\_\_proto\_\_** 属性与构造函数的 **prototype** 属性指向同一个原型对象；
2. 原型对象的 **constructor** 属性指向构造函数。

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
```

> 注意：并不是只有构造函数才有prototype属性，只要是函数都会有