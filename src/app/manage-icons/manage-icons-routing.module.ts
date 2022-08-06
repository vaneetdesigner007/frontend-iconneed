import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconPacksComponent } from './icon-packs/icon-packs.component';
import { IconsComponent } from './icons/icons.component';

const routes: Routes = [
  {path: '', component: IconsComponent},
  {path: 'package', component: IconPacksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageIconsRoutingModule { }
