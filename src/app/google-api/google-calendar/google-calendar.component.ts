import { Component } from '@angular/core';
import { GoogleApiService } from '../google-api.service';
@Component({
    selector: 'google-calender',
    templateUrl: './google-calendar.html'
})
export class GoogleCalendarComponent{
     appointments : any= [];
    constructor(private googleService : GoogleApiService){
		// initial
		this.appointments = ['please refresh view'];
	}

	refreshAppointments() {
		/*
		 * loading the appointments is done asychronously. the service's loadAppointments() method
		 * returns a Promise that provides access to the newly loaded set of appointments. Updating
		 * the array of appointments triggers angular's one-way-binding between the field and the 
		 * widget.
		 */
		this.googleService.loadAppointments().then((newAppointments) => {
			// clean the array of existing appointments
			this.appointments.splice(0, this.appointments.length);
			// copy all new items to the array of existing appointments
			this.appointments.push.apply(this.appointments, newAppointments);
			console.log('displaying ' + this.appointments.length + ' appointments')
		});
	}

    
   
}