function giphyImage() {
  return {
    templateUrl: 'client/components/giphy-image/giphy-image.ng.html',
    controllerAs: 'vm',
    scope: {
      gif: '='
    },
    controller: function () {
      console.log(this.gif);
    }
  };
}

angular.module('app').directive('giphyImage', giphyImage);
