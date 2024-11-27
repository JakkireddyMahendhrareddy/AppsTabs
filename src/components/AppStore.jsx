import React, { useState } from "react";
import TabItem from "./TabItem";
import AppItem from "./AppItem";

const tabsList = [
  { tabId: "SOCIAL", displayText: "Social" },
  { tabId: "GAMES", displayText: "Games" },
  { tabId: "NEWS", displayText: "News" },
  { tabId: "FOOD", displayText: "Food" },
];

const appsList = [
  {
    appId: 0,
    appName: "Facebook",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png",
    category: "SOCIAL",
  },
  {
    appId: 1,
    appName: "Messenger",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png",
    category: "SOCIAL",
  },
  {
    appId: 2,
    appName: "WhatsApp",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png",
    category: "SOCIAL",
  },
  {
    appId: 3,
    appName: "Instagram",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png",
    category: "SOCIAL",
  },
  {
    appId: 4,
    appName: "Snapchat",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png",
    category: "SOCIAL",
  },
  {
    appId: 5,
    appName: "Twitter",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png",
    category: "SOCIAL",
  },
  {
    appId: 6,
    appName: "Pinterest",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-pinterest.png",
    category: "SOCIAL",
  },
  {
    appId: 7,
    appName: "WeChat",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png",
    category: "SOCIAL",
  },
  {
    appId: 8,
    appName: "LinkedIn",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png",
    category: "SOCIAL",
  },
  {
    appId: 9,
    appName: "Telegram",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png",
    category: "SOCIAL",
  },
  {
    appId: 10,
    appName: "Subway Surfers",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png",
    category: "GAMES",
  },
  {
    appId: 11,
    appName: "Crossy Road",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png",
    category: "GAMES",
  },
  {
    appId: 12,
    appName: "Super Chef",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png",
    category: "GAMES",
  },
  {
    appId: 13,
    appName: "Angry Birds",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png",
    category: "GAMES",
  },
  {
    appId: 14,
    appName: "Hill Climb 2",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png",
    category: "GAMES",
  },
  {
    appId: 15,
    appName: "Temple Run",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png",
    category: "GAMES",
  },
  {
    appId: 16,
    appName: "Dr. Driving",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-dr-driving.png",
    category: "GAMES",
  },
  {
    appId: 17,
    appName: "Smurfs Bubble",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-smurfs-bubble.png",
    category: "GAMES",
  },
  {
    appId: 18,
    appName: "Grade Learning",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-grade-learning.png",
    category: "GAMES",
  },
  {
    appId: 19,
    appName: "My Talking Tom",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-my-talking-tom.png",
    category: "GAMES",
  },
  {
    appId: 20,
    appName: "Inshorts",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png",
    category: "NEWS",
  },
  {
    appId: 21,
    appName: "Way2News",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png",
    category: "NEWS",
  },
  {
    appId: 22,
    appName: "Google News",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png",
    category: "NEWS",
  },
  {
    appId: 23,
    appName: "Flipboard",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png",
    category: "NEWS",
  },
  {
    appId: 24,
    appName: "SmartNews",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png",
    category: "NEWS",
  },
  {
    appId: 25,
    appName: "BBC News",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png",
    category: "NEWS",
  },
  {
    appId: 26,
    appName: "CNN News",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png",
    category: "NEWS",
  },
  {
    appId: 27,
    appName: "Daily Wire",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png",
    category: "NEWS",
  },
  {
    appId: 28,
    appName: "AP News",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png",
    category: "NEWS",
  },
  {
    appId: 29,
    appName: "News Break",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png",
    category: "NEWS",
  },
  {
    appId: 30,
    appName: "Zomato",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png",
    category: "FOOD",
  },
  {
    appId: 31,
    appName: "Swiggy",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png",
    category: "FOOD",
  },
  {
    appId: 32,
    appName: "Domino's Pizza",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png",
    category: "FOOD",
  },
  {
    appId: 33,
    appName: "All in One",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png",
    category: "FOOD",
  },
  {
    appId: 34,
    appName: "Instacart",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png",
    category: "FOOD",
  },
  {
    appId: 35,
    appName: "Saucey",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png",
    category: "FOOD",
  },
  {
    appId: 36,
    appName: "Waitr",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png",
    category: "FOOD",
  },
  {
    appId: 37,
    appName: "Grubhub",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png",
    category: "FOOD",
  },
  {
    appId: 38,
    appName: "Mercato",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png",
    category: "FOOD",
  },
  {
    appId: 39,
    appName: "DOT",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png",
    category: "FOOD",
  },
];

const AppStore = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(tabsList[0].tabId);

  // Filter apps based on activeTab and search
  const filteredApps = appsList.filter(
    (app) =>
      app.category === activeTab &&
      app.appName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-300 pt-5 pb-5">
      <h1 className="text-2xl font-bold text-red mb-4">App Store</h1>
      <input
        type="text"
        value={search}
        className="px-5 py-3 border border-gray-300 rounded-lg mb-4 shadow-md w-full sm:w-1/2"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Apps"
      />
      <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
        {tabsList.map((tabItem) => (
          <TabItem
            key={tabItem.tabId}
            tabDetails={tabItem}
            isActive={activeTab === tabItem.tabId}
            onClick={() => setActiveTab(tabItem.tabId)}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 w-full sm:grid-cols-3 lg:grid-cols-4 max-w-screen-lg">
        {filteredApps.map((appItem) => (
          <AppItem key={appItem.appId} appDetails={appItem} />
        ))}
      </div>
    </div>
  );
};

export default AppStore;
