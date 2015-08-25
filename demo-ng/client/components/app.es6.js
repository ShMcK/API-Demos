angular.module('app').directive('rootApp', rootApp);

function rootAppCtrl(Giphy) {
  var vm = this;
  vm.gifQuery = '';
  vm.submit = function () {
    Giphy.getImage(vm.gifQuery, 6, 'fixed_width').then(function (data) {
      vm.gifs = data;
    });

  };
}

function rootApp() {
  return {
    templateUrl: 'client/components/app.ng.html',
    controller: rootAppCtrl,
    controllerAs: 'vm'
  };
}