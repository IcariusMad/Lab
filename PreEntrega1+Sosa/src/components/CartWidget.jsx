import { ShoppingCart } from "lucide-react";

const CartWidget = () => {
  return (
    <div className="relative text-white">
      <ShoppingCart size={24} />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
        3
      </span>
    </div>
  );
};

export default CartWidget;
