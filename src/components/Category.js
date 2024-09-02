import React from "react";

export default function Category() {
  const myCategory = [
    {
      title: "Men",
      Url: "https://media.istockphoto.com/id/1241859806/photo/businessman-traveling-for-the-business-meeting.jpg?s=2048x2048&w=is&k=20&c=08cOkoEPt4KVtKEmRh_tqRKyMQi57m_-xGtRuD_WJW4=",
    },
    {
      title: "Women",
      Url: "https://media.istockphoto.com/id/155328866/photo/young-girl-in-welcome-expression.jpg?s=2048x2048&w=is&k=20&c=RAj5Y2b4gtJMPPsqWZhImrr1ip9Mw68CWdZ2eY7yIQI=",
    },
    {
      title: "Kids",
      Url: "https://media.istockphoto.com/id/1144341526/photo/adorable-little-boy-curly-haired-wearing-fashionable-raised-his-right-hand-forward-isolated.jpg?s=2048x2048&w=is&k=20&c=nEax7WZsllpYEfE8XszMUWxLWVEyqcDMWIyoecxxhtA=",
    },
  ];
  return (
    <div className="mt-8 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {myCategory.map((item, index) => (
          <div className="relative transform transition-transform duration-300 hover:scale-105 border rounded-md shadow-md items-center ">
           <img className="" style={{width:350, height:350}} src= {item.Url} alt="categories"/>
            <div className="absolute top-12 left-12">
                <h3 className="font-bold">{item.title}</h3>
                <p>View All</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
