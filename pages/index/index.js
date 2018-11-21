Page({
  data: {
    items: null,
  	host: 'http://127.0.0.1:3000'
  },

  onLoad () {
  	let url = this.data.host + '/api/v1/item'
  	wx.request({
  		url,
  		success: res => {
  			let data = res.data
  			console.log(data.data)
  			this.setData({
  				items: data.data
  			})
  			console.log("this.items", this.data.items)
  		}
  	})
  },

  onSearch() {
  	console.log('...')
  }
})
