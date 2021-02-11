import React from "react";
import Hamburger from "./components/Hamburger";
import "./css/galleries.css";
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';
import { useState, useEffect } from "react";

function Galleries() {
  const [userData, setUserData] = useState([])
  useEffect(() => {
    // query database
  const db = firebase.firestore();

    // setUserData
    
    //const userRef = database.ref('users');

    //db.collection('users')

  })

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
