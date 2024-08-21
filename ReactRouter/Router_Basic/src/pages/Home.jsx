import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="products">The List of products</Link>
      </p>
    </div>
  );
};

export default HomePage;
