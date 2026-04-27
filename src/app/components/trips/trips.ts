import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsService } from '../../services/trips.service';

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trips.html',
  styleUrl: './trips.css'
})
export class TripsComponent implements OnInit {

  trips: any[] = [];

  constructor(private tripsService: TripsService) {}

  ngOnInit() {
    this.tripsService.getTrips()
      .subscribe((data: any) => {
        this.trips = data;
      });
  }
}