import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({ courses }) => {
  return (
    <>
      <Container className="main-catalogue">
        {courses?.map((course) => (
          <Item
            key={course.Id}
            id={course.Id}
            name={course.Course}
            description={course.Description}
            price={course.Price}
            level={course.Level}
            category={course.Category}
            image={course.Image}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
