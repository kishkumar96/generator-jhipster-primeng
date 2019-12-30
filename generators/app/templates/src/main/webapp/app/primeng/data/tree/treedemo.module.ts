import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {TreeModule} from 'primeng/tree';
import {TreeDragDropService} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ToastModule} from 'primeng/toast';
import {TreeNodeService} from './service/treenode.service';

import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {
    TreeDemoComponent,
    treeDemoRoute
} from './';

const primeng_STATES = [
    treeDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        TreeModule,
        ButtonModule,
        ContextMenuModule,
        ToastModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        TreeDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, TreeDragDropService, TreeNodeService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>TreeDemoModule {}
