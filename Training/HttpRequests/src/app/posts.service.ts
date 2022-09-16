import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService{
    error = new Subject<string>();

    constructor(private http: HttpClient){}

    createAndStorePost(title: string, content: string){

        const postData: Post = {title: title, content: content}

        this.http
        .post<{ name: string }>(
            'https://recipe-book-8617d-default-rtdb.firebaseio.com/posts.json', 
            postData,
            {
                //observe: 'body'
                observe: 'response'
            }
        )
        //I subscribe here because the component does not care about the response
        .subscribe(responseData => {
            console.log(responseData);
        }, error =>{
            this.error.next(error.message);
        });
    }

    fetchPosts(){
      let searchParams = new HttpParams();
      searchParams = searchParams.append('print','pretty');
      searchParams = searchParams.append('custom','key');
      //return the observable
      return this.http
      .get<{ [ key: string ] : Post }>('https://recipe-book-8617d-default-rtdb.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        //params: new HttpParams().set('print', 'pretty')
        params: searchParams,
        // with that: .get<{ [ key: string ] : Post }>('https://recipe-book-8617d-default-rtdb.firebaseio.com/posts.json',
        //I can not put : responseType: 'text'
        //because '.get' already has an assignment of type object and not text
        responseType: 'json'
      }
      )
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
      return this.http.delete('https://recipe-book-8617d-default-rtdb.firebaseio.com/posts.json',
      {
        //It extracts the response body and convert it to javascript:
        //observe: 'body'
        observe: 'events',
        //responseType: 'json'
        responseType: 'text'
      })
      .pipe(tap(event =>{
        console.log(event);
        if(event.type === HttpEventType.Sent){
            //......
        }
        if(event.type === HttpEventType.Response){
            console.log(event.body);
        }
      })
      );
    }
}