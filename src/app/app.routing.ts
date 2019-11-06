import { NgModule } from "@angular/core";
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './templates/home/home.component';
import { PhotosComponent } from './templates/photos/photos.component';
import { NotFoundComponent } from './templates/notfound/notfound.component';
import { PhotoDetailsComponent } from './templates/photos/photo-details/photo-details.component';
import { PhotoFormComponent } from './templates/photos/photo-form/photo-form.component';
import { AppGuard } from './app.guard';
import { LoginComponent } from './templates/login/login.component';


const AppRoutings: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},

  { path: 'photos', component: PhotosComponent, canActivate: [AppGuard], canLoad: [AppGuard] },
  { path: 'photos/edit', component:PhotoFormComponent, canActivate: [AppGuard], canLoad: [AppGuard] },
  { path: 'photos/:photoId/details', component: PhotoDetailsComponent, canActivate: [AppGuard], canLoad: [AppGuard]},
  { path: 'photos/:photoId/edit', component: PhotoFormComponent, canActivate: [AppGuard], canLoad: [AppGuard] },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(AppRoutings, { preloadingStrategy: PreloadAllModules })]
})

export class AppRouting{}
