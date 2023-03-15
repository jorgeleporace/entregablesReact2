import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [courses, setCourses] = useState([]);
  const { category  } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const coursesCollection = collection(db, "cursoDeIngles");
	console.log (coursesCollection)
    getDocs(coursesCollection).then((querySnapshot) => {
      const courses = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCourses(courses);
    });
  }, []);
console.log (courses)
  const nameFilter = courses.filter((course) => course.category === category);

  return (
    <div>
      {category ? <ItemList courses={nameFilter} /> : <ItemList courses={courses} />}
    </div>
  );
};

export default ItemListContainer;