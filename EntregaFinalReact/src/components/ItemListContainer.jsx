import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const coursesCollection = collection(db, "cursoDeIngles");
    console.log(coursesCollection);
    getDocs(coursesCollection).then((querySnapshot) => {
      const courses = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(courses);
    });
  }, []);
  console.log(data);
  const nameFilter = data.filter((course) => course.Category === category);
  return (
    <div>
      {category ? (
        <ItemList courses={nameFilter} />
      ) : (
        <ItemList courses={data} />
      )}
    </div>
  );
};

export default ItemListContainer;
