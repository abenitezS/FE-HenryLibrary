import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heading, Input, Stack, List, ListItem } from "@chakra-ui/react";
import { getBooksByAuthor, getAuthorByName, getAllBooks } from "../../actions";

export default function Footer() {
  const dispatch = useDispatch(),
    [author, setAuthor] = useState({ id: 0, name: "" }),
    authors = useSelector((state) => state.authors);

  const handleChange = (event) => {
    setAuthor({ ...author, name: event.target.value });
    dispatch(getAuthorByName(event.target.value));
    !event.target.value.length && dispatch(getAllBooks());
  };

  const handledClick = (event) => {
    setAuthor({ id: Number(event.target.id), name: event.target.textContent });
    dispatch(getBooksByAuthor(Number(event.target.id)));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getBooksByAuthor(author.id));
  };

  return (
    <>
      <Stack pt="10%" spacing={3}>
        <Heading
          textAlign="center"
          fontSize={20}
          fontFamily="Quicksand"
          textColor="#01A86C"
        >
          Autor
        </Heading>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Nombre del Autor"
            focusBorderColor="#01A86C"
            //   color="#01A86C"
            background="fff"
            fontFamily="Quicksand"
            _placeholder={{ color: "#a3a1a1", fontFamily: "Quicksand" }}
            onChange={handleChange}
            value={author.name}
          />
          <List spacing={1} backgroundColor="white">
            {authors.map((author) => (
              <ListItem
                key={author.id}
                id={author.id}
                value={author.name}
                onClick={handledClick}
                _hover={{ cursor: "pointer" }}
                fontFamily="Quicksand"
              >
                {author.name}
              </ListItem>
            ))}
          </List>
        </form>
      </Stack>
    </>
  );
}
