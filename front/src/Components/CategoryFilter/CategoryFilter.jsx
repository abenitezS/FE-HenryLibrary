import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../actions";
import { List, ListItem, Heading, Link, Collapse } from "@chakra-ui/react";

//CSS
// import style from "./CategoryFilter.module.css";

//REACT ICONS

// const categories = [
//   "Fantasia",
//   "Infantiles",
//   "Aventura",
//   "Ciencia Ficcion",
//   "Policial",
//   "Romance",
//   "Historia",
//   "Novela",
//   "Suspenso",
//   "Terror",
//   "Comedia",
// ];

export default function Footer() {
  const dispatch = useDispatch(),
    [show, setShow] = useState(false),
    categories = useSelector((state) => state.categories);

  const handleToggle = () => setShow(!show);

  const handledClick = (event) => {
    event.preventDefault();
    console.log(event.target.text);
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
    // <>
    //   <h3 className={style.title}>Genero</h3>
    //   <Collapse startingHeight={150} in={show}>
    //     <ul className={style.content}>
    //       {categories.map((category) => (
    //         <li className={style.item}>
    //           <a href="!#" className={style.link}>
    //             {category}
    //           </a>
    //         </li>
    //       ))}
    //     </ul>
    //   </Collapse>
    //   <Link
    //     fontFamily="Quicksand"
    //     color="#01A86C"
    //     padding={2}
    //     onClick={handleToggle}
    //   >
    //     Ver {show ? "Menos" : "Mas.."}
    //   </Link>
    // </>
  );
}
