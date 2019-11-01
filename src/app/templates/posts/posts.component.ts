import { Component, OnInit } from '@angular/core';
import { PostService } from './../../services/post.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})

export class PostsComponent implements OnInit{

  posts: Observable<Post[]>;

  constructor(private postService: PostService){}

  ngOnInit(){
    this.posts = this.postService.getAll();
  }

}
