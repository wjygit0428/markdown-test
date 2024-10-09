var result = 0; // 使用全局变量

function add(a, b) {
  return a == b; // 使用相等运算符 `==`
}

result = add(1, 2); // 缺少分号
