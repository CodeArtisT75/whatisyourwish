var app = new Vue({
  el: '#app',
  data: {
    wish: '',
    isRequesting: false,
  },
  methods: {
    sendForm: function () {
      if (!this.validateForm()) {
        return;
      }

      var vm = this;

      vm.isRequesting = true;

      axios
        .post('/wish', {
          wish: this.wish,
        })
        .then(function (res) {
          if (res.data.success) {
            iziToast.success({
              message: 'ممنونم دوست عزیز. نظرت ثبت شد',
            });

            vm.clearForm();
          } else {
            iziToast.error({
              message: 'نظرت ثبت نشد. دوباره تلاش کن دوست خوبم',
            });

            this.isRequesting = false;
          }
        })
        .catch(function (err) {
          iziToast.error({
            message: 'نظرت ثبت نشد. دوباره تلاش کن دوست خوبم',
          });

          this.isRequesting = false;
        });
    },
    clearForm: function () {
      this.wish = '';
      this.isRequesting = false;
    },
    validateForm: function () {
      if (this.wish == '') {
        iziToast.error({
          message: 'دوست خوبم. چند حرفی برامون بنویس توی فرم',
        });
        return false;
      }

      return true;
    },
  },
});
