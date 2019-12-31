import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {ToastModule} from 'primeng/toast';
import {CaptchaModule} from 'primeng/captcha';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    CaptchaDemoComponent,
    captchaDemoRoute
} from './';

const primeng_STATES = [
    captchaDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        ToastModule,
        CaptchaModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        CaptchaDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>CaptchaDemoModule {}
