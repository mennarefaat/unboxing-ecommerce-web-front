import { Grid, HStack, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/common/Card/Card";
import ProductType from "../models/Product.model";
import { getAllProductsAPI } from "../store/actionCreator/productActionCreator";
import { StoreType } from "../store/store";
import { Link } from "react-router-dom";
import { Spinner } from "@chakra-ui/spinner";
import { productDetails } from "../router/routePaths";

export default function Products() {
  const dispatch: any = useDispatch();
  const [page, setPage] = useState(1);
  // const [products, setProducts]= useState(useSelector([])
  const products = useSelector((store: StoreType) => store?.product?.products);
  // const numOfPages = useSelector(
  //   (store: StoreType) => store?.product?.numOfPages
  // );

  useEffect(() => {
    dispatch(getAllProductsAPI(page));
  }, [page]);

  console.log(products);
  // console.log(numOfPages);

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} ml={6} mr={6}>
        <>
          {!products.length ? (
            <Spinner
              position={"absolute"}
              right={"50vw"}
              top={"25vh"}
              size="xl"
            />
          ) : (
            <>
              {products?.map((product: ProductType) => {
                return (
                  <>
                    <Link to={`/products/${product._id}`}>
                      <Card
                        key={product._id}
                        imageUrl={product?.images[0]}
                        title={product?.name}
                        // rating={product.rating}
                        isOffer={product?.offer}
                        formattedPrice={product?.price + ""}
                        reviewCount={product?.numOfReviews}
                        category={product?.category?.name}
                      ></Card>
                    </Link>
                  </>
                );
              })}
            </>
          )}
        </>
      </Grid>

      <HStack w={"full"} my="10" px="6">
        <Button
          bg="blue.400"
          color={"white"}
          disabled={page === 1 ? true : false}
          onClick={() => {
            if (page === 1) setPage(1);
            else setPage(page - 1);
          }}
        >
          {"< Prev"}
        </Button>
        <Button
          bg="gray.400"
          color={"white"}
          // disabled={page === numOfPages ? true : false}
          onClick={() => {
            // if (page === numOfPages) setPage(numOfPages);
            setPage(page + 1);
          }}
        >
          {"Next >"}
        </Button>
      </HStack>
    </>
  );
}
