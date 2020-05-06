Page({
  data: {
    colorValue: "red"
  },
  clickMe(e){
    console.log(e)
  },
  clickA(){
    console.log('click container-A')
  },
  clickB(){
    console.log('click container-B')
  },
  clickC(){
    console.log('click container-C')
  },
  captureClickA(){
    console.log('capture click container-A')
  },
  captureClickB(){
    console.log('capture click container-B')
  },
  captureClickC(){
    console.log('capture click container-C')
  }
})