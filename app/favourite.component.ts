import {Component} from 'angular2/core';

@Component({
  selector: 'favourite',
  template: `
  <i
    class="glyphicon"
    [class.glyphicon-star-empty]="!isFavorite"
    [class.glyphicon-star]="isFavorite"
    (click)="onClick()">
  </i>
  `
})

export class FavouriteComponent {
  isFavorite = false;

  onClick(){
    this.isFavorite = !this.isFavorite;
  }
}
