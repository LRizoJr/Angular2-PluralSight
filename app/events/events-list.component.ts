import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { PopupService } from '../common/popup.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';

@Component({
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>    
        <hr/>  
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {
    private eventService;
    private popupService;
    private events:IEvent[];
    private route:ActivatedRoute;

    constructor(eventServ: EventService, popupServ: PopupService, routeParam:ActivatedRoute) {
        this.eventService = eventServ;
        this.popupService = popupServ;
        this.route = routeParam;        
    }

    ngOnInit() {        
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName: string) {
        this.popupService.success('Event: ' + eventName);
    }
}