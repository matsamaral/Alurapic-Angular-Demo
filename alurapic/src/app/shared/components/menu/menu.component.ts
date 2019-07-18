import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'ap-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    isShown = false;

    toggle() {
        this.isShown = !this.isShown;
    }
}
