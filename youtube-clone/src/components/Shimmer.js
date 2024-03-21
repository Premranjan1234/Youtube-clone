import React from 'react'

const Shimmer=()=>{
    return (
      <div className=" flex flex-wrap">
            {Array(50)
              .fill("")
              .map((e, index) => (
                <div key={index} className="p-2 flex-col md:flex-row w-full md:w-80 h-[600px] md:h-[200px] m-3 bg-gray-400"></div>
               ))}
           </div>
    );
    
};
export default Shimmer;