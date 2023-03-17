import {
	Center,
	Card,
	CardBody,
	Image,
	Stack,
	Heading,
	Text,
	CardFooter,
	Divider,
  } from "@chakra-ui/react";
  import { useParams } from "react-router-dom";
  import ItemCount from "./ItemCount";
  
  import { useEffect, useState } from "react";
  import { doc, getDoc, getFirestore } from "firebase/firestore";
  
  const ItemDetail = ({ courses }) => {
	const { id } = useParams();
  
	const [producto, setProducto] = useState([]);
  
	useEffect(() => {
	  const db = getFirestore();
  
	  const courseRef = doc(db, "cursoDeIngles", `${id}`);
	  
	  getDoc(courseRef).then((snapshot) => {
		console.log(snapshot)
		if (snapshot.exists()) {
		  setProducto(snapshot.data());
		} else {
		  console.log("No such document!");
		  
		}
	  });
	}, []);
	
  
	const courseFilter = courses.filter((course) => course.Id == id);
	console.log(courseFilter)
	return (
	  <>
		{courseFilter.map((course) => (
		  <div key={course.Id}>
			<Center p="1rem">
			  <Card className="card-main">
				<CardBody>
				  <Image borderRadius="lg" src={course.Image} />
				  <Stack mt="6" spacing="3">
					<Heading size="md">{course.Course}</Heading>
					<Text color="blue.800" fontSize="l">
					  Description: {course.Description}
					</Text>
					<Text color="blue.800" fontSize="l">
					  Category: {course.Category}
					</Text>
					<Text color="red.600" fontSize="xl">
					  Level: {course.Level}
					</Text>
					<Text color="green.600" fontSize="xl">
					  Price: U$D {course.Price}
					</Text>
				  </Stack>
				</CardBody>
				<Divider />
				<CardFooter className="card-footer">
				  <ItemCount
					level={course.Level}
					id={course.Id}
					price={course.Price}
					name={course.Course}
				  />
				</CardFooter>
			  </Card>
			</Center>
		  </div>
		))}
	  </>
	);
  };
  
  export default ItemDetail;