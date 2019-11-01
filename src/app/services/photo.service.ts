import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../app.const';
import { Photo } from '../models/photo.model';

@Injectable()
export class PhotoService{
  constructor(private httpClient: HttpClient){}

  getAll(): Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(`${API_URL}/photos`);
  }
}
