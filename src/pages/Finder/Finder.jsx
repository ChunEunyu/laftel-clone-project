import React, { useEffect, useState } from 'react';
import { doc, getDoc  } from "firebase/firestore";
import { firestore } from '../../firebase';
import Header from '../../components/Header/PageHeader/Header';

const Finder = () => {
  const [test, setTest] = useState()
  async function getTest() {
    const docRef = doc(firestore, "items", "1");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTest(docSnap.data())
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  
  useEffect(() => {
    getTest()
  }, [])

  console.log("Test State:", test);
  
  return (
    <div>
      <Header />
      <div>
        <h1>finder</h1>
        {test !== undefined &&
          <div>{test.name}</div>}
        
      </div>
    </div>
  );
}

export default Finder;
