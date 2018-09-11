import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { PrimaryGuest } from '../store/reducers/primary-guest.reducer';

@Component({
  selector: 'app-primary-guest',
  templateUrl: './primary-guest.component.html',
  styleUrls: ['./primary-guest.component.css']
})
export class PrimaryGuestComponent implements OnInit {

  @Input() primaryGuests: PrimaryGuest[];

  constructor() { }

  ngOnInit() {
  }

}
