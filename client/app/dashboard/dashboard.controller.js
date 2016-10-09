(function () {
  'use strict';

  angular
    .module('app.dashboard') //the controller is under the app.dashboard module
    .controller('DashboardCtrl', DashboardCtrl);
  
  function DashboardCtrl (NorrisFactory, $state) {
    var vm = this;

    vm.submit = submit;
    vm.jokes = [];

    //set loading text to false so nothign shows
    vm.isLoading = false;


    function submit (num) {
      //show loading text
      vm.isLoading = true;

      NorrisFactory.getJokes(num)
      .then(function (data) {

        console.log("this is the data", data)
        if (data.data.type === "success") {
          vm.jokes = data.data.value
            .map((j) => {
              j.joke = _.unescape(j.joke)
              return j;
            });

        //remove loading spinner
        vm.isLoading = false;
        }
      })
    }

  }

})();
