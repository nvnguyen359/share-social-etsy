import { Injectable } from '@angular/core';
import { baseServer } from '../genetal';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http:HttpClient) { }
  httpOptions = {
    //
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      responseType: "blob",
    }),
  };
  qrViet = {
    Client_ID: "c3503c91-f295-4574-ab2a-206e7f58a334",
    API_Key: "10a474b4-fc88-45ae-9bcd-18316d1ffe23",
  };
  private async handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      //
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return error.error;
  }
  async eventWindow(v:string='min'){
    const pathUrl = `${baseServer}/window/${v}`;
    return new Promise((res, rej) => {
      this.http
        .get(pathUrl, this.httpOptions)
        .pipe(
          retry(3), // retry a failed request up to 3 times
          catchError(this.handleError)
        )
        .subscribe((data) => {
          return res(data);
        });
    });
  }
  onCloseWindow() {
 
  }
  onMinimize() {
  }
  onMaximize() {
    
  }
}
