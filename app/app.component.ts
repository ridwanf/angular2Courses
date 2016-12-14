import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavouriteComponent} from './favourite.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    <favourite></favourite>
    <courses></courses>
    <authors></authors>`,
    directives: [CoursesComponent,AuthorsComponent,FavouriteComponent]
})
export class AppComponent { }
