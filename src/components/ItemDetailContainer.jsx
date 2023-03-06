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
  
  const ItemDetail = ({courses }) => {
	const { id } = useParams();
  
	const [producto, setProducto] = useState([]);
  
	useEffect(() => {
	  const db = getFirestore();
  
	  const courseRef = doc(db, "courses", `${id}`);
  
	  getDoc(courseRef).then((snapshot) => {
		if (snapshot.exists()) {
		  setProducto(snapshot.data());
		} else {
		  console.log("No such document!");
		}
	  });
	}, []);
  
	const courseFilter = courses.filter((course) => course.id == id);
  
	return (
	  <>
		{courseFilter.map((course) => (
		  <div key={course.id}>
			<Center p="1rem">
			  <Card className="card-main">
				<CardBody>
				  <Image borderRadius="lg" src={bike.image} />
				  <Stack mt="6" spacing="3">
					<Heading size="md">{course.name}</Heading>
					<Text color="blue.800" fontSize="l">
					  Description: {course.description}
					</Text>
					<Text color="blue.800" fontSize="l">
					  Category: {course.category}
					</Text>
					<Text color="red.600" fontSize="xl">
					  Stock: {course.stock}
					</Text>
					<Text color="green.600" fontSize="xl">
					  Price: U$D {course.price}
					</Text>
				  </Stack>
				</CardBody>
				<Divider />
				<CardFooter className="card-footer">
				  <ItemCount
					stock={course.stock}
					id={course.id}
					price={course.price}
					name={course.name}
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
  