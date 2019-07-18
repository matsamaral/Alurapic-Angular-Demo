import { UserService } from './../../../core/user/user.service';
import { Photo } from './../../photo/photo';
import { Directive, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {
    @Input() ownedPhoto: Photo;

    constructor(
        private element: ElementRef<any>,
        private render: Renderer2,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.userService.getUser()
            .subscribe(
                user => {
                        if (!user || user.id !== this.ownedPhoto.userId) {
                            this.render.setStyle(this.element.nativeElement, 'display', 'none')
                        }
                },
                err => console.log(err)
            );
    }
}
