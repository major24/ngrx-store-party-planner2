import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { PrimaryGuest } from '../store/reducers/primary-guest.reducer';
import { SecondaryGuest } from '../store/reducers/secondary-guest.reducer';
import { PartyAppState } from '../store/reducers/index.reducer';
import * as guestActions from '../store/actions/guest.actions'; 

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {

  party$: Observable<PartyAppState>;
  primaryGuests: PrimaryGuest[];
  secondaryGuests: SecondaryGuest[];
  selectedPrimaryGuestId: number;

  constructor(private store: Store<PartyAppState>) {
    this.party$ = store.pipe(select('party'));
   }

  getPrimryGuestId(){
    return (this.primaryGuests.length + 10);
  }


  ngOnInit() {
    this.party$.subscribe((x) => {
      this.primaryGuests = x.primaryGuest.primaryGuests;
      console.log(this.primaryGuests)
    });
    this.party$.subscribe((x) => {
      this.secondaryGuests = x.secondaryGuest.secondaryGuests;
    });

    // test methods below
    //this.debugPrimary();
    //this.debugSecondary();
    //this.addPrimary3();
    //console.log('de pri');
    //this.debugPrimary();
    //this.addSecondary();
    //this.addSecondaryToPrimary();
    //this.debugPrimary();
    //this.removeSecondaryFromPrimary();
    //this.debugPrimary();
    //this.testArrayManipulation();
    // subscribe..

  }

  addPrimaryGuest(primaryGuestName){
    let p = { id: this.getPrimryGuestId(), name: primaryGuestName.value };
    this.store.dispatch(new guestActions.AddPrimaryGuest(p));
  }
















  //--------------------------------------------------------------------------
  // Below is testing and debugging...
  debugPrimary(){
    this.party$.subscribe((x) => {
      console.log(x.primaryGuest);
      this.primaryGuests = x.primaryGuest.primaryGuests;
    });
  }

  debugSecondary(){
    this.party$.subscribe((x) => {
      console.log(x.secondaryGuest);
      this.secondaryGuests = x.secondaryGuest.secondaryGuests;
    });
  }

  addPrimary(){
    let p = { id: 27, name: 'Hurbert Ja' };
    this.store.dispatch(new guestActions.AddPrimaryGuest(p));
  }

  addPrimary3(){
    let p = { id: this.getPrimryGuestId(), name: 'Hurbert Ja' };
    this.store.dispatch(new guestActions.AddPrimaryGuest(p));
    let p2 = { id: this.getPrimryGuestId(), name: 'James Rod' };
    this.store.dispatch(new guestActions.AddPrimaryGuest(p2));
    let p3 = { id: this.getPrimryGuestId(), name: 'Smith Kay' };
    this.store.dispatch(new guestActions.AddPrimaryGuest(p3));
  }

  addSecondary(){
    let p = { id: 300, name: 'Sheila Ja'};  //, primaryGuestId: 27 };
    this.store.dispatch(new guestActions.AddSecondaryGuest(p));
  }

/*  addSecondaryToPrimary() {
    let s_to_p = { pid: 11, sid: this.getSecondaryGuestId() };
    this.store.dispatch(new guestActions.AddSecondaryGuestToPrimary(s_to_p));
    let s_to_p1 = { pid: 12, sid: this.getSecondaryGuestId() };
    this.store.dispatch(new guestActions.AddSecondaryGuestToPrimary(s_to_p1));
    let s_to_p2 = { pid: 11, sid: this.getSecondaryGuestId() };
    this.store.dispatch(new guestActions.AddSecondaryGuestToPrimary(s_to_p2));
  }*/

  removeSecondaryFromPrimary() {
    let s_to_p = { pid: 11, sid: 201 };
    this.store.dispatch(new guestActions.RemoveSecondaryGuestFromPrimary(s_to_p));
  }





  // test
  testArrayManipulation(){
    //this.testWithMap();
    this.testWithMapArray();
    //this.testWithMapRemoveItemArray();
  }

  testWithMap() {
    const x = [1,2,3];
    const xc = [...x, 9,90];
    //console.log(xc);
    const x2 = [{id:1, name:'maj'}, {id:2, name:'rup'}];
    const x2c = [...x2]
    //console.log(x2c);
    const map2 = x2.map((x) => {
      if (x.id === 1){
        return Object.assign({}, x, {name: 'jaj'});
      }
      return x;
    });
    console.log(map2);
  }

  testWithMapArray() {
    //const x = [1,2,3];
    //const xc = [...x, 9,90];
    //console.log(xc);
    const x2 = [{id:1, name:'maj', sid:[1,2]}, {id:2, name:'rup', sid:[]}];
    console.log(x2);
    const map2 = x2.map((x) => {
      if (x.id === 1){
        //return Object.assign({}, x, {name: 'jaj'});
        return Object.assign({}, x, {sid: [...x.sid, 99]});
      }
      return x;
    });
    console.log(map2);
  }


  testWithMapRemoveItemArray() {
    const pid = 1;
    const sidrm = 200;
    const x2 = [{id:1, name:'maj', sid:[100,200]}, {id:2, name:'rup', sid:[]}];
    console.log(x2);
    const map2 = x2.map((x) => {
      if (x.id === pid){
        console.log(x.id);
        const m = x.sid.filter(s => s!== sidrm)
        console.log(m);
        return Object.assign({}, x, {sid: m});
      }
      return x;
    });
    console.log(map2);
  }


  testArrayManipulation11(state: any){    
    // copy the state
    const newSte = Object.assign([], state);
    // extract person obj
    const ex = newSte.find((x) => {
      if (x.id === 24) {
        let m: any;
        m = Object.assign({}, x);
        m.sid = [...x.sid, 99];
        console.log(m);
       // 
        //console.log(m);
        return m;
      }
    });
    console.log('newste');
    console.log(ex);
    const newSte2 = Object.assign([], ex);
    console.log(newSte2);
    //ex.sid = Object.assign([], [...ex.sid, [88]]);
    //ex.sid = [...ex.sid, [88]];
    //console.log(ex);
    
    //state.map((x) => {
      //if (x.id === 24){
        //return Object.assign([], [...ex.sid, [88]]);
      //}
    //});
    return newSte;
  }

  testArrayManipulation1122(state: any){
    //const characters = [ 'Obi-Wan', 'Vader' ]
    //const newCharacters = [ ...characters, 'Luke' ]
    //console.log(characters === newCharacters) // false
    //console.log(characters) // [ 'Obi-Wan', 'Vader' ]
    //console.log(newCharacters) // [ 'Obi-Wan', 'Vader', 'Luke' ]
    
    // copy the state
    const newSte = Object.assign([], state);
    console.log(newSte);
    // extract person obj
    const ex = newSte.find((x) => {
      return x.id === 24
    });
    console.log(ex);
    //ex.sid = Object.assign([], [...ex.sid, [88]]);
    ex.sid = [...ex.sid, [88]];
    console.log(ex);
    
    //state.map((x) => {
      //if (x.id === 24){
        //return Object.assign([], [...ex.sid, [88]]);
      //}
    //});
    console.log(newSte);

    //const arr = [p];
    //const exarr = [...(arr[0].sid), [88]];
    //console.log(exarr);
    //const nearr = [...exarr, [90]]
    //console.log(nearr);


    
    //console.log(PrimaryGuest)

  }


}



