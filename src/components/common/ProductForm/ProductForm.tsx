//imports
import {
  Box,
  ButtonGroup,
  Center,
  FormLabel,
  Grid,
  NumberInput,
  Radio,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import {
  InputControl,
  SubmitButton,
  RadioGroupControl,
  TextareaControl,
  SelectControl,
  ResetButton,
} from "formik-chakra-ui";
import React, { useEffect, useState } from "react";

import { onSubmit, ProductFormProps, ProductSchema } from "./vaidation";

export default function ProductForm({
  images,
  name,
  price,
  description,
  category,
  xl,
  l,
  md,
  s,
  xs,
  offer,
  discount,
  eventHandler = () => {},
}: ProductFormProps) {
  const [file, setFile]=useState("")
  const initialValues = {
    image: images,
    name: name,
    price: price,
    description: description,
    category: category,
    xl: xl,
    l: l,
    md: md,
    s: s,
    xs: xs,
    offer: offer,
    discount: discount,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ProductSchema}
      onSubmit={onSubmit}
      // enctype="multipart/form-data"

    >
      {({ handleSubmit, values, errors }) => (
        <Center>
          <Form
            // width={{ sm: "100%", md: "50%" }}
            // mb={5}
            // as="form"
            // enctype="multipart/form-data"
            onSubmit={handleSubmit as any}
          >
            <FormLabel htmlFor="product-name" mt={5}>
              Product name
            </FormLabel>
            <InputControl id="name" placeholder="Product name" name="name" />

            <FormLabel htmlFor="product-description" mt={5}>
              Product Description
            </FormLabel>
            <TextareaControl
              id="product-description"
              placeholder="Product name"
              name="description"
            />
            <FormLabel htmlFor="product-price" mt={5}>
              Product price
            </FormLabel>
            <InputControl id="product-Price" name="price" />
            <FormLabel htmlFor="category" mt={5}>
              Category Name
            </FormLabel>
            <SelectControl
              name="category"
              selectProps={{ placeholder: "Select option" }}
            >
              {category?.map((cate:any)=>{
                return <option value={cate._id}>{cate.name}</option>
              })}
            </SelectControl>
            <FormLabel htmlFor="sizeCount" mt={5}>
              Sizes Count
            </FormLabel>
            <Grid templateColumns="repeat(5, 1fr)" gap={6} ml={6} mr={6}>
              <NumberInput>
                <span>XL</span>
                <InputControl name="xl" />
              </NumberInput>
              <NumberInput>
                <span>L</span>
                <InputControl name="l" />
              </NumberInput>
              <NumberInput>
                <span>md</span>
                <InputControl name="md" />
              </NumberInput>
              <NumberInput>
                <span>S</span>
                <InputControl name="s" />
              </NumberInput>
              <NumberInput>
                <span>XS</span>
                <InputControl name="xs" />
              </NumberInput>
            </Grid>
            <FormLabel htmlFor="discount" mt={5}>
              Product discount
            </FormLabel>
            <NumberInput>
              <InputControl id="discount" name="discount" />
            </NumberInput>
            <RadioGroupControl
              name="offer"
              label=" Product offer"
              onChange={(e: any) => {
                offer = e.target.value;
              }}
            >
              <Radio value="false" mr={4}>
                False
              </Radio>
              <Radio value="true" mr={4}>
                True
              </Radio>
            </RadioGroupControl>
            <FormLabel htmlFor="product-image" mt={5}>
              Product Image
            </FormLabel>
            <Field
              id="product-image"
              placeholder="Product image"
              name="images"
              type="file"
              onChange={(e:any)=>{setFile(e?.target?.files[0])}}
            />
            <ButtonGroup display="block" mt={4}>
              <SubmitButton
                colorScheme="gray"
                pr={20}
                pl={20}
                onClick={()=>{eventHandler({...values, file})}}
              >
                Submit
              </SubmitButton>
              <ResetButton colorScheme="gray" ml={4} pr={10} pl={10}>
                Reset
              </ResetButton>
            </ButtonGroup>
          </Form>
        </Center>
      )}
    </Formik>
  );
}
