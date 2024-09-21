import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ModalCart from "./components/ModalCart";
import { API_URL, API_KEY } from "./config";

export interface cartType {
  id: string;
  image: string;
  description: string;
  name: string;
  price: number;
  bgColor: string;
  quantity?: number;
}

export const CustomContext = React.createContext([]);
function App() {
  const storage = localStorage.getItem("cart");

  const [isModal, setModal] = React.useState(false);

  const [cart, setCart] = React.useState<cartType[]>(
    storage ? JSON.parse(storage) : []
  );
  const [isData, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const addItemCart = (item: cartType) => {
    const indexItem = cart?.findIndex((itemOrder) => item.id === itemOrder.id);

    if (indexItem && indexItem < 0) {
      const newItem = { ...item, quantity: 1 };

      setCart([...cart, newItem]);
    } else {
      addQuantityItem(item);
    }
  };

  const addQuantityItem = (item: cartType) => {
    const indexItem = cart?.findIndex((itemOrder) => item.id === itemOrder.id);
    const sorted = cart?.map((itemOrder, index) => {
      if (index === indexItem && itemOrder.quantity) {
        const newItem = { ...itemOrder, quantity: itemOrder.quantity + 1 };
        return newItem;
      } else {
        return itemOrder;
      }
    });
    if (sorted) setCart(sorted);
  };

  const removeQuantityItem = (id: string, quantity: number) => {
    const sorted = cart.map((cartItem) => {
      if (cartItem.id === id) {
        const newProduct = {
          ...cartItem,
          quantity: quantity - 1 === 0 ? quantity : quantity - 1,
        };
        return newProduct;
      }
      return cartItem;
    });
    if (sorted) setCart(sorted);
  };

  const deleteItemCart = (id: string, quantity: number) => {
    if (quantity > 1) {
      removeQuantityItem(id, quantity);
    } else {
      const sorted = cart.filter((itemCart) => itemCart.id !== id);
      if (sorted) setCart(sorted);
    }
  };

  React.useEffect(() => {
    if (cart !== null) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  React.useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.shop) {
          setIsLoading(true);
          const sorted = data.shop.filter(
            (item: any) => item.mainType !== "sparks_song"
          );

          setData(sorted);
          // console.log(sorted);
        }
      });
  }, [isLoading]);

  const value = {
    data: isLoading ? isData : [],
    setModal,
    addItemCart,
    deleteItemCart,
    cart,
    addQuantityItem,
    removeQuantityItem,
  };

  return (
    <div>
      <CustomContext.Provider value={value}>
        <Header />
        <Main />
        {isModal && <ModalCart />}
      </CustomContext.Provider>
      <div className="w-screen  bg-footer"></div>

      <Footer />
    </div>
  );
}

export default App;
