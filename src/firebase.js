import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

 const app = firebase.initializeApp({
  apiKey: "AIzaSyDXF_pSEeIwrzLvs3skmYg8g86mFbIJQMY",
  authDomain: "auth-development-773ca.firebaseapp.com",
  databaseURL: "https://auth-development-773ca-default-rtdb.firebaseio.com",
  projectId: "auth-development-773ca",
  storageBucket: "auth-development-773ca.appspot.com",
  messagingSenderId: "712897836387",
  appId: "1:712897836387:web:a55426f6805258ee250f56"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
