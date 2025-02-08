// 'use client'
// import { useCart } from 'react-use-cart';
// import Link from 'next/link';
// export default function CartPage() {
//   const { isEmpty, items, totalItems, totalUniqueItems, updateItemQuantity, removeItem, cartTotal } = useCart();
//   if (isEmpty) {
//     return <p>Your cart is empty.</p>;
//   }
//   return (
//     <div>
//       <h2>Your Cart</h2>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id} className="flex justify-between items-center">
//             <p>{item.name} x {item.quantity}</p>
//             <p>${item.price * item.quantity}</p>
//             <button onClick={() => removeItem(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <div className="flex justify-between">
//         <p>Total: ${cartTotal}</p>
//         <Link href="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Proceed to Checkout
//         </Link>
//       </div>
//     </div>
//   );
// }