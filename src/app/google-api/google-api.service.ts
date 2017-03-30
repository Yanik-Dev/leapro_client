import { Injectable } from '@angular/core';

declare var gapi;
@Injectable()
export class GoogleApiService{

    private clientID = '950232633561-074rr5osfcpqmn86btmfuufpasd9dclj.apps.googleusercontent.com'  
    private userEmail = "yanikblake@group.calendar.google.com"; //your calendar Id  
    private userTimeZone = "London";  
    private scope = "https://www.googleapis.com/auth/calendar.readonly";
    private logoutUrl = 'https://accounts.google.com/o/oauth2/revoke?token=';
    private apiKey = "_rlvlLQmQJO6fQMUhNk8eDDN";


    loadAppointments() {
        return new Promise((resolve, reject) => {

	        var request = gapi.client.calendar.events.list({
	          'calendarId': 'primary',
	          'timeMin': (new Date()).toISOString(),
	          'showDeleted': false,
	          'singleEvents': true,
	          'maxResults': 10,
	          'orderBy': 'startTime'
	        });

	        request.execute((resp) => {
	        	var appointments = [];
				var events = resp.items;
				var i;
				if (events.length > 0) {
					for (i = 0; i < events.length; i++) {
						var event = events[i];
						var when = event.start.dateTime;
						if (!when) {
							when = event.start.date;
						}
						appointments.push(event.summary + ' (' + when + ')')
					}
				} else {
					appointments.push('No upcoming events found.');
				}
				resolve(appointments);
	        });
      });
    }

    /* 
	 * global application state, so it's OK to keep it as field value of a singleton. alternative would be a 
	 * buitl-in global value store.
	 */
	public isAuthenticated: boolean = false;
	public userName: string;
	public userImageUrl: string;

	constructor(){
		// check the authentication silently
		this.internalAuthenticate(true);
	}

	login() {
		console.log('proceed login');
        // check the authentication and present a dialog on failure
        this.internalAuthenticate(false);
    }

    logout(){
    	console.log('proceed logout');
		// reset the gloab application state
		this.isAuthenticated = false;
		this.setUserData('','');
		/* revoke existing token - there is no Google API support for that, window.fetch() is
		 * a replacement for the JS XHTTP Request, is not available in older browsers though.
		 */
		 window.fetch(this.logoutUrl + gapi.auth.getToken().access_token);
	}

	private internalAuthenticate(immediate: boolean){
		/* heavily use promises here for 2 reasons:
		 *
		 * nr1: readability (image callback syntax here :( )
		 * nr2: ui synchronisation: due to the GAPI, the result is handled in a callback, 
		 *		angular does therefor not know of any scope changes. since ther is no scope
		 *		as in angular1 one cannot manually trigger the scope digest.
		 *		Using Promises solves this problem since the scope digest is triggered on 
		 *		resove() and reject().
		 * The callbacks passed to then() are lambdas to ensure the call applies to the correct
		 * scope.
		 */
		 return this.proceedAuthentication(immediate)
		 .then(() => this.initializeGooglePlusAPI())
		 .then(() => this.initializeGoogleCalendarAPI())
		 .then(() => this.loadGooglePlusUserData())
		 .then((response:any) => this.setUserData(response.result.displayName, response.result.image.url))
		 .catch((error:any) => {console.log('authentication failed: ' + error)});
	}

	private proceedAuthentication(immediate:boolean){
		return new Promise((resolve, reject) => {
			console.log('proceed authentication - immediate: ' + immediate);
			gapi.client.setApiKey(this.apiKey);
			var authorisationRequestData =
			{
				'client_id': this.clientID, 
				'scope': this.scope, 
				'immediate': immediate
			} 
			gapi.auth.authorize(authorisationRequestData,
				(authenticationResult) => {
					if(authenticationResult && !authenticationResult.error){
						this.isAuthenticated = true
						this.setUserData('unknown', '');
						resolve()
					}
					else {
						this.isAuthenticated = false
						this.setUserData('','');
						reject();
					}
				}
				);
			});
	}

	private initializeGooglePlusAPI(){
		return new Promise((resolve, reject) => {
			console.log('initialize Google Plus API');
			resolve(gapi.client.load('plus', 'v1'));
		});
	}

	private initializeGoogleCalendarAPI(){
		return new Promise((resolve, reject) => {
			console.log('initialize Google Calendar API');
			resolve(gapi.client.load('calendar', 'v3'));
		});
	}

	private loadGooglePlusUserData() {
		return new Promise((resolve, reject) => {
			console.log('load Google Plus data');
			resolve(gapi.client.plus.people.get({'userId': 'me'}));
		});
	}

	private setUserData(userName: string, userImageUrl: string){
		this.userName = userName;
		this.userImageUrl = userImageUrl;
		console.log('user: ' + this.userName + ', image: ' + this.userImageUrl);
	}

}