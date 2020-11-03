import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  server = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  eventPost(urlService, data) {
    /*  var headers_object;
     let user: any = this.getCookie('parameters') ? this.getCookie('parameters') : undefined ;
     if(!!user){
       headers_object = new HttpHeaders({
         'Content-Type':  'application/json',
         'Authorization': 'Bearer ' + user.authorization
       })
     }
 
     const httpOptions = {
       headers: headers_object
     };
  */
    return this.httpClient.get(`${this.server}/${urlService}`, data)
      .pipe(
        map(data => { return this.validateData(data) }),
        catchError(this.handleError)
      )
  }


  validateData(data) {

    if (data.status === 200) {
      return data;
    } else {
      return { error: true, data };
    }
  }

  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.data}`);
    }
    // return an observable with a user-facing error message
    // alert('Error con el servidor, por favor intenta de nuevo más tarde');
   
    return throwError('Something bad happened; please try again later.');
  }

}
