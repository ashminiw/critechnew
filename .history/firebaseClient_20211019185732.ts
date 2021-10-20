import firebaseClient from "firebase/app";
import "firebase/auth";
import { getStorage } from "firebase/storage";
/*

Copy/paste your *client-side* Firebase credentials below. 

To get these, go to the Firebase Console > open your project > Gear Icon >
Project Settings > General > Your apps. If you haven't created a web app
already, click the "</>" icon, name your app, and copy/paste the snippet.
Otherwise, go to Firebase SDK Snippet > click the "Config" radio button >
copy/paste.

*/
const CLIENT_CONFIG = {
  apiKey: "AIzaSyDi5sg5b-IL3TwLZ6LWsJqdaeywYb8WtRA",
	authDomain: "critech-prototype-init.firebaseapp.com",
	projectId: "critech-prototype-init",
	databaseURL: "https://critech-prototype-init-default-rtdb.firebaseio.com/",
	storageBucket: "critech-prototype-init.appspot.com",
	messagingSenderId: "53357208063",
	appId: "1:53357208063:web:ded045ed6afd50dc5107ca",
	measurementId: "G-2TPYF2EVJQ"
};

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  (window as any).firebase = firebaseClient;
}
const storage = getStorage();

export { firebaseClient , storage};
