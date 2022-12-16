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
    time: number = 0;
    display ;
    interval;

    constructor(
        private _formBuilder: UntypedFormBuilder,private routers: Router)
    {
        this.forgotPasswordForm = this._formBuilder.group({
            email: ['']
        });
        setTimeout(()=>{
            this.showLoader = false;
        }, 3000);
        this.startTimer();
    }
    startTimer() {
        console.log("=====>");
        this.interval = setInterval(() => {
          if (this.time === 0) {
            this.time++;
          } else {
            this.time++;
          }
          this.display=this.transform( this.time)
        }, 1000);
      }
      transform(value: number): string {
           const minutes: number = Math.floor(value / 60);
           return minutes + ':' + (value - minutes * 60);
      }
      pauseTimer() {
        clearInterval(this.interval);
      }

}
