import { Component } from '@angular/core';

@Component({
    selector: 'events-app',
    template: `
        <h4>Hello Angular from template...{{hello}}</h4>
        <events-list></events-list>
    `
})
export class EventsAppComponent {
    hello: string;
    constructor(){
        this.hello = 'hello hello hello hello';
    }
}