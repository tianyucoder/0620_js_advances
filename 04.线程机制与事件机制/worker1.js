//计算斐波那契数列中的第n项的值
function fibonacci(n) {
  return n<3 ? 1 : fibonacci(n-2) + fibonacci(n-1)
}

onmessage = function (messageEvent) {
  var value = messageEvent.data
  var result = fibonacci(value)
  postMessage(result)
}

