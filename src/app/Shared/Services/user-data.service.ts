import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private ApiUrl: string = environment.githubUsersApi ?? "https://api.github.com/users/";

  constructor(private http: HttpClient) { }

  getGithubUserData(profile: string): Observable<any>{
    const headers: HttpHeaders = this.getOptions();
    return this.http.get<any>(this.ApiUrl + profile, { headers }).pipe(
      map(response=>{return response}),
      catchError(error=>{
        console.error(error);
        return throwError('Error getting GitHub user data');
      })
    )
  }

  getOptions(): HttpHeaders{
    const headers = new HttpHeaders({
    });
    return headers;
  }

}
