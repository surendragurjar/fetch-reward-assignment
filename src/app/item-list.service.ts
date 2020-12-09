import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  private REST_API_URL = "http://fetch-hiring.s3.amazonaws.com/hiring.json";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_URL, 
      { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }) });
  }
}
