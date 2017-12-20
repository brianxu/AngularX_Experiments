import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DetailsService {

  constructor(private http: HttpClient) { }
  public getDetails() {
    let query = 'Stack'
    const url = 'https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=search&prop=extracts|info&inprop=url&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+query;
    const httpOptions = {
      headers: new HttpHeaders(
        { 
          'Api-User-Agent': 'Example/1.0'
        }
      )
    };
    return this.http.post(url, httpOptions);
  }
}
