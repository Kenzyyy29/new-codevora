"use client"

// components/SearchBox.jsx
import {useState} from "react";

const items = [
 {name: "Apple", description: "A sweet red fruit."},
 {name: "Banana", description: "A long yellow fruit."},
 {name: "Cherry", description: "A small red fruit."},
 {name: "Date", description: "A sweet brown fruit."},
 {name: "Elderberry", description: "A small dark purple fruit."},
 {name: "Fig", description: "A sweet fruit with a unique texture."},
 {name: "Grape", description: "A small round fruit, can be red or green."},
];

const SearchBox = () => {
 const [searchTerm, setSearchTerm] = useState("");
 const [visibleItem, setVisibleItem] = useState(null);

 const filteredItems = items.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
 );

 const handleItemClick = (item) => {
  // Toggle visibility of the selected item
  if (visibleItem && visibleItem.name === item.name) {
   setVisibleItem(null); // Hide if already visible
  } else {
   setVisibleItem(item); // Show the clicked item
  }
 };

 return (
  <section className="min-h-screen">
   <div className="p-4">
    <input
     type="text"
     placeholder="Search..."
     className="border p-2 rounded w-full"
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)}
    />
    <div className="mt-4">
     {filteredItems.length > 0 ? (
      filteredItems.map((item, index) => (
       <div key={index}>
        <div
         className="p-2 border-b cursor-pointer hover:bg-gray-200"
         onClick={() => handleItemClick(item)}>
         {item.name}
        </div>
        {visibleItem && visibleItem.name === item.name && (
         <div className="mt-2 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-bold">{visibleItem.name}</h2>
          <p>{visibleItem.description}</p>
         </div>
        )}
       </div>
      ))
     ) : (
      <div className="p-2">No items found</div>
     )}
    </div>
   </div>
  </section>
 );
};

export default SearchBox;
