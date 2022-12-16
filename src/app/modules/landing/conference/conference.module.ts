import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { LandingConferenceComponent } from 'app/modules/landing/conference/conference.component';
import { landingConferenceRoutes } from 'app/modules/landing/conference/conference.routing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
@NgModule({
    declarations: [
        LandingConferenceComponent
    ],
    imports     : [
        RouterModule.forChild(landingConferenceRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseCardModule,
        FuseAlertModule
    ]
})
export class LandingConferenceModule
{
}
