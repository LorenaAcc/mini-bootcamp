import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe(errorMessage =>{
      this.error = errorMessage;
    })
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts =>{
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error =>{
      this.isFetching = false;
      this.error = (error.error.error +'. '+ error.message);
      console.log(error);
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts =>{
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error =>{
      //this.error = error.message;
      this.isFetching = false;
      this.error = (error.error.error +'. '+ error.message);
      console.log(error);
    });
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }
  // private fetchPosts() {
  //   this.isFetching = true;
  // }
  onHandleError(){
    this.error = null;
  }
  
  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }
}
