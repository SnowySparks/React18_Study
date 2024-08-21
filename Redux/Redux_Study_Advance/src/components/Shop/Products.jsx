import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "MyFirstBook",
    description: "The First book I wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "MySecondBook",
    description: "The Second book I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            title={product.title}
            id={product.id}
            price={product.price}
            description={product.description}
            key={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
