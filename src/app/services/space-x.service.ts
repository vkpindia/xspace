import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { SpaceXRocordT } from '../models/scpacex.model';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  private _apiUrl: string = environment.BASE_API_URL;

  // setting headers for http call
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'Application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    }),
    crossDomain: true
  };

  constructor(private _http: HttpClient) { }

  /**
   * @description Method to get errors if occured
   * @author Virendra Pandey
   * @date 2020-09-27
   * @private handleError
   * @param {HttpErrorResponse} error
   * @returns throwError
   * @memberof SpaceXService
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The firebase returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Back-end returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  /**
   * @description Method for extracting response data
   * @author Virendra Pandey
   * @date 2020-09-27
   * @private
   * @param {Response} res
   * @returns response body
   * @memberof SpaceXService
   */
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  /**
   * @description Method for getting SpaceX data from server
   * @author Virendra Pandey
   * @date 2020-09-27
   * @returns
   * @memberof SpaceXService
   */
  public getSpaceXData(url: string): Observable<Array<SpaceXRocordT>> {
    let serviceUrl = this._apiUrl + 'launches?limit=100';
    serviceUrl += url;
    return this._http.get<Array<SpaceXRocordT>>(serviceUrl).pipe(
      map(data => data),
      catchError(this.handleError));
  }
}
