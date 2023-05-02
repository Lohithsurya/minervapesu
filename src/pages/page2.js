import users from "/data";
import Image from "next/image";
import newspaper from '../Images/newspaper.jpg'
import { useState } from "react";

export default function MyPage() {
            
  const [selectedCard, setSelectedCard] = useState(null);
  
  const handleClick = (index) => {
    setSelectedCard(index);
  }
  
  
    return (
    <div className=" grid grid-cols-3 gap-8  bg-amber-200"> 
      {users && users.map(({ title,author,description,article })=>(
        <div className="relative shadow-md" >
        <div className=" ml-6 mb-9 pb-48 pt-2 max-h-9 row-span-2 " onClick={() => handleClick(title)}>
          <Image src={newspaper} fill className=" flex-auto opacity-70 rounded-xl "/> 
          <div className="relative ">
            <h1 className=" mb-2 text-xl font-extrabold leading-tight font-serif text-black top-0 left-0 right-0 " >{title}</h1>
            <h2 className="font-medium">{author}</h2>
            <p className="font-medium">Description: {description}</p>
          </div>
        </div>
        {selectedCard === title && (
            <div className="absolute top-0 left-0 h-full w-full z-10 bg-white overflow-y-auto p-8">
              <h1 className="mb-4 text-2xl font-extrabold leading-tight font-serif text-black">{title}</h1>
              <h2 className="font-medium mb-2">{author}</h2>
              <p className="font-medium mb-4">Description: {description}</p>
              <div dangerouslySetInnerHTML={{ __html: article }} />
              <button className="bg-gray-500 text-white px-4 py-2 rounded-md mt-4" onClick={() => setSelectedCard(null)}>Close</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
