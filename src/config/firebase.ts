import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCgw-HhQFp8HkGFbyNBK0pLQAgkNaq4h8U",
  authDomain: "wedevelop-81f40.firebaseapp.com",
  projectId: "wedevelop-81f40",
  storageBucket: "wedevelop-81f40.appspot.com",
  databaseURL: "https://wedevelop-81f40-default-rtdb.firebaseio.com",
  messagingSenderId: "634798228310",
  appId: "1:634798228310:web:d28842becff644b6e38cf7",
  measurementId: "G-JK02ZRVKPX",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
