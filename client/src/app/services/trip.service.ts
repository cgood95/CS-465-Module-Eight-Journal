import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  private api = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getTrips() {
    return this.http.get(`${this.api}/trips`);
  }
}