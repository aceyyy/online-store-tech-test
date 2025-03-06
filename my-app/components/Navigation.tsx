import { ShoppingCart, Zap } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center w-full p-6 border-b border-gray-300">
      {/* logo */}
      <div>
        <Zap size={30} fill="#4f46e5" strokeWidth={0.5} />
      </div>

      {/* cart */}
      <div className="flex items-center">
        <ShoppingCart size={25} color="gray" />
        <span className="text-lg text-gray-500 ml-2">x4</span>
      </div>
    </nav>
  )
};