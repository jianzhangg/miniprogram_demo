Page({
  data: {
    message: "hello world",
    theName: "Jack",
    flag: false,
    items: [{
        name: "商品A"
      },
      {
        name: "商品B"
      },
      {
        name: "商品C"
      },
      {
        name: "商品D"
      },
      {
        name: "商品A"
      }
    ],
    condition: Math.floor(Math.random() * 3 + 1),
    item: {
      name:"张三",
      phone:"18888888888",
      address:"中国"
    }
  }
})