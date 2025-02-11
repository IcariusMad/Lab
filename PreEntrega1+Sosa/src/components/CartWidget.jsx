import { ShoppingCart } from "lucide-react";

const CartWidget = () => {
  return (
    <div className="relative text-white">
      <ShoppingCart size={28} />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
        cantidad de articulos comprados
      </span>
    </div>
  );
};

export default CartWidget;
