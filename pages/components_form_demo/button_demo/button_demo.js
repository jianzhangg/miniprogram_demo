var types = ['default', 'primary', 'warn']
var pageObject = {
    data: {
        defaultSize: 'default',
        primarySize: 'default',
        warnSize: 'default',
        disable: false,
        plain: false,
        loading: false
    },
    setDisabled() {
        this.setData({
            disabled: !this.data.disabled
        })
    },
    setPlain() {
        this.setData({
            plain: !this.data.plain
        })
    },
    setLoading() {
        this.setData({
            loading: !this.data.loading
        })
    },
    getPhoneNumber(e) {
        console.log(e)
    },
    getInfo(e) {
        console.log(e)
    },
    getContactInfo(e) {
        console.log(e)
    }
}

for (var i = 0; i < types.length; i++) {
    (function (type) {
        pageObject[type] = function () {
            var key = type + 'Size'
            var changedData = {}
            changedData[key] =
                this.data[key] === 'default' ? 'mini' : 'default'
            this.setData(changedData)
        }
    })(types[i])
}

Page(pageObject)