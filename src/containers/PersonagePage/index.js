// React
import React, { useState, useEffect } from "react";

// Package

import Axios from "axios";
import Cookie from "js-cookie";

// File
import BackgroundImage from "../../components//img/background.jpg";

// Style
import "../PersonagePage/style.css";

const PersonagePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [descriptionPerso, setDescriptionPerso] = useState([]);
  const [urlStarships, setUrlStarships] = useState([]);
  const [starships, setStarships] = useState([]);

  // API Call
  useEffect(() => {
    const fetchData = async () => {
      const temporyTab = [];
      const secondTemporyTab = [];
      setIsLoading(true);
      try {
        const response = await Axios.get(Cookie.get("urlOfPersonage"));
        setUrlStarships(response.data.starships);
        setDescriptionPerso(response.data);
        temporyTab.push(response.data.starships);
        for (let i = 0; i < temporyTab[0].length; i++) {
          const responseTwo = await Axios.get(temporyTab[0][i]);
          secondTemporyTab.push(" " + responseTwo.data.name);
        }
        setStarships(secondTemporyTab);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  console.log(starships);
  if (starships.length === 0) {
    console.log("VIDEEEEEE");
  } else {
    console.log("PLEINNNNNNN");
  }

  return (
    <section>
      <div className="wrapper-home">
        <div
          className="background"
          style={{
            backgroundImage: `url(${BackgroundImage})`
          }}
        >
          {isLoading === true ? (
            <p className="loading"> Loading... </p>
          ) : (
            <div className="descriptionContain">
              <div className="title">
                <span> {descriptionPerso.name} </span>
              </div>
              <div className="descriptionList">
                <span> Eye Color : {descriptionPerso.eye_color} </span>
                <span> Birth Year : {descriptionPerso.birth_year} </span>
                <span> Gender : {descriptionPerso.gender} </span>
                {starships.length === 0 ? (
                  <span> Starships : No Starships </span>
                ) : (
                  <span> Starships : {starships + ""} </span>
                )}
                <span> Created : {descriptionPerso.created} </span>
                <span> Edited : {descriptionPerso.edited} </span>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div className="wrapper-home offers">
        {isLoading === true ? (
          <p>Loading...</p>
        ) : (
          <>
            {listOffers.map((element, index) => {
              const dateCreated = new Date(element.created);
              const date =
                dateCreated.toLocaleDateString() +
                " à " +
                dateCreated.toLocaleTimeString();
              return (
                <Link to={"/offer/" + element._id} key={index}>
                  <article className="box-shadow br-5 mb-20 overflow-hidden">
                    <div className="container-img">
                      {element.pictures.length > 0 ? (
                        <img src={element.pictures[0]} alt={element.title} />
                      ) : (
                        <img src={NoEyes} alt={element.title} />
                      )}
                    </div>
                    <div className="description p-15">
                      <div>
                        <h3>{element.title}</h3>
                        <span>{element.price + "€"}</span>
                      </div>
                      <span className="date">{date}</span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </>
        )}
      </div> */}
    </section>
  );
};

export default PersonagePage;
