Function.prototype.myCall = function(target) {
  if (target == undefined) {
    target = window;
  }
  target.__fn__ = this;
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }
  var result = eval("target.__fn__(" + args + ")");
  delete target.__fn__;
  return result;
};

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
  target.__fn__ = this;
  var args = [];
  argsArray = argsArray || [];
  for (var i = 0; i < argsArray.length; i++) {
    args.push("argsArray[" + i + "]");
  }
  var result = eval("target.__fn__(" + args + ")");
  delete target.__fn__;
  return result;
};

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
    return self.myApply(target, args);
  };
};

function add(x, y) {
  return this.value + x + y;
}

const obj = {
  value: 1,
};

const addBind = add.myBind(obj);
const sum = addBind(2, 3);
console.log(sum);
