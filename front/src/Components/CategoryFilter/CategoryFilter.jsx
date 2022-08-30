import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories, getBooksByCategory } from "../../actions";
import { List, ListItem, Heading, Link, Collapse } from "@chakra-ui/react";

export default function Footer() {
  const dispatch = useDispatch(),
    [show, setShow] = useState(false),
    categories = useSelector((state) => state.categories);

  const handleToggle = () => setShow(!show);

  const handledClick = (event) => {
    event.preventDefault();
    dispatch(getBooksByCategory(event.target.id));
  };

  useEffect(() => {
    //Obtener la informacion una vez cargue la pagina y traiaga la informacion necesaria.
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <Heading
        textAlign="center"
        fontSize={20}
        fontFamily="Quicksand"
        pt="10px"
        textColor="#01A86C"
      >
        Genero
      </Heading>

      <Collapse startingHeight={150} in={show}>
        <List spacing={-1} pt="10px" pl="10px">
          {categories.map((category) => (
            <ListItem key={category.id}>
              <Link
                style={{ textDecoration: "none" }}
                fontFamily="Quicksand"
                fontSize={12}
                textTransform="capitalize"
                onClick={handledClick}
                _hover={{ fontWeight: "semibold" }}
                id={category.id}
              >
                {category.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Collapse>
      <Link
        fontFamily="Quicksand"
        color="#01A86C"
        padding={2}
        onClick={handleToggle}
      >
        Ver {show ? "Menos" : "Mas.."}
      </Link>
    </>
  );
}
