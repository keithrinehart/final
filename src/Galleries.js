import React from "react";
import Hamburger from "./components/Hamburger";
import "./css/galleries.scss";
import useFirestore from "./NewGallery/hooks/useFirestore";
import { useState, useEffect } from "react";
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase/app';

const db = firebase.firestore;

function Galleries() {
  const [userData, setUserData] = useState([])
  const { docs } = useFirestore("users");

  useEffect(() => {
    // query database
    //creating reference between link and image

  const query = db.collectionGroup('users');

    // setUserData
    //const userRef = database.ref('users');
    //db.collection('users')

}, []);
    
/*const setupUI = (user) => {
  if (user) {
    // account info
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
        <div>Logged in as ${user.email}</div>
        <div>${doc.data().name}</div>
      `;
      accountDetails.innerHTML = html;
    });
  }
}*/

/*
const result = await firebase.auth().Signup
const userDocument = await db
.collectionGroup('users')
.docs(result.user.uid)
.get();
if {!userDocument.exists} {
  await db.collection('users').doc(result.user.uid).set({
    admin: false,
    name: result.user.displayName,
  });
  await db.collection('users').doc(uid).collection('gallery').doc(id).set({
    photoUri: ''
  })
}
*/

  return (
    <>
    <div><Galleries /></div>
    <div className="gall-body">
      <Hamburger />
      <h1 className="gall-h1">Galleries</h1>
    </div>
    </>
  );
}

export default Galleries;
