import {Component, OnInit } from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';
import {CountryService} from './service/country.service';
import Country from './service/country';

@Component({
    selector: 'jhi-select',
    templateUrl: './selectdemo.component.html',
    styles: []
})
export class SelectDemoComponent implements OnInit {

    countries: SelectItem[];

    countrycodes: SelectItem[];

    selectedCountry: any;

    selectedCountries: string[] = [];

    activeIndex = 0;

    constructor(private countryService: CountryService, private messageService: MessageService) {

    }

    onFocus() {
        this.messageService.add({severity: 'info', summary: 'The dropdown gets focus'});
    }

    onBlur() {
        this.messageService.add({severity: 'info', summary: 'The dropwdown loses focus'});
    }

    onChange() {
        this.messageService.add({severity: 'info', summary: 'The dropdown is changed'});
    }

    onChangeMultiselect() {
        this.messageService.add({severity: 'info', summary: 'The Multiselect selection is changed'});
    }

    generateCountries(countriesArray: Country[]) {
        const countryList: any[] = [];
        const countryCodes: any[] = [];
        for (const country of countriesArray) {
            countryList.push({label: country.name, value: {name: country.name, dial_code: country.dial_code, code: country.code}});
            countryCodes.push({label: country.code, value: {name: country.name, dial_code: country.dial_code, code: country.code}});
        }
        this.countries = countryList;
        this.countrycodes = countryCodes;
    }

    ngOnInit() {
        this.countryService.getCountries().subscribe((countriesArray: any) => {
            this.generateCountries(countriesArray.data);
        });
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }
}
