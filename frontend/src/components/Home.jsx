import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../slices/cartSlice";
import { useGetAllProductsQuery } from "../slices/productsApi";
import { useIsAuthenticated } from "@azure/msal-react";



const Home = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(products)

  const isAuthenticated = useIsAuthenticated();
 

  const { data, isLoading } = useGetAllProductsQuery();
  console.log("Loading home", isLoading);
  // console.log("ข้อมูล",data)

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/cart");
  };

  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          {isAuthenticated ? 
          <div className="products">
          {data &&
            data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">฿{product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add To Cart
                </button>
              </div>
            ))}
        </div>
          : <div className='text-center mt-3'><h3>กรุณา Login เพื่อเข้าสู่ระบบ</h3></div>}
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default Home;
