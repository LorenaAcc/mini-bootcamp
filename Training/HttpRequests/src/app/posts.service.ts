import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { Post } from './post.model';
import { map, catchError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService{
    error = new Subject<string>();

    constructor(private http: HttpClient){}

    createAndStorePost(title: string, content: string){

        const postData: Post = {title: title, content: content}

        this.http
        .post<{ name: string }>(
            'https://recipe-book-8617d-default-rtdb.firebaseio.com/posts.json', 
            postData
        )
        //I subscribe here because the component does not care about the response
        .subscribe(responseData => {
            console.log(responseData);
        }, error =>{
            this.error.next(error.message);
        });
    }

    fetchPosts(){
      //return the observable
      return this.http
      .get<{ [ key: string ] : Post }>('https://recipe-book-8617d-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map(responseData => {
        const postsArray: Post[] = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            postsArray.push({ ...responseData[key], id:key })
          }          
        }
        return postsArray;
      }),
      catchError(errorRes =>{
        //Send to analytics server
        return throwError(errorRes);
      })
      );
    }

    deletePosts(){
      return this.http.delete('https://recipe-book-8617d-default-rtdb.firebaseio.com/posts.json');
    }
}