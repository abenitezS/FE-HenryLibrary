import React, { useState } from "react";
import {
  FormLabel,
  FormControl,
  Input,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Stack,
  Flex,
  Select,
} from "@chakra-ui/react";

import NavBar from "../NavBar/NavBar.jsx";
import NavBar2 from "../NavBar2/NavBar2.jsx";
import Rating from "./Rating";
import Footer from "../Footer/Footer.jsx";

export default function NewRecipe() {
  const [input, setInput] = useState(""),
    [price, setPrice] = useState(0);

  const handleInputChange = (e) => setInput(e.target.value);
  const handlePriceChange = (value) => setPrice(value);

  const isError = input === "";

  return (
    <>
      <NavBar />

      <NavBar2 />

      <Flex fontFamily="Quicksand" justify="center">
        <Stack spacing={4} w="30%">
          <FormControl isInvalid={isError}>
            <FormLabel>Nombre del Libro</FormLabel>
            <Input value={input} onChange={handleInputChange} />
            {!isError ? (
              <FormHelperText>
                Ingrese el nombre del libro que desea agregar.
              </FormHelperText>
            ) : (
              <FormErrorMessage>
                Nombre del Libro es requerido.
              </FormErrorMessage>
            )}

            <FormLabel>Descripcion</FormLabel>
            <Textarea value={input} onChange={handleInputChange} />
            {!isError ? (
              <FormHelperText>
                Ingrese la descripcion del libro que desea agregar.
              </FormHelperText>
            ) : (
              <FormErrorMessage>
                La descripcion del Libro es requerida.
              </FormErrorMessage>
            )}

            <FormLabel>Precio</FormLabel>
            <NumberInput
              defaultValue={0}
              min={0}
              max={20000}
              value={price}
              onChange={handlePriceChange}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            {price > 0 ? (
              <FormHelperText>
                Ingrese el precio del libro que desea agregar.
              </FormHelperText>
            ) : (
              <FormErrorMessage>
                El precio del Libro es requerido.
              </FormErrorMessage>
            )}
          </FormControl>

          <FormLabel>Imagen</FormLabel>
          <Input
            value={input}
            placeholder="https://..."
            onChange={handleInputChange}
          />

          <FormLabel>Editorial</FormLabel>
          <Select placeholder="Selecione una opcion">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <FormLabel>Fecha de Publicacion</FormLabel>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
          />

          <FormLabel>Numero de Paginas</FormLabel>
          <NumberInput defaultValue={0} min={0} max={20000}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <FormLabel>Calificacion</FormLabel>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
          />

          <FormLabel>Idioma</FormLabel>
          <Input
            value={input}
            placeholder="Español"
            onChange={handleInputChange}
          />

          <FormLabel>Puntuacion</FormLabel>
          <NumberInput defaultValue={0} min={0} max={20000}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Flex justify="center">
            <Button w="30%" backgroundColor="#01A86C" variant="solid">
              Guardar
            </Button>
          </Flex>
        </Stack>
      </Flex>

      <Rating
        size={48}
        icon="StarIcon"
        scale={5}
        fillColor="gold"
        strokeColor="red"
      />

      <Footer />
    </>
  );
}
