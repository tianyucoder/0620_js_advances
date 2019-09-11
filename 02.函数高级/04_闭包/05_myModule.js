;(function() {
  var data = 'atguigu' //私有数据

  function getData() {
    return data
  }

  function getDataA() {
    return data.toUpperCase()
  }

  function getDataB() {
    return data.toLowerCase()
  }

  function setData(a) {
    data = a
  }

  window.demo = {
    getData:getData,
    getDataA:getDataA,
    getDataB:getDataB,
    setData:setData
  }
})()


