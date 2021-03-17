import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCPT5YtT5IARe3is3s4rT43gBCY0D85D4I',
  authDomain: 'crwn-clothing-7e14a.firebaseapp.com',
  projectId: 'crwn-clothing-7e14a',
  storageBucket: 'crwn-clothing-7e14a.appspot.com',
  messagingSenderId: '226425054571',
  appId: '1:226425054571:web:f7692a97f38b937b98182e',
  measurementId: 'G-J6V8R32L5S',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
