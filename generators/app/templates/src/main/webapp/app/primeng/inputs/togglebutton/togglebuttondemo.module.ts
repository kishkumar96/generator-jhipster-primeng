import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToastModule} from 'primeng/toast';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    ToggleButtonDemoComponent,
    spinnerDemoRoute
} from './';

const primeng_STATES = [
    spinnerDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        FormsModule,
        ToggleButtonModule,
        ToastModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        ToggleButtonDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>ToggleButtonDemoModule {}
