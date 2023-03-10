import { Component, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { Router,} from '@angular/router';
@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent
{
    /**
     * Constructor
     */
    forgotPasswordForm: UntypedFormGroup;
    showAlert: boolean = false;

    constructor(
        private _formBuilder: UntypedFormBuilder,private routers: Router)
    {
        this.forgotPasswordForm = this._formBuilder.group({
            email: ['']
        });
    }

    detailPage(): void{
        this.routers.navigate(['/conference/']);
    }
}
