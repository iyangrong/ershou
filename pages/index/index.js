Page({
  data: {
    searchValue: ''
  },

  bindkeyInput: function (e) {
    this.setData({
      searchValue: e.detail.value
    })
  }
})
