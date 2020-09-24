
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { user } from '../models/user';
import { UserResponse } from '@oauth/models/userResponse';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AbsoluteSourceSpan } from '@angular/compiler';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
  //private currentUserSubject: BehaviorSubject<user>;
    //public currentUser: Observable<user>

usuario: user;
private loggedIn = new BehaviorSubject<boolean>(false);


   constructor(private http: HttpClient) {
   // this.checkToken();
    // this.currentUserSubject = new BehaviorSubject<user>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser = this.currentUserSubject.asObservable();
  }
  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  loging(usuario: user): Observable<UserResponse | void>{
    return this.http.post<UserResponse>(`${environment.API_URL}`, usuario)
    .pipe(
      map((res) => {
        console.log('respo->', res);
        // this.saveToken(res.token);
        this.loggedIn.next(true);
        return res;
      }),
      catchError(( err: UserResponse) => this.handleError(err))
    );
  }

  logout(): void{
    localStorage.removeItem('token');
    this.loggedIn.next(false); // set user logged out
  }

  private checkToken(): void{
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);
    console.log('isExpired->', isExpired);

   // isExpired ? this.logout() : this.loggedIn.next(true);

    if (isExpired) {
      this.logout();
    } else {
      this.loggedIn.next(true);
    }
  }


  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }


  private handleError(err): Observable<never>{
    let errorMessage = 'un error en el retorno de la data';
    if(err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  //public get currentUserValue(): user {
    //return this.currentUserSubject.value;


 /* login(email: string, password: string) {
  return this.http.post<any>(this.url, { email, password })
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
      }));

    }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
} */
 }
