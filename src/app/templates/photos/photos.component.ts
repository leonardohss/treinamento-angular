import { Component, OnInit } from "@angular/core";
import { PhotoService } from 'src/app/services/photo.service';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/models/photo.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
})

export class PhotosComponent implements OnInit{

  photos: Photo[] = [];

  constructor(private photoService: PhotoService){}

  ngOnInit(){
    this.getPhotos();
  }

  private getPhotos(){
    this.photoService.getAll()
    .pipe(
      map(
        (p: Photo[]) => p.filter(x => x.id <= 20)
      )
    )
    .subscribe(
      (photos: Photo[]) => this.photos = photos,
      (error: Error) => console.error(error)
    );
  }

}



