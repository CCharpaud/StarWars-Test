// React
import React, { useState, useEffect } from "react";

// Package
import Cookie from "js-cookie";
import { Link } from "react-router-dom";
import Axios from "axios";

// File
import BackgroundImage from "../../components//img/background.jpg";

// Style
import "../Home/style.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [perso, setPerso] = useState([]);
  const [handleText, setHandleText] = useState("");

  // API Call
  useEffect(() => {
    let tab = [];
    const fetchData = async () => {
      setIsLoading(true);
      try {
        for (let i = 1; i <= 9; i++) {
          const element = i;
          let intialApiWithPages =
            "https://swapi.dev/api/people/?page=" + element;
          const response = await Axios.get(intialApiWithPages);
          tab.push(response.data.results);
        }
        // Concat Tab
        const newTab = tab[0].concat(
          tab[1],
          tab[2],
          tab[3],
          tab[4],
          tab[5],
          tab[6],
          tab[7],
          tab[8]
        );
        setPerso(newTab);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  let filtered = perso.filter(nameOfPerso => {
    return (
      nameOfPerso.name.toLowerCase().indexOf(handleText.toLowerCase()) !== -1
    );
  });

  console.log(filtered);

  return (
    <section>
      <div className="wrapper-home">
        <div
          className="background"
          style={{
            backgroundImage: `url(${BackgroundImage})`
          }}
        >
          <div className="search-box">
            <input
              placeholder="Trouve ta force"
              value={handleText}
              type="text"
              name="search"
              onChange={event => {
                setHandleText(event.target.value);
              }}
            />
          </div>
          {isLoading === true ? (
            <p className="loading"> Loading... </p>
          ) : (
            <div className="listOfPerso">
              {filtered.map((element, index) => {
                const name = element.name;
                const url = element.url;
                return (
                  <Link
                    to={"/people/:" + name}
                    key={index}
                    className="listName"
                    onClick={() => {
                      Cookie.set("urlOfPersonage", url);
                    }}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
