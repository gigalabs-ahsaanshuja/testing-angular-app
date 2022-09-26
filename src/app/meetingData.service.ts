import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class meetingDataService {
  apiURL = environment.apiURL;
  private endPointURL = `${this.apiURL}/meetingData`;
  constructor(private httpClient: HttpClient) {}
  public getMeetingsDetail() {
    return this.httpClient.get(this.endPointURL);
  }
  public getMeetingsDetailById(id: string) {
    return this.httpClient.get(`${this.endPointURL}/${id}`);
  }
}
