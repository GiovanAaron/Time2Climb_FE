import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAMJmVECcs3DndiREz-jBWQ2MXOuZpZ47Y",
  authDomain: "my-first-app-b3904.firebaseapp.com",
  projectId: "my-first-app-b3904",
  storageBucket: "my-first-app-b3904.appspot.com",
  messagingSenderId: "1016531679454",
  appId: "1:1016531679454:web:3364566636bf54a486ea4f",
  measurementId: "G-DZ8HD5K943"
};

const app = initializeApp(firebaseConfig);

export default app;