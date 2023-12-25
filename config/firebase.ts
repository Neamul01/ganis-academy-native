import { initializeApp } from "firebase/app";
import Constants from "expo-constants";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const apiKey = Constants.expoConfig?.extra?.apiKey;
const authDomain = Constants.expoConfig?.extra?.authDomain;

const projectId = Constants.expoConfig?.extra?.projectId;
const storageBucket = Constants.expoConfig?.extra?.storageBucket;

const messagingSenderId = Constants.expoConfig?.extra?.messagingSenderId;
const appId = Constants.expoConfig?.extra?.appId;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Export the Firebase modules
export const auth = getAuth();
export const database = getFirestore();

// export const auth = getAuth();
// export const database = getFirestore();
