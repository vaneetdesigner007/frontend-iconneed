import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageIconsRoutingModule } from './manage-icons-routing.module';
import { IconsComponent } from './icons/icons.component';
import { IconPacksComponent } from './icon-packs/icon-packs.component';


@NgModule({
  declarations: [
    IconsComponent,
    IconPacksComponent
  ],
  imports: [
    CommonModule,
    ManageIconsRoutingModule
  ]
})
export class ManageIconsModule { }
