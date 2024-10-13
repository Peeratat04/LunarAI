import { useState } from 'react';
import './App.css';
import { ChatbotList } from './DateList';


export function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < ChatbotList.length - 1;
  
    function handleNextClick() {
      if (hasNext) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }
  
    function handleMoreClick() {
      setShowMore(!showMore);
    }
  
    let chatbot = ChatbotList[index];
  
    return (
      <div className="containerTop">
        <div className="cartTop">
          <h4>Research</h4>
          <div className='p-reserch'>
            <p> We believe our research will eventually lead to artificial general intelligence, 
                a system that can solve human-level problems. Building safe and beneficial
                 AGI is our mission.
            </p>
         </div>
          <div className='bg-dataList'>
            <div className='cont-dataList'>
              <div className='data-cart'>
                <h1>{chatbot.name}</h1>
              {showMore && <h6 dangerouslySetInnerHTML={{ __html: chatbot.description }} />}
            <div className='bg-img-re'>  {/*รูปภาพประกอบงานวิจัย*/}
              <img src={chatbot.img} alt="" className='object-fill ' />
               </div>
            <div className='pa-main'>
                <p className='pa-1'>{chatbot.description}</p>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Gallery;