import {Component} from '@angular/core';
import {Fruit} from './class/fruit';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // template:
    //     //         `
    //     //     <h1>{{title}}</h1>
    //     //     <h2>My favorite fruit is {{myfruit}}</h2>`,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'learn-angular';
    fruits = [
        new Fruit(1, 'apple'),
        new Fruit(2, 'banana'),
        new Fruit(3, 'orange'),
        new Fruit(4, 'bettery')
    ];
    favoriteFruit = this.fruits[0];

}
