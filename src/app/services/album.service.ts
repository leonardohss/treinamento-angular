import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../app.const';
import { Photo } from '../models/photo.model';
import { Album } from '../models/album.model';

@Injectable()
export class AlbumService{

  constructor(private httpClient: HttpClient){}

  getAll(): Observable<Album[]>{
    return this.httpClient.get<Album[]>(`${API_URL}/albums`);
  }
}
