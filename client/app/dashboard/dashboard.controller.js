(function () {
  'use strict';

  angular
    .module('app.dashboard') //the controller is under the app.dashboard module
    .controller('DashboardCtrl', DashboardCtrl);
  
  function DashboardCtrl (NorrisFactory, $state) {
    var vm = this;

    vm.submit = submit;
    vm.jokes = [];
    vm.isLoading = false;


    function submit (num) {
      vm.isLoading = true;
      var numJokes = num;
      NorrisFactory.getJokes(numJokes)
      .then(function (data) {
        console.log("this is the data", data)
        if (data.data.type === "success") {
          vm.jokes = data.data.value
            .map((j) => {
              j.joke = _.unescape(j.joke)
              return j;
            });

        console.log("these are the jokes", vm.jokes)
        vm.isLoading = false;
        }
      })
    }

  }

})();
