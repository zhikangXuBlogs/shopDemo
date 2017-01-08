//获取应用实例
var app = getApp()
Page({
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        loadingHidden: false  // loading
    },

    //事件处理函数
    swiperchange: function(e) {
        //console.log(e.detail.current)
    },

    onLoad: function() {
        console.log('onLoad')
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })

        //sliderList    获取轮播图所需要资源
        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    images: res.data
                })
            }
        })

        //venuesList
        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    //  获取主题馆图片资源
                    venuesItems: res.data.data
                })
                setTimeout(function () {
                    that.setData({
                        loadingHidden: true
                    })
                }, 1500)
            }
        })

        //choiceList
        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/goods/choiceList',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    //获取环球所需要的资源
                    choiceItems: res.data.data.dataList
                })
                setTimeout(function () {
                    that.setData({
                        loadingHidden: true
                    })
                }, 1500)
            }
        })

    }
})
