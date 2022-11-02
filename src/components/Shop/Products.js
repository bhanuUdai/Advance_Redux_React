import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 6,
    title: "Laptop",
    description: "HP",
  },
  {
    id: "p2",
    price: 100,
    title: "BIKE",
    description: "Royal Enfield",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => {
          return (
            <ProductItem
              title={product.title}
              price={product.price}
              description={product.description}
              id={product.id}
              key={product.id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
