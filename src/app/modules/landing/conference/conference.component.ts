import { Component, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { Router,} from '@angular/router';
@Component({
    selector     : 'landing-conference',
    templateUrl  : './conference.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LandingConferenceComponent
{
    /**
     * Constructor
     */
    forgotPasswordForm: UntypedFormGroup;
    showAlert: boolean = false;
    showLoader: boolean = true;

    constructor(
        private _formBuilder: UntypedFormBuilder,private routers: Router)
    {
        this.forgotPasswordForm = this._formBuilder.group({
            email: ['']
        });
        setTimeout(()=>{
            this.showLoader = false;
        }, 3000);
    }


}
