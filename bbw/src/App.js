import { CartProvider } from "./Context/CartProvider";
import MainRoutes from "./Routes/MainRoutes";
function App() {
  return (
    <>
      <CartProvider>
        <MainRoutes />
      </CartProvider>
    </>
  );
}

export default App;
