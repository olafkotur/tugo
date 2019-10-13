import 'firebase/firestore';
import * as firebase from 'firebase';
import { config } from '../../config';

const firebaseConfig = {
  apiKey: config.firebase.apiKey,
  authDomain: 'tugo-29877.firebaseapp.com',
  databaseURL: 'https://tugo-29877.firebaseio.com',
  projectId: 'tugo-29877',
  storageBucket: 'tugo-29877.appspot.com',
  messagingSenderId: '89710445411',
  appId: '1:89710445411:web:b362dfec9006d483f98956',
  measurementId: 'G-5P5KHC5J9X',
};
firebase.initializeApp(firebaseConfig);

export const DbService = {

  db: firebase.firestore(),
  auth: firebase.auth(),

  formatErrorMessage: (code: string): string => {
    if (code === 'auth/network-request-failed') {
      return 'We can\'t seem to connect to the internet';
    }
    else if (code === 'auth/email-already-in-use') {
      return 'This email address is already in use';
    }
    else if (code === 'auth/user-not-found') {
      return 'This email address is not registered';
    }
    else if (code === 'auth/invalid-email') {
      return 'This email seems to be badly formatted';
    }
    else if (code === 'auth/wrong-password') {
      return 'You\'ve entered the wrong password';
    }
    else if (code === 'auth/weak-password') {
      return 'This password is too weak';
    }
    else if (code === 'auth/too-many-requests') {
      return 'You\'ve entered an incorrect password too many times';
    }
    else {
      const msg: string = `\`SlackService.formatErrorMessage\`\n>>> Unexpected error code - ${code}`;
      // TODO: Add slack service
      // SlackService.sendMessage(msg, 'log');
      return 'Something unexpected happened, a message has been sent to the developers';
    }
  },
};
