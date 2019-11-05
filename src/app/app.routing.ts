import { NgModule } from "@angular/core";
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './templates/home/home.component';
import { PhotosComponent } from './templates/photos/photos.component';
import { NotFoundComponent } from './templates/notfound/notfound.component';
import { PhotoDetailsComponent } from './templates/photos/photo-details/photo-details.component';

const AppRoutings: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'photos', component: PhotosComponent },
  { path: 'photos/:photosId/details', component: PhotoDetailsComponent},

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(AppRoutings, { preloadingStrategy: PreloadAllModules })]
})

export class AppRouting{}
