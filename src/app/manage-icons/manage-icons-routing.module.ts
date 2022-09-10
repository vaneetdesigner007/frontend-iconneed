import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconPacksComponent } from './icon-packs/icon-packs.component';
import { IconsComponent } from './icons/icons.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListComponent },
  { path: 'add', pathMatch: 'full', component: IconsComponent },
  { path: 'package', pathMatch: 'full', component: IconPacksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [],
})
export class ManageIconsRoutingModule {}
