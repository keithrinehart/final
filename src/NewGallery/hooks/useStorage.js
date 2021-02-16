import { useState, useEffect, useContext } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../../firebaseConfig';
import {AuthContext} from '../../Auth/contexts/AuthContext'

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const {currentUser} = useContext(AuthContext);

  useEffect(() => { // logic to update the file
    // references
    const storageRef = projectStorage.ref(file.name);
    const userGallery = projectFirestore.collection('users').doc(currentUser.uid).collection('Gallery')

    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await userGallery.add({ url, createdAt}); // Timestamp
      setUrl(url);
    });
    
    // storageRef.put(file).on('state_changed', (snap) => {
    //   let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
    //   setProgress(percentage);
    // }, (err) => {
    //   setError(err);
    // }, async () => {
    //   const url = await storageRef.getDownloadURL();
    //   const createdAt = timestamp();
    //   await collectionRef.add({ url, createdAt }); // Timestamp
    //   setUrl(url);
    // });
  }, [file]);

  return { progress, url, error };
}

export default useStorage;