import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventsListResolver implements Resolve<any> {
    eventService:EventService;

    constructor(eventServ:EventService) {
        this.eventService = eventServ;
    }

    resolve() {
        return this.eventService.getEvents().map(events => events);
    }
}