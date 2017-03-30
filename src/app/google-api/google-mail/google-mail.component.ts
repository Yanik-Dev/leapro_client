import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import {
    
    FormGroup,
    FormControl,
    FormBuilder,
    Validators,
    AbstractControl
} from '@angular/forms';
declare var gapi;
@Component({
    selector: 'google-mail',
    templateUrl: './google-mail.html'
})
export class GoogleMailComponent{
        @ViewChild('toField') toField: ElementRef;

    newMail: any = {
        to: '',
        cc: '',
        // bcc: '',
        subject: '',
        body: ''
    };

    createForm: FormGroup;
    to: AbstractControl;

    constructor(fb: FormBuilder, private renderer: Renderer) {
        this.createForm = fb.group({
            to: ['', Validators.compose([Validators.required, this.emailValidator])],
            cc: [''],
            subject: [''],
            message: ['']
        });

        this.to = this.createForm.controls['to'];

        console.log(this.to);
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.toField.nativeElement, 'focus');
    }

    sendMail() {
        console.log(this.newMail);
    }

    emailValidator(control: FormControl): { [s: string]: boolean } {
        if (control && control.value && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value)) {
            return { invalidEmail: true };
        }
    }
}