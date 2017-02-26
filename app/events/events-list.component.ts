import { Component } from '@angular/core';
import { EventService } from './shared/event.service';
import { PopupService } from '../common/popup.service';

@Component({
    selector: 'events-list',
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
export class EventsListComponent {
    private eventService;
    private popupService;
    private events:any[];
    
    constructor(eventServ: EventService, popupServ: PopupService) {
        this.eventService = eventServ;
        this.popupService = popupServ;
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName: string) {
        this.popupService.success('Event: ' + eventName);
    }
}