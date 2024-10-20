// src/components/BasketballFixtures.js
import React, { useEffect, useState } from "react";
import { getBasketballFixtures } from "../services/apiService";

const BasketballResults = () => {
  const [fixtures, setFixtures] = useState([]); //initialize state

  useEffect(() => {
    async function fetchData() {
      const data = await getBasketballFixtures();
      if (data && data.response) {
        setFixtures(data.response); //update state with fetched data
      }
    }
    fetchData(); //fetch the data
  }, []); //only run when component is mounted

  if (!fixtures || fixtures.length === 0) {
    return <p>Loading results...</p>; //loading to let data come before attaching bootstrap components
  }

  return (
    <div className='container mt-5'>
      {/* //output with bootstrap UI  */}
      <h2 className='text-center mb-4'>Basketball Results</h2>
      <div className='row'>
        {fixtures.map((match) => (
          <div key={match.id} className='col-md-4'>
            <div className='card mb-4 shadow-sm'>
              <div className='card-body'>
                <h5 className='card-title text-center'>
                  {match.teams.home.name} {match.scores.home.points} -{" "}
                  {match.scores.visitors.points} {match.teams.visitors.name}
                </h5>
                <p className='card-text text-muted text-center'>
                  {match.arena.name}, {match.arena.city}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasketballResults;
