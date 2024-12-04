import React from "react";

const TabItem = ({ tabDetails, isActive, onClick }) => {
  const { tabId, displayText } = tabDetails;
  const activeClass = isActive ? "bg-blue-500 text-white" : "bg-gray-300";

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg ${activeClass} focus:outline-none`}
    >
      {displayText}
    </button>
  );
};

export default TabItem;



Match-Game
import Todos from './components/Todos'
import './App.css';
import React,{ useState } from 'react';


const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]
const imagesList = [
  {
    id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '04ac6b9f-b7e7-45f7-a8fc-fd48f3f72526',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/panda-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/panda-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'a132f546-5b2b-4c0d-b9e4-e524bdf904cc',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/zebra-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/zebra-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'd89386da-94db-4275-9cb5-249c6e071a19',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/paris-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/paris-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: 'd810bbb0-1683-407a-8db6-898fe7b75782',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/giraffe-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/giraffe-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '176aab62-e86a-4ccd-8b89-5b83c3f02506',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: '0e8daf1b-45b0-4eb0-9dde-383fede78a9b',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/monkey-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/monkey-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '1a38bf4a-659d-4470-956c-56c1bedd26ac',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cheetah-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cheetah-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '8f2ebd70-4fdd-47a0-b4f9-a6c654b519ab',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/ooti-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/ooti-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: '7a72c38e-a83d-48eb-b9ce-ae3c0361cc49',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '97a33ed5-98ed-4c95-a8f0-1595880b3b69',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '07e20159-a950-4c22-9ca8-5ed71563ae24',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/maldives-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/maldives-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: '43883239-8a28-47dc-9e93-43ef31654c17',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/emerald-lake-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/emerald-thumbnail-lake-img.png',
    category: 'PLACE',
  },
  {
    id: '49865ac4-b5e8-4d04-893b-d69ad6004da8',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '649ab251-7fd6-4d65-aa0f-39020ce25932',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/elephant-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/elephant-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '1d0d1c41-e05e-4820-8614-34ee5ada20e0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/jammu-hills-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/jammu-thumbnail-hills-img.png',
    category: 'PLACE',
  },
  {
    id: '88b4ab36-a0c1-4c56-9ce5-3b80dd8c7669',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/fierce-coyote-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/fierce-thumbnail-coyote-img.png',
    category: 'ANIMAL',
  },
  {
    id: '8a841bf8-3222-44da-b0fb-4c60190402d7',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lidder-valley-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lidder-thumbnail-valley-img.png',
    category: 'PLACE',
  },
  {
    id: 'd406e63c-eaaf-49ea-88a6-ed6a1572eb97',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/kivi-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/kivi-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: 'e997ebf9-9a47-4b7e-9035-01ae372d73dc',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/dragon-fruit-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/dragon-thumbnail-fruit-img.png',
    category: 'FRUIT',
  },
  {
    id: 'c7fbe10e-3282-4fca-815b-91b75d5228cb',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/goa-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/goa-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: '4210274c-7304-44d6-8690-c5251252cd10',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/papaya-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/papaya-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '057b6193-a80d-4036-9e6e-fe847c99fbb6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/mixed-fruits-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/mixed-thumbnail-fruits-img.png',
    category: 'FRUIT',
  },
  {
    id: '4e56c59b-835b-4802-87fe-77aaaa5b9526',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/fox-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/fox-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'ad75a7b1-0875-4700-977b-2c45924509aa',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lotus-temple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lotus-thumbnail-temple-img.png',
    category: 'PLACE',
  },
  {
    id: '525aba17-ed5c-4f09-ad1c-b6bff222c97a',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/dog-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/dog-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'c6c66b00-c130-47d2-9d3a-1c3378d08aba',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/apple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/apple-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '6078b408-4f10-46d3-8815-db14403dbd73',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/bhadrinath-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/bhadrinath-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: 'a2baca84-3beb-49d1-bced-f9a88c161bec',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/camel-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/camel-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '1edac278-8390-4da9-b914-5f41fb49283c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cherry-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cherry-thumbnail-img.png',
    category: 'FRUIT',
  },
]


function App() {
  return(
    <div>
      <Todos tabsList={tabsList} imagesList={imagesList}/>
    </div>
  )
}

export default App;

import React, { useState, useEffect } from 'react';
import Item from './Item';
import Images from './Images';
import Navbar from './Navbar';
import ResultCard from './ResultCard';

export default function Todos({ tabsList, imagesList }) {
  const [timer, setTimer] = useState(59);
  const [selectedTab, setSelectedTab] = useState(tabsList[0].tabId);
  const [firstImg, setFirstImg] = useState(imagesList[0].imageUrl);
  const [firstId, setFirstId] = useState(imagesList[0].id);
  const [count, setCount] = useState(0);
  const [change, setChange] = useState(true);
  const [state, setState] = useState(true);

  let timerId;
  useEffect(() => {
    if (state && timer > 0) {
      timerId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setChange(false);
      setState(false);
    }

    return () => clearInterval(timerId);
  }, [state, timer]);

  // Function to change the tab and filter images based on tabId
  function changeTab(tabId) {
    setSelectedTab(tabId); // Set the selected tab
  }

  // Function to handle the change of the displayed image
  function handleImageChange(id) {
    if (id === firstId && timer !== 0) {
      setCount((prevCount) => prevCount + 1);
      setState(!state);
      const selectedImage = Math.ceil(Math.random() * imagesList.length);
      console.log(selectedImage);

      if (selectedImage >= 0) {
        setFirstImg(imagesList[selectedImage].imageUrl);
        setFirstId(imagesList[selectedImage].id);
      }
    } else {
      setChange(!change);
    }
  }

  // Function to reset the game when "Play Again" button is clicked
  function restartGame() {
    setTimer(19);
    setCount(0);
    setFirstImg(imagesList[0].imageUrl);
    setFirstId(imagesList[0].id);
    setChange(true);
    setState(true);
  }

  // Filter images based on the selected tabId
  const filteredImages = imagesList.filter((item) => item.category === selectedTab);

  return (
    <div className="flex flex-col items-center bg-gray-200">
      <Navbar count={count} timer={timer} />
      {change && (
        <>
          <img src={firstImg} alt="Selected" className="h-1/4 w-1/4 mb-4 md:h-1/3 md:w-1/3 lg:h-1/4 lg:w-1/4" />

          <ul className="flex flex-wrap justify-center items-center border-b-3 border-red-500 mb-4">
            {tabsList.map((tab) => (
              <Item
                key={tab.tabId}
                data={tab}
                tabId={tab.tabId}
                changeTab={changeTab}
                isActive={selectedTab === tab.tabId} // Pass active state
              />
            ))}
          </ul>

          {/* Render imagesList items based on the selected tab */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredImages.map((allImg) => (
              <Images
                key={allImg.id}
                imgData={allImg}
                id={allImg.id}
                imageChange={() => handleImageChange(allImg.id)}
              />
            ))}
          </ul>
        </>
      )}

      {/* Display result card when game ends */}
      {!change && <ResultCard count={count} onRetry={restartGame} />}
    </div>
  );
}

import React from 'react';

const ResultCard = ({ count, onRetry }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white flex flex-col justify-center items-center h-full mb-20 p-5">
      {/* Image */}
      <img className="w-full h-48 object-cover" src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png" alt="img" />

      <h3 className="text-xl font-semibold text-gray-800">Score</h3>
      <p className="text-gray-600 mt-2">{count}</p>

      <button
        onClick={onRetry} // When the button is clicked, it triggers the restartGame function
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Play Again
      </button>
    </div>
  );
};

export default ResultCard;

import React from 'react';

export default function Navbar({ count, timer }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-l from-blue-400 via-purple-500 to-pink-500 w-full p-3 mb-10">
      <img src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png" alt="img" className="h-10 w-25" />
      <div className="flex flex-col sm:flex-row sm:space-x-5 pr-5 mt-3 sm:mt-0">
        <div className="flex flex-row space-x-2">
          <h1 className="text-white text-xl">Score:</h1>
          <h1 className="text-yellow-300 text-xl">{count}</h1>
        </div>
        <div className="flex flex-row space-x-2">
          <img src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png" alt="img" className="h-7 w-7" />
          <h1 className="text-yellow-300 text-xl">{timer} Sec</h1>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function Item({ data, tabId, changeTab, isActive }) {
  const tabClick = () => {
    changeTab(tabId); // Change the tab when clicked
  };

  return (
    <div className="mb-2 sm:mb-0">
      <button
        className={`p-4 ${isActive ? 'text-blue-700 border-b-2 border-blue-500' : 'text-green-700'}`} // Apply active class
        onClick={tabClick}
      >
        {data.displayText}
      </button>
    </div>
  );
}

import React from 'react';

export default function Images({ imgData, id, imageChange }) {
  return (
    <div className="p-4">
      <button onClick={() => imageChange(id)} type="button">
        <img
          className="h-20 w-20 rounded-sm shadow-lg sm:h-24 sm:w-24 md:h-28 md:w-28"
          src={imgData.thumbnailUrl}
          alt={imgData.thumbnailUrl}
        />
      </button>
    </div>
  );
}
