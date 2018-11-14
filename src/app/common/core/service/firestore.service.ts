import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private db: AngularFirestore
  ) { }

  goOnlie() {
    this.db.firestore.enableNetwork().then(() => {
    }).catch(() => {
    })
  }

  goOffline() {
    this.db.firestore.disableNetwork().then(() => {
    }).catch(() => {
    })
  }

}
