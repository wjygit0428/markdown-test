var result = 0; // 使用全局变量

function add(a, b) {
  return a == b; // 使用相等运算符 `==`
}

result = add(1, 2); // 缺少分号

function calculateTotal(items) {
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }

  if (total > 100) {
    console.log("警告：总价超过100元！");
  }

  return total;
}
