import { useState, useEffect, useContext } from 'react';
import { projectFirestore } from '../../firebaseConfig';
import {AuthContext} from '../../Auth/contexts/AuthContext';

const useFirestore = () => {
  const [docs, setDocs] = useState([]);
  const {currentUser} = useContext(AuthContext)

  useEffect(() => {
    const unsub = projectFirestore.collection('users').doc(currentUser.uid).collection('Gallery')
      //.where("author", "==", "QhTXBZ0IQR4dqEJpR8Eg")
      .orderBy('createdAt', 'desc')
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

  return { docs };
}

export default useFirestore;