import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageIconsRoutingModule } from './manage-icons-routing.module';
import { IconsComponent } from './icons/icons.component';
import { IconPacksComponent } from './icon-packs/icon-packs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    IconsComponent,
    IconPacksComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ManageIconsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ManageIconsModule { }
