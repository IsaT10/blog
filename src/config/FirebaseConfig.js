// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBr9Tm7VhkhyRFcbgK3IyHWjRBC-UWSOwQ',
  authDomain: 'blog-93e21.firebaseapp.com',
  projectId: 'blog-93e21',
  storageBucket: 'blog-93e21.appspot.com',
  messagingSenderId: '675606447677',
  appId: '1:675606447677:web:86171e15806fd7df008c54',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
