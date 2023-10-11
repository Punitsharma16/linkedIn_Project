import './home.css'
import React, { useState } from 'react';
import upSvg from "../Assets/showMore.svg"

export const LinkedinNews = ()=>{
  const initialItems = [
    "India's Top Startups of 2023",
    "Top news • 10,499 readers",
    "India Inc's legal expenses jump",
    "1d ago • 2,477 readers",
    "Quantum dots discovery wins Nobel",
    "1h ago • 45,655 readers",
   "CEO salaries in sharp focus",
   "1d ago • 1,069 readers",
   "Luxury housing on solid ground",
   "4h ago",
   "Univo to hire 1,000",
   "3h ago • 3,625 readers",
   "Getting hired at a top startup",
   "3h ago",
   "World Cup fever grips businesses",
   "3h ago",
   "New players enter app cab space",
   "1d ago • 372 readers",
   "Hospitality eyes freshers",
   "1d ago • 108 readers",
  ];

  const [items, setItems] = useState(initialItems);
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

//   const getItemStyle = (index) => {
//     if (showMore) {
//       return { fontSize: '1rem' }; // Default font size when showing all items
//     } else {
//       return { className: index%2 ===0 ? 'news-Odd' : 'news-Even' };
//     }
//   };

  return (
    <div className='news-container'>
        <p style={{fontWeight:"530"}}>LinkedIn News</p>
      <ul>
        {showMore ? items.map((item, index) => (
            <section key={index}>
          <li key={index} className={index%2===0?'news-Even':'news-Odd'}>{item}</li>
          {
                (!showMore && (index) % 2 === 0 && index !== items.length - 1) && <br/>
          }
          </section>
        )) : items.slice(0, 10).map((item, index) => (
            <section key={index}>
                <li key={index} className={index%2===0?'news-Even':'news-Odd'}>{item}</li>
            </section>
          
        ))}
      </ul>
      <button className="news-btn" onClick={handleToggle}>
        {showMore ? `Show Less` : "Show More"}
      </button>
    </div>
  );
}
