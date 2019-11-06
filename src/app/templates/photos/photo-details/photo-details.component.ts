import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { Photo } from 'src/app/models/photo.model';
import { API_URL } from 'src/app/app.const';


@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

photo: Photo = new Photo();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService) { }

  ngOnInit() {
    const photoId: number = + this.activatedRoute.snapshot.paramMap.get('photoId');
    this.getDatails(photoId);
  }

  goEdit(photoId: number){
    this.router.navigate([`photos/${photoId}/edit`]);
  }

  goBack(){
    this.router.navigate([`photos`]);
  }

  private getDatails(id: number){
    this.photoService.getById(id)
    .subscribe(
      (p: Photo) => this.photo = p,
      (error: Error) => console.error(error)
    );
  }
}
