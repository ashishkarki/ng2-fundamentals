import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h3>Upcoming Angular Events</h3>
        <hr/>
        <div class="well hoverwell thumbnail">
            <h3>{{event.name}}</h3>
            <div>Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: \${{event.price}}</div>
        </div>
    </div>
    `
})

export class EventsListComponent {
// hardcode: remove later
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/app/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }
}