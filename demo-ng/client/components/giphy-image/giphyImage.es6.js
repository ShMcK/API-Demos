function giphyImage() {
  return {
    templateUrl: 'client/components/giphy-image/giphy-image.ng.html',
    controllerAs: 'vm',
    scope: {
      gif: '=',
      index: '@'
    },
    controller: function () {
      console.log(this.gif);
    }
  };
}

angular.module('app').directive('giphyImage', giphyImage);
