import {initializeApp} from 'firebase/app';
import {getAuth,signOut,signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

const config = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER,
  appId: import.meta.env.VITE_APP_ID,
};

class Firebase {
  constructor() {
    const app = initializeApp(config);
    this.auth = getAuth(app);
  }

  signUpUser(email, password) {
    createUserWithEmailAndPassword(this.auth, email, password);
  }

  loginUser(email, password) {
    signInWithEmailAndPassword(this.auth,email, password);
  }

  logOut() {
    signOut(this.auth);
  }
}

export default Firebase;
