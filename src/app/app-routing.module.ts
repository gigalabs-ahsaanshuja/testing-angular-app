import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponentComponent } from './video-component/video-component.component';
import { TableBasicExample } from './data-table/data-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TableBasicExample },
  { path: 'meeting', component: VideoComponentComponent },
  { path: '**', component: TableBasicExample },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
