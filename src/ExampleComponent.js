// import React, { useState } from 'react';

// const YourComponent = () => {
//   const [shopCard, setShopCard] = useState([]);

//   const handleCardClick = (clickedCard) => {
//     // Check if shopCard array is empty
//     if (shopCard.length === 0) {
//       setShopCard([{ ...clickedCard, Quantity: 1 }]);
//     } else {
//       // Check if the clicked card's id is already in the shopCard array
//       const existingCardIndex = shopCard.findIndex(card => card.id === clickedCard.id);

//       if (existingCardIndex !== -1) {
//         // If the card is already in the shopCard, update the Quantity
//         const updatedShopCard = [...shopCard];
//         updatedShopCard[existingCardIndex].Quantity += 1;
//         setShopCard(updatedShopCard);
//       } else {
//         // If the card is not in the shopCard, add it with Quantity 1
//         setShopCard([...shopCard, { ...clickedCard, Quantity: 1 }]);
//       }
//     }
//   };

//   return (
//     <div>
//       {/* Render your cards and handle clicks */}
//       {yourCards.map(card => (
//         <div key={card.id} onClick={() => handleCardClick(card)}>
//           {/* Render your card details here */}
//           {card.img}, {card.id}, {card.price}, {card.drinkName}
//         </div>
//       ))}

//       {/* Display the items in the shop card */}
//       <h2>Shop Card</h2>
//       <ul>
//         {shopCard.map(item => (
//           <li key={item.id}>
//             {`ID: ${item.id}, Name: ${item.drinkName}, Price: ${item.price}, Quantity: ${item.Quantity}`}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default YourComponent;
