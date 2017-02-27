import { Component } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
    `]
})
export class EventDetailsComponent {
    private eventService:EventService;
    private route:ActivatedRoute;
    private event:any;
    
    constructor(eventServ:EventService, activatedRoute:ActivatedRoute) {   
        this.eventService = eventServ;  
        this.route = activatedRoute;          
    }

    ngOnInit() { 
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }
}
