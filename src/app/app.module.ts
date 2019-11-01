import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { NotFound } from './templates/notfound/notfound.component';
import { ArticlesComponent } from './templates/articles/articles.component';
import { UserService } from './services/user.service';
import { PostsComponent } from './templates/posts/posts.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { PhotoService } from './services/photo.service';
import { PhotosComponent } from './templates/photos/photos.component';
import { TruncatePipe } from './pipes/truncate.pipes';

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
    NotFound
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    UserService,
    PostService,
    PhotoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
