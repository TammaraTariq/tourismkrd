import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Locations } from '../../model/location';
import { AddSuggestion } from '../../model/addsuggestion'
// import {Suggestion} from '../../model/suggestion';
/*
  Generated class for the AddserviceplaceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddserviceplaceProvider {

  private placeListRefErbilRest = this.db.list<Locations>('addPlaceInErbilRest')
  private placeListRefErbilHotel = this.db.list<Locations>('addPlaceInErbilHotel')
  private placeListRefErbilResort = this.db.list<Locations>('addPlaceInErbilResort')
  private placeListRefDohokHotel = this.db.list<Locations>('addPlaceInDohokHotel')
  private placeListRefDohokResort = this.db.list<Locations>('addPlaceInDohokResort')
  private placeListRefDuhokRest  = this.db.list<Locations>('addPlaceInDuhokRest')
  private placeListRefSulimaniHotel  = this.db.list<Locations>('addPlaceInSulimaniHotel')
  private placeListRefSulimaniResort  = this.db.list<Locations>('addPlaceInSulimaniResort')
  private placeListRefSulimaniRest  = this.db.list<Locations>('addPlaceInSulimaniRest')
  private suggListRef  = this.db.list<AddSuggestion>('addNewSuggestions')


  constructor(public db:AngularFireDatabase) {
    console.log('Hello AddserviceplaceProvider Provider');
  }

addSuggestionInKrd(addSuggestion:AddSuggestion){
  return this.suggListRef.push(addSuggestion)
}
  addLocationErbilRest(locations:Locations){
    return this.placeListRefErbilRest.push(locations)
  }
  addLocationErbilHotel(locations:Locations){
    return this.placeListRefErbilHotel.push(locations)
  }
  addLocationErbilResort(locations:Locations){
    return this.placeListRefErbilResort.push(locations)
  }
  addLocationDohokHotel(locations:Locations){
    return this.placeListRefDohokHotel.push(locations)
  }
  addLocationDohokResort(locations:Locations){
    return this.placeListRefDohokResort.push(locations)
  }
  addLocationDuhokRest(locations:Locations){
    return this.placeListRefDuhokRest.push(locations)
  }
  addLocationSulimaniHotel(locations:Locations){
    return this.placeListRefSulimaniHotel.push(locations)
  }
  addLocationSulimaniResort(locations:Locations){
    return this.placeListRefSulimaniResort.push(locations)
  }
  addLocationSulimaniRest(locations:Locations){
    return this.placeListRefSulimaniRest.push(locations)
  }
}
