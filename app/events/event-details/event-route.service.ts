import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
    private eventService:EventService;
    private router:Router
    
    constructor(eventServ:EventService, routerParam:Router) {
        this.eventService = eventServ;
        this.router = routerParam;
    }

    canActivate(route:ActivatedRouteSnapshot) {
        const eventExists:boolean = !!this.eventService.getEvent(+route.params['id']);
        
        if(!eventExists) {
            this.router.navigate(['/404']);
        }
        return eventExists;
    }
}