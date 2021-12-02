# 进阶知识

## 泛型

泛型是一个类型变量，或者说是一个类型参数，它是面向未来的，类似于函数调用。泛型可以结合函数、类、接口、类型别名等使用。

```ts
function foo<T>(arg: T): T {
  return arg;
}

const bar: <T>(arg: T) => T = (arg) => arg;

class Stack<T> {
  stack: T[] = [];
}

interface Queue<T> {
  queue: T[];
}

type Action<T> = {
  type: string;
  payload: T;
};
```

## keyof

对一个对象类型使用 **keyof** 操作符，可以获得一个由该对象类型所有 key 组成的字面量联合类型。

```ts
type Point = { x: number; y: number };
type P = keyof Point; // 'x' | 'y'

type Arr = { [k: number]: any };
type KeyofArr = keyof Arr; // number

type Mapping = { [k: string]: any };
type KeyofMapping = keyof Mapping; // string | number 注意这里多了number，因为以数字作为对象的键也会转成字符串
```

## typeof

注意要区别于 JavaScript 中的 **typeof** 操作符。这里介绍的 **typeof** 操作符只能用于类型上下文中，用来引用变量或属性的类型。

```ts
const name: string = "Mary";

type TypeofName = typeof name; // string

const say = (text: string) => text;

type TypeofSay = typeof say; // (text: string) => string
```

## 条件类型

条件类型类似于 JavaScript 中的三元表达式：

```ts
type T = SomeType extends OtherType ? TrueType : FalseType;
```

如果 **SomeType** 可以赋值给 **OtherType**，则 **T** = **TrueType**，否则 **T** = **FalseType**。

基本使用示例：

```ts
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;
```

**分布特性**

当条件类型作用于联合类型时，这时会体现出分布特性：

```ts
```

## 映射类型
