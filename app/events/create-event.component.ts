import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/index';

@Component({
    templateUrl: 'app/events/create-event.component.html',
    styles: [`
        em { float:right; color:red; padding-left:10px; }
        .error input { background-color: #FE5D5D; }    
    `]
})
export class CreateEventComponent {
    private router:Router;
    private eventService:EventService;
    isDirty:boolean = true;

    constructor(routerParam:Router, eventServ:EventService) {
        this.router = routerParam;
        this.eventService = eventServ;
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        console.log(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    cancel() {
       this.router.navigate(['/events']);
    }    
}
