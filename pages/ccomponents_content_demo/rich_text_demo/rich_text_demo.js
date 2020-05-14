Page({
    data: {
        nodes: [{
            name: 'div',
            attrs: {
                class: 'div_class',
                style: 'line-height: 60px;color: red;'
            },
            children: [{
                type: 'text',
                text: 'Hello&nbsp;World!'
            }]
        }],
        modes2: [{
            name: 'h2',
            attrs: {
                style: 'color: green'
            },
            children: [{
                type: 'text',
                text: '你好&nbsp;小程序'
            }]
        }]
    },
    tap(e) {
        console.log('tap')
        console.log(e)
    },
    touchstart() {
        console.log('touchstart')
    },
    touchmove() {
        console.log('touchmove')
    },
    touchcancel() {
        console.log('touchcancel')
    },
    touchend() {
        console.log('touchend')
    },
    longtap() {
        console.log('longtap')
    }
});