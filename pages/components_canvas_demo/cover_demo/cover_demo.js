Page({
    onReady: function (options) {
        this.videoCtx = wx.createVideoContext('myVideo')
    },
    play() {
        this.videoCtx.play()
    },
    pause() {
        this.videoCtx.pause()
    }
});