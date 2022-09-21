import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

//Body response type
export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService{
    constructor(private http: HttpClient){}

    signUp(email: string, password:string){
      return this.http
            .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBcfKMtZAEKu7spq708O2JrOuPHMlSF6Fg',
            {
                email:email,
                password:password,
                returnSecureToken: true
            }
        )
        .pipe(
            catchError(errorRes => {
              let errorMessage = 'An unknown error occurred!';
              if (!errorRes.error || !errorRes.error.error) {
                return throwError(() => new Error(errorMessage));
                //return throwError(errorMessage);
              }
              switch (errorRes.error.error.message) {
                case 'EMAIL_EXISTS':
                  errorMessage = 'This email exists already';
              }
              return throwError(() => new Error(errorMessage));
              //return throwError(errorMessage);
            })
          );
    }

    login(email: string, password: string) {
        return this.http
          .post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBcfKMtZAEKu7spq708O2JrOuPHMlSF6Fg',
            {
              email: email,
              password: password,
              returnSecureToken: true
            }
          );
      }
}

