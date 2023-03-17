import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const db = getFirestore();
    const coursesCollection = collection(db, "cursoDeIngles");
    getDocs(coursesCollection).then((querySnapshot) => {
      const courses = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(courses);
    });
  }, []);


  return <ItemDetail courses={data}  />;
};

export default ItemDetailContainer;