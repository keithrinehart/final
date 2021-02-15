import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import Hamburger from "./components/Hamburger";
import { projectFirestore } from './firebaseConfig';
import "./css/galleries.scss";

function Galleries() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection('users')
      .onSnapshot(snap => {
        console.log(snap)
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, []);

  console.log(docs)

  return (
    <>
    {/*<div><Galleries /></div>*/}
    <div className="gall-body">
      <Hamburger />
      <h1 className="gall-h1">Galleries</h1>
      {docs && docs.map(({ name, id }) => (
        <Link key={id} to={`/galleries/${id}`}>{name}</Link>
      ))}
    </div>
    </>
  );
}

export default Galleries;