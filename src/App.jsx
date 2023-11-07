import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(null);
  const [filtered, setFiltered] = useState("all");


  const handleSearch = (e) => {

    const searchedResult = e.target.value;

    searchedResult === "" ? setSearch(null) : null

    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchedResult.toLowerCase()))

    setSearch(filter)
  }

  const handleFilter = (type) => {

    if(type === "all") {
      setSearch(data)
      setFiltered("all")
      return;
    }

    const filter = data?.filter((food) =>
      food.type.includes(type)
    );

    setSearch(filter)
    setFiltered(type)
  }

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const result = await response.json();
        setData(result);
        setSearch(result);
        setLoading(false);
      } catch (error) {
        setError("Something went wrong");
      }
    };
    getData();
  },[]);

  const temp = {
    name: "Boilded Egg",
    price: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/egg.png",
    type: "breakfast",
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col bg-[#5A5959] min-h-[100vh]">
      <Header handleFilter={handleFilter} search={handleSearch} />
      <Hero info={search} />
    </div>
  );
};

export default App;
