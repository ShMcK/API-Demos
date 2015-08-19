import {Component, View, bootstrap, formDirectives} from 'angular2/angular2';
import {GiphyGif} from 'client/components/gifs/gifs';
import {TextInput} from 'client/components/text-input/text-input';

@Component({
  selector: 'app'
})
@View({
  template: `
    <giphy-gif></giphy-gif>
    <text-input></text-input>
    `,
  directives: [GiphyGif, TextInput]
})
class App {
}

bootstrap(App);