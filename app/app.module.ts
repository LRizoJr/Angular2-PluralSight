import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { PopupService } from './common/popup.service';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventsListResolver
} from './events/index';



@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [
        EventService, 
        PopupService,
        EventRouteActivator,
        EventsListResolver,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },        
    ],        
    bootstrap: [EventsAppComponent]
})
export class AppModule {}

function checkDirtyState(component:CreateEventComponent) {
    if(component.isDirty)
        return window.confirm("You haven't saved this event. Abandon event before saving?");
        
    return true;

}