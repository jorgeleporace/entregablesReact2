import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({ Courses }) => {
  return (
    <>
      <Container className="main-catalogue">
        {Courses?.map((course) => (
          <Item
            key={Course.id}
            id={course.id}
            name={course.name}
            description={course.description}
            price={course.price}
            stock={course.stock}
            category={course.category}
            image={course.image}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;