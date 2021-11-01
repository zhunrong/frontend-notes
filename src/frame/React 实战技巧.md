# React 实战技巧

## API 用法

1. **React.Children**

> **React.Children** 上挂载了一些方法用于操作组件的 **props.children**，包含： map/forEach/count/only/toArray。这很方便，因为 **props.children** 有可能是 React 元素也可能是一个数组，使用这些方法就不用我们手动判断。

```jsx
function Parent(props) {
  React.Children.forEach(props.children, (child) => {
    console.log(child);
  });
  return <div>{props.children}</div>;
}
```

2. **React.cloneElement**

> **React.cloneElement** 用于克隆一个 React 元素，如果提供新的 props，将会和旧的 props 浅合并，如果提供新的子元素，将会取代旧的子元素。

```jsx
function Parent(props) {
  return React.Children.map(props.children, (child) => {
    // 克隆元素，修改 props, 设置子元素
    return React.cloneElement(child, { style: { color: "red" } }, "???");
  });
}

function App() {
  return (
    <Parent>
      <div>hello</div>
      <div>world</div>
    </Parent>
  );
}
```

3. **React.isValidElement**

> **React.isValidElement** 判断一个对象是否为 React 元素。

4. **React.forwardRef**

> **React.forwardRef** 可以使 **ref** 绑定到子组件内部的元素，而不是子组件本身。

```jsx
const Input = React.forwardRef((props, ref) => {
  return <input ref={ref} />;
});

function App() {
  const ref = React.useRef(); // ref 将会绑定到 <input /> 元素而不是 <Input /> 组件
  return <Input ref={ref} />;
}
```

5. **React.useImperativeHandle**

> **React.useImperativeHandle** 可以为函数组件定义实例值供父组件使用。

```jsx
// 要配合 React.forwardRef 使用
const Counter = React.forwardRef((props, ref) => {
  const [count, setCount] = React.useState(0);
  // 定义组件实例方法
  React.useImperativeHandle(
    ref,
    () => ({
      increase() {
        setCount(count + 1);
      },
      decrease() {
        setCount(count - 1);
      },
    }),
    [count]
  );
  return <div>{count}</div>;
});

function App() {
  const ref = React.useRef();
  const handleIncrease = () => {
    ref.current.increase(); // 调用组件的 increase 方法
  };
  const handleDecrease = () => {
    ref.current.decrease(); // 调用组件的 decrease 方法
  };
  return (
    <div>
      <Counter ref={ref} />
      <button onClick={handleIncrease}>增</button>
      <button onClick={handleDecrease}>减</button>
    </div>
  );
}
```

6. **React.memo**

> **React.memo** 是一个高阶组件，其返回的组件在 props 不变（对象的浅层对比）的情况下不会重新渲染，用于解决父组件重新渲染时导致子组件不必要的重新渲染的问题。

```jsx
function MyComponent(props) {
  return <div>{props.name}</div>;
}

export default React.memo(MyComponent);
```
