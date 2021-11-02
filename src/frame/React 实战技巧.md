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

5. **React.memo**

> **React.memo** 是一个高阶组件，其返回的组件在 props 不变（对象的浅层对比）的情况下不会重新渲染，用于解决父组件重新渲染时导致子组件不必要的重新渲染的问题。

```jsx
function MyComponent(props) {
  return <div>{props.name}</div>;
}

export default React.memo(MyComponent);
```

## Hook API

Hook 是 React 16.8 的新增特性，它让函数组件像类组件一样拥有 state 以及其它特性。

1. **React.useState**

> 为函数组件添加一个状态，参与渲染。如果这个状态与渲染无关，请改用 **React.useRef**，避免状态变化导致重新渲染。

```jsx
function Counter({ initialCount }) {
  const [count, setCount] = React.useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}
```

2. **React.useEffect**

> 应该将有副作用的操作放在这个 Hook 中，比如：操作 DOM，设置定时器，事件订阅等。这个 Hook 的回调会在 DOM 元素渲染到屏幕之后执行。

```jsx
function MyComponent(props) {
  // ...
  React.useEffect(() => {
    const onResize = (e) => {
      console.log(props.a);
    };
    window.addEventListener("resize", onResize);
    // 返回函数会在组件销毁前执行，或者 useEffect 回调再次执行之前执行
    return () => {
      // 移除监听
      window.removeEventListener("resize", onResize);
    };
  }, [props.a]); // 添加依赖项，既可以保证 useEffect 回调执行时依赖项是最新的，也可以避免不必要的重复调用
  // ...
}
```

3. **React.useContext**

> 该 Hook 为函数组件提供了一种新的消费 context 的方式。

```jsx
const theme = {
  fontSize: "16px",
  color: "red",
};

const ThemeContext = React.createContext(theme);

function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    </ThemeContext.Provider>
  );
}

function Header() {
  // 消费 theme context
  const theme = React.useContext(ThemeContext);
  return <div style={theme}>Header</div>;
}
```

4. **React.useReducer**

> **React.useState** 的替代方案。

```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
```

5. **React.useCallback**

> 该 Hook 返回回调函数的缓存版本，只有在依赖项变化时，才返回新的。有时候，父组件将回调函数作为 props 传给子组件，子组件对比新旧 props 是否相等来优化渲染，如果每次传给子组件的回调函数都是新的， 将导致优化失效，用该 Hook 缓存回调就可以解决这个问题。

```jsx
function Parent() {
  const onClick = React.useCallback(() => {
    // do something
  }, []);
  return (
    <div>
      <Child onClick={onClick} />
    </div>
  );
}
```

6. **React.useMemo**

> 该 Hook 接受一个函数和一个依赖项数组，返回函数执行的结果，并缓存下来，依赖项更新时，会重新执行该函数。常用于避免不必要的重复渲染和计算。

```jsx
function Child(props) {
  return <div>{props.name}</div>;
}

function Parent() {
  const [childName] = React.useState("child 1");
  return (
    <div>
      {React.useMemo(
        () => (
          <Child name={childName} />
        ),
        [childName] // 只有 childName 更新才会重新渲染 <Child />
      )}
    </div>
  );
}
```

7. **React.useRef**

> 该 Hook 接受一个初始值，返回一个 **ref** 对象，并将初始值保存在 current 属性上。**ref** 对象可以绑定到子组件或 DOM 节点上，甚至是任意数据。**ref** 对象在组件整个生命周期内都不会变，其 current 属性变化也不会导致重新渲染。

```jsx
function Parent() {
  // 可以用来绑定子组件，也可以用来保存一些与渲染无关的状态值
  const ref = React.useRef(null);
  return (
    <div>
      <Child ref={ref} />
    </div>
  );
}
```

8. **React.useImperativeHandle**

> 该 Hook 可以为函数组件定义实例值供父组件使用。

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

9. **React.useLayoutEffect**

> 该 Hook 与 **React.useEffect** 效果类似，区别是其回调函数是在 DOM 更新之后浏览器绘制之前同步执行。

10. **React.useDebugValue**

> 该 Hook 可用于在 React 开发者工具中显示自定义 hook 的标签。

```jsx
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = React.useState(null);

  // ...

  // 在开发者工具中的这个 Hook 旁边显示标签
  // e.g. "FriendStatus: Online"
  React.useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}
```
