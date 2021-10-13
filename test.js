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
  var prop = "func_" + new Date().getTime();
  target[prop] = this;
  var args = [];
  argsArray = argsArray || [];
  for (var i = 0; i < argsArray.length; i++) {
    args.push("argsArray[" + i + "]");
  }
  var result = eval("target." + prop + "(" + args + ")");
  delete target[prop];
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
