import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      <Link to=".." relative="path">
        BACK
      </Link>
    </>
  );
};

export default ProductDetailPage;
