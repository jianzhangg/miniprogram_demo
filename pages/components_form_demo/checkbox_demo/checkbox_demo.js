Page({
    data: {
        items: [
            {value: 'USA', name: '美国'},
            {value: 'CHN', name: '中国', checked: 'true'},
            {value: 'BRA', name: '巴西'},
            {value: 'JPN', name: '日本'},
            {value: 'ENG', name: '英国'},
            {value: 'FAR', name: '法国'}
        ]
    },
    checkboxChange(e) {
        console.log('checkbox 发生 change 事件，携带 value 值为：', e);

        var items = this.data.items, values = e.detail.value;
        for (var i = 0, lenI = items.length; i < lenI; i++) {
            items[i].checked = false;

            for (var j = 0, lenJ = items.length; j < lenJ; j++) {
                if (items[i].value == values[j]) {
                    items[i].checked = true;
                    break;
                }
            }
        }
        this.setData({
            items: items
        })
    }
});