import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template:`
        <h1>New Event</h1>
        <hr/>
        <div class="col-md-6">
            <h3>[Create Event Form Will Go Here]</h3>
            <br/>
            <br/>
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
        </div>        
    `
})
export class CreateEventComponent {
    private router:Router;
    isDirty:boolean = true;

    constructor(routerParam:Router) {
        this.router = routerParam;
    }
    cancel() {
       this.router.navigate(['/events']);
    }
}
