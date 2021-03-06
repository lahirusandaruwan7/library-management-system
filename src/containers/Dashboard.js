import React, { useEffect, useState } from "react";

import Tabs from "../components/Tabs";
import Spinner from "../components/Spinner";

import { getBooks } from "../api/bookAPI";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getBooks()
      .then((response) => {
        if (!response.error) {
          console.log(response.date);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const contents = [
    { title: "Books", elements: <h1>Content of books go here</h1> },
    { title: "Members", elements: <h1>Content of members go here</h1> },
  ];

  return isLoading ? <Spinner /> : <Tabs contents={contents} />;
};

export default Dashboard;
