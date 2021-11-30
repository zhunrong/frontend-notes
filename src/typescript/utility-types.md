# 工具类型

本文介绍 TypeScript 内置的工具类型用法与实现原理。

## 1. Partial\<Type>

基于类型 **Type** 构造一个新类型，使它的所有属性变成可选的。

示例：

```ts
interface Book {
  title: string;
  description: string;
}

type PartialBook = Partial<Book>;

// 等价于

type PartialBook = {
  title?: string;
  description?: string;
};
```

原理：

```ts
type Partial<Type> = {
  [K in keyof Type]?: Type[K];
};
```

## 2. Required\<Type>

基于类型 **Type** 构造一个新类型，使它的所有属性变成必选的。

示例：

```ts
interface Book {
  title: string;
  description?: string;
}

type RequiredBook = Required<Book>;

// 等价于

type RequiredBook = {
  title: string;
  description: string;
};
```

原理：

```ts
type Required<Type> = {
  [K in keyof Type]-?: Type[K];
};
```

## 3. Readonly\<Type>

基于类型 **Type** 构造一个新类型，使它的所有属性变成只读的。

示例：

```ts
interface Book {
  title: string;
  description?: string;
}

type ReadonlyBook = Readonly<Book>;

// 等价于

type ReadonlyBook = {
  readonly title: string;
  readonly description?: string;
};
```

原理：

```ts
type Readonly<Type> = {
  readonly [K in keyof Type]: Type[K];
};
```

## 4. Record\<Keys, Type>

构造一个对象类型，它的属性名类型是 **Keys** 并且属性值类型是 **Type**。

示例：

```ts
type Cat = {
  age: number;
  breed: string;
};

type Cats = Record<"miffy" | "boris" | "mordred", Cat>;

// 等价于

type Cats = {
  miffy: Cat;
  boris: Cat;
  mordred: Cat;
};
```

原理：

```ts
type Record<Keys extends string | number | symbol, Type> = {
  [K in Keys]: Type;
};
```

## 5. Pick\<Type, Keys>

从类型 **Type** 上选取包含在 **Keys** 中的属性并构造出一个新的类型。

示例：

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

// 等价于

type TodoPreview = {
  title: string;
  completed: boolean;
};
```

原理：

```ts
type Pick<Type, Keys extends keyof Type> = {
  [K in Keys]: Type[K];
};
```

## 6. Omit\<Type, Keys>

从类型 **Type** 上忽略掉包含在 **Keys** 中的属性并构造出一个新的类型。

示例：

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

// 等价于

type TodoPreview = {
  title: string;
  completed: boolean;
  createdAt: number;
};
```

原理：

```ts
type Omit<Type, Keys extends string | number | symbol> = {
  [K in Exclude<keyof Type, Keys>]: Type[K];
};
```

## 7. Exclude\<Type, ExcludeUnion>

从类型 **Type** 中剔除包含在 **ExcludeUnion** 中的类型，将剩下的类型构造成新的类型。

示例：

```ts
type T = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
```

原理：

```ts
type Exclude<Type, ExcludeUnion> = Type extends ExcludeUnion ? never : Type;
```

## 8. Extract\<Type, Union>

从类型 **Type** 中提取出所有包含在 **Union** 中的类型并构造成新的类型。

示例：

```ts
type T = Extract<"a" | "b" | "c", "a" | "f">; // "a"
```

原理：

```ts
type Extract<Type, Union> = Type extends Union ? Type : never;
```

## 9. NonNullable\<Type>

从类型 **Type** 中剔除掉 **null** 和 **undefined** 并构造成新的类型。

示例：

```ts
type T = NonNullable<string | number | undefined>; // string | number
```

原理：

```ts
type NonNullable<Type> = Type extends null | undefined ? never : Type;
```

## 10. Parameters\<Type>

将函数类型 **Type** 的参数类型构造成一个元组类型。

示例：

```ts
type T = Parameters<(name: string, age: number) => void>; // [name: string, age: number]
```

原理：

```ts
type Parameters<Type extends (...args: any) => any> = Type extends (...args: infer P) => any ? P : never;
```

## 11. ConstrucorParameters\<Type>

将构造函数类型 **Type** 的参数类型构造成一个元组类型或数组类型。

示例：

```TS
interface Ctor1 {
    new(...args: string[]): Ctor1
}
type T1 = ConstructorParameters<Ctor1>; // string[]

interface Ctor2 {
    new(name: string, age: number): Ctor2;
}

type T2 = ConstructorParameters<Ctor2>; // [name: string, age: number]
```

原理：

```ts
type ConstructorParameters<Type extends new (...args: any) => any> = Type extends new (...args: infer P) => any ? P : never;
```

## 12. ReturnType\<Type>

构造一个函数类型 **Type** 的返回值的类型。

示例：

```TS
type T0 = ReturnType<() => string>; // string

type T1 = ReturnType<() => { name: string; age: number }>; // {name: string; age: number}
```

原理：

```ts
type ReturnType<Type extends (...args: any) => any> = Type extends (...args: any) => infer R ? R : any;
```

## 13. InstanceType\<Type>

根据一个构造函数的类型 **Type** 构造出它的实例类型。

示例：

```TS
class Dog { }

interface Ctor {
    new(): Ctor;
}

type T0 = InstanceType<typeof Dog>; // Dog

type T1 = InstanceType<Ctor>; // Ctor

type T2 = InstanceType<any>; // any

type T3 = InstanceType<never>; // never
```

原理：

```ts
type InstanceType<Type extends abstract new (...args: any) => any> = Type extends abstract new (...args: any) => infer I ? I : any;
```

## 14. ThisParameterType\<Type>

提取一个函数类型 **Type** 中 this 参数的类型，如果没有 this 参数则提取为 **unknown**。

示例：

```TS
function toHex(this: number) {
  return this.toString(16);
}

type T = ThisParameterType<typeof toHex>; // number
```

原理：

```ts
type ThisParameterType<Type> = Type extends (this: infer T, ...args: any) => any ? T : unknown;
```

## 15. OmitThisParameter\<Type>

构造一个类型，它是忽略 **Type** 的 this 参数之后的新类型

示例：

```TS
function f1(this: number, value: number) {
    return this + value;
}

function f2(value: number) {
    return value;
}

type T1 = OmitThisParameter<typeof f1>; // (value: number) => number

type T2 = OmitThisParameter<typeof f2>; // (value: number) => number

type t3 = OmitThisParameter<any>; // any
```

原理：

```ts
type OmitThisParameter<Type> = Type extends (this: any, ...args: infer P) => infer R ? (...args: P) => R : Type;
```
