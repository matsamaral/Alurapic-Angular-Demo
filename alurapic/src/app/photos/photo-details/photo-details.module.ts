import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoModule } from './../photo/photo.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowIfLoggedModule } from 'src/app/shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
    declarations: [
        PhotoCommentsComponent,
        PhotoDetailsComponent,
        PhotoOwnerOnlyDirective
    ],
    exports: [
        PhotoCommentsComponent,
        PhotoDetailsComponent,
    ],
    imports: [
        CommonModule,
        PhotoModule,
        ReactiveFormsModule,
        RouterModule,
        ShowIfLoggedModule,
        VMessageModule,
    ]
})
export class PhotoDetailsModule {}
