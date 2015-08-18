import {Component, View} from 'angular2/angular2';
import {FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'text-input'
})
@View({
  templateUrl: 'client/components/text-input/text-input.ng.html',
  directives: [FORM_DIRECTIVES]
})
export class TextInput {
  queryForm:ControlGroup;

  constructor() {
    this.queryForm = new ControlGroup({
      textInput: new Control('')
    });
  }
}