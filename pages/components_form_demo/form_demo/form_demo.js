Page({
    data: {
        pickerHidden: true,
        chosen: ''
    },
    pickerConfirm(e) {
        this.setData({
            pickerHidden: true
        })
        this.setData({
            chosen: e.detail.value
        })
    },
    pickerCancel(e) {
        this.setData({
            pickerHidden: true
        })
    },
    pickerShow() {
        this.setData({
            pickerHidden: false
        })
    },
    formSubmit(e) {
        console.log('form 发生了 submit 事件，携带数据为：', e.detail.value)
    },
    formReset(e) {
        console.log('form 发生了 rest 事件，携带数据为：', e.detail.value)
        this.setData({
            chosen: ''
        })
    }
});