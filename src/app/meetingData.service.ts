import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class meetingDataService {
  private endPointURL = 'http://localhost:3000/meetingData';

  constructor(private httpClient: HttpClient) {}

  public getMeetingsDetail() {
    return this.httpClient.get(this.endPointURL);
  }
}
