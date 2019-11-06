import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { Photo } from 'src/app/models/photo.model';
import { AlbumService } from 'src/app/services/album.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from 'src/app/services/photo.service';

import { CustomValidator } from 'src/app/shared/validation/custom-validator';//import criado por nós, não necessário importar no app.module
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})

export class PhotoFormComponent implements OnInit {

  albums: Album[];
  photos: Photo[] = [];
  photoTitle: string;

  photoForm: FormGroup;

  constructor(
    private albumService: AlbumService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
  ) {
    this.buildPhotoForm();
  }

  get albumId(){
    return this.photoForm.get('albumId');
  }

  get title(){
    return this.photoForm.get('title');
  }

  get url(){
    return this.photoForm.get('url');
  }

  ngOnInit() {
    this.fillAlbumOptions();
    const photoId: number = Number(this.activatedRoute.snapshot.paramMap.get('photoId'));

    if(photoId > 0){
      this.fillPhotoForm(photoId);
    }
  }

  onSubmit(){
    if(this.photoForm.valid){
      const photo: Photo = new Photo();
      photo.albumId = this.photoForm.value.albumId;
      photo.title = this.photoForm.value.title.toString();
      photo.url = this.photoForm.value.url.toString();
      photo.thumbnailUrl = this.photoForm.value.url.toString();

      //incluir condicional para saber se irá adicionar ou atualizar a foto
      this.addPhoto(photo);
    }
    console.log(this.photoForm.value);
  }

  private buildPhotoForm(){
    this.photoForm = this.formBuilder.group({
      albumId: ['', Validators.required],
      title: ['', [ Validators.required, Validators.minLength(5) ]],
      url: ['', [Validators.required, CustomValidator.urlValidator]]
    });

  }

  private addPhoto(photo: Photo){
    this.photoService.add(photo)
    .subscribe(
      (response: HttpResponse<Photo>) => {
        if(response.status === 201){
          console.log('response', response);
        }
      },
      (error: Error) => console.error(error)
    );
  }

  private updatePhoto(photo: Photo){
    //photoService.update(photo)
  }

  private fillAlbumOptions(){
    this.albumService.getAll()
    .subscribe(
      (albums: Album[]) => this.albums = albums,
      (error: Error) => console.error(error)
    );
  }

  private fillPhotoForm(photoId: number){
    this.photoService.getById(photoId)
    .subscribe(
      (p: Photo) => {
        this.photoForm.patchValue({
          albumId: p.albumId,
          title: p.title,
          url: p.url
        });
      },
      (error: Error) => console.log(error)
    );
  }

}
