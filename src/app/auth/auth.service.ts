import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public auth: AngularFireAuth) { }

  loginWithGoogle() {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.auth.signOut();
  }

  getCurrentUser() {
    return this.auth.user;
  }
}