import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyCjvHHSqWGZhh2pcoHF_8ZeKqxT0wRvXuc',
    authDomain: 'website-cine.firebaseapp.com',
    projectId: 'website-cine',
    storageBucket: 'website-cine.appspot.com',
    messagingSenderId: '1060388636946',
    appId: '1:1060388636946:web:ea3752ae94d0ab56e68bcb'
  };
  

export const firebaseApp = initializeApp(firebaseConfig)

// const db = getFirestore(firebaseApp)
// export const screenings = collection(db, 'website-by-date-screenings')
