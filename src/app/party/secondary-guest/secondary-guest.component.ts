import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { PrimaryGuest } from '../store/reducers/primary-guest.reducer';
import { SecondaryGuest } from '../store/reducers/secondary-guest.reducer';
import { PartyAppState } from '../store/reducers/index.reducer';
import * as guestActions from '../store/actions/guest.actions'; 

@Component({
  selector: 'app-secondary-guest',
  templateUrl: './secondary-guest.component.html',
  styleUrls: ['./secondary-guest.component.css']
})
export class SecondaryGuestComponent implements OnInit {

  party$: Observable<PartyAppState>;
  secondaryGuests: SecondaryGuest[];

  constructor(private route: ActivatedRoute,
            private router: Router, private store: Store<PartyAppState>) { 
              this.party$ = store.pipe(select('party'));
            }

  selectedPrimaryGuestId: number;

  ngOnInit() {
     this.selectedPrimaryGuestId = this.route.snapshot.params.primaryGuestId;
     this.party$.subscribe((x) => {
        this.secondaryGuests = x.secondaryGuest.secondaryGuests;
     });
  }

  getSecondaryGuestId(): number {
    return (this.secondaryGuests.length + 300);
  }

  addSecondaryGuest(secondaryGuestName){
    // get secondary guest unique id (should be from db..)
    let secId = this.getSecondaryGuestId();
    let p = { id: secId, name: secondaryGuestName.value };
    this.store.dispatch(new guestActions.AddSecondaryGuest(p));
    // add secondary guest to primary
    let s_to_p = { pid: +this.selectedPrimaryGuestId,
         sid: secId };
    this.store.dispatch(new guestActions.AddSecondaryGuestToPrimary(s_to_p));
  }

}
