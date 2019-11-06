import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { NotFoundComponent } from './templates/notfound/notfound.component';
import { ArticlesComponent } from './templates/articles/articles.component';
import { UserService } from './services/user.service';
import { PostsComponent } from './templates/posts/posts.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { PhotoService } from './services/photo.service';
import { PhotosComponent } from './templates/photos/photos.component';
import { TruncatePipe } from './pipes/truncate.pipes';
import { PhotoCardComponent } from './templates/photos/photo-card/photo-card.component';
import { TimerComponent } from './templates/timer/timer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRouting } from './app.routing';
import { PhotoDetailsComponent } from './templates/photos/photo-details/photo-details.component';
import { AlbumService } from './services/album.service';
import { PhotoFormComponent } from './templates/photos/photo-form/photo-form.component';
import { AuthenticationService } from './services/authentication.service';
import { Globals } from './app.globals';
import { LoginComponent } from './templates/login/login.component';
import { AppGuard } from './app.guard';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesComponent,
    PostsComponent,
    PhotosComponent,
    TruncatePipe,
    PhotoCardComponent,
    NotFoundComponent,
    TimerComponent,
    PhotoDetailsComponent,
    PhotoFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BsDropdownModule.forRoot(),
    AppRouting,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [
    UserService,
    PostService,
    PhotoService,
    AlbumService,
    AuthenticationService,
    Globals,
    AppGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
