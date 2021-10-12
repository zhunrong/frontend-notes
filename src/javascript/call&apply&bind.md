# call/apply/bind

#### 手写call

```js
Function.prototype.myCall = function(target) {
  if (target == undefined) {
    target = window;
  }
  // 缓存__fn__属性原始值
  var origin = target.__fn__;
  target.__fn__ = this;
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }
  var result = eval("target.__fn__(" + args + ")");
  if (origin !== undefined) {
    target.__fn__ = origin;
  } else {
    delete target.__fn__;
  }
  return result;
};

/***** 以下为测试用例 *****/

function add(x, y) {
  return this.value + x + y;
}

const obj = {
  value: 1,
};

const sum = add.myCall(obj, 2, 3);
console.log(sum); // 6
```

#### 手写apply

```js
Function.prototype.myApply = function(target, argsArray) {
  if (
    argsArray != undefined &&
    (typeof argsArray !== "object" || typeof argsArray.length !== "number")
  ) {
    throw new Error("argsArray只能是数组或类数组");
  }
  if (target == undefined) {
    target = window;
  }
  // 缓存__fn__属性原始值
  var origin = target.__fn__;
  target.__fn__ = this;
  var args = [];
  argsArray = argsArray || [];
  for (var i = 0; i < argsArray.length; i++) {
    args.push("argsArray[" + i + "]");
  }
  var result = eval("target.__fn__(" + args + ")");
  if (origin !== undefined) {
    target.__fn__ = origin;
  } else {
    delete target.__fn__;
  }
  return result;
};

/***** 以下为测试用例 *****/

function add(x, y) {
  return this.value + x + y;
}

const obj = {
  value: 1,
};

const sum = add.myApply(obj, [2, 3]);
console.log(sum); // 6
```

#### 手写bind

```js
Function.prototype.myBind = function(target) {
  var self = this;
  var preset = [];
  for (var i = 1; i < arguments.length; i++) {
    preset.push(arguments[i]);
  }
  return function() {
    var args = preset.concat();
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    // 使用上面实现的myApply
    return self.myApply(target, args);
  };
};

/***** 以下为测试用例 *****/

function add(x, y) {
  return this.value + x + y;
}

const obj = {
  value: 1,
};

const addBind = add.myBind(obj);
const sum = addBind(2, 3);
console.log(sum); // 6
```