import { UserService } from './../../../core/user/user.service';
import { Directive, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

    currentDisplay: string;

    constructor(
        private element: ElementRef<any>,
        private render: Renderer2,
        private userService: UserService
    ) { }

    ngOnInit(): void {

        this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
        this.userService.getUser().subscribe(user => {
            if (user) {
                this.render.setStyle(this.element.nativeElement, 'display', this.currentDisplay);
            } else {
                this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
                this.render.setStyle(this.element.nativeElement, 'display', 'none');
            }
        });
    }
}
