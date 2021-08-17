import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
} from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { PNftDetails } from '../interfaces/PNft-details';

export interface Contact {
    firstName: string;
    lastName: string;
    email: string;
}

export interface Wallet {
    address: string;
    amount: string;
}

@Injectable()
export class BackendService {
    backendUrl: string;
    backendNftDetails: string;

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    constructor(private http: HttpClient) {
        this.backendUrl = environment.backendUrl;
        this.backendNftDetails = environment.backendNftDetails;
        console.log('backend url: '.concat(this.backendUrl));
        console.log('backend endpoint: '.concat(this.backendNftDetails));
    }

    /*getWallet(wallet: Wallet): Observable<Wallet>{
    /*return this.http.get<Wallet>(this.backendUrl.concat(this.backendEndPoint), wallet, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }*/
    /** POST: add a new hero to the database */
    storeContact(contact: Contact): Observable<Contact> {
        return this.http
            .post<Contact>(
                this.backendUrl.concat(this.backendNftDetails),
                contact,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.handleError));
    }

    getNftDetails(tagPayload: String): Observable<PNftDetails> {
        let data = { 'payload': tagPayload };
        return this.http
            .post<PNftDetails>(
                this.backendUrl.concat(this.backendNftDetails),
                data,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.handleError));
    }

    handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, ` +
                    `body was: ${error.error}`
            );
        }
        // Return an observable with a user-facing error message.
        return throwError('Something bad happened; please try again later.');
    }
}
