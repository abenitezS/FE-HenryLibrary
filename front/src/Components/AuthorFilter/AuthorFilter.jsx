import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Heading, Input, Stack } from "@chakra-ui/react";
import { getBooksByAuthor } from "../../actions";

//CSS
// import style from "./CategoryFilter.module.css";

//REACT ICONS

export default function Footer() {
  const dispatch = useDispatch(),
    [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getBooksByAuthor(Number(author)));
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
            _placeholder={{ color: "#01A86C", fontFamily: "Quicksand" }}
            onChange={(event) => setAuthor(event.currentTarget.value)}
          />
        </form>
      </Stack>
    </>
  );
}
