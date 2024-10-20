// src/components/FootballFixtures.js
import React, { useEffect, useState } from "react";
import { getFootballFixtures } from "../services/apiService";

const FootballResults = () => {
  const [fixtures, setFixtures] = useState([]); //initialize state

  useEffect(() => {
    async function fetchData() {
      const data = await getFootballFixtures();
      if (data && data.response) {
        setFixtures(data.response); //update state with the fetched data
      }
    }
    fetchData(); //fetch the data
  }, []); //only run when component is mounted

  if (!fixtures || fixtures.length === 0) {
    return <p>Loading results...</p>; //loading to let data come before attaching bootstrap components
  }

  return (
    <div className='container mt-5'>
      {" "}
      {/* //output with bootstrap UI  */}
      <h2>Football Results</h2>
      <div className='row'>
        {fixtures.map((match) => (
          <div key={match.fixture?.id} className='col-md-4'>
            <div className='card mb-4 shadow-sm'>
              <div className='card-body'>
                <h5 className='card-title text-center'>
                  {match.teams?.home?.name || "Unknown"} {match.goals?.home ?? "-"} -{" "}
                  {match.goals?.away ?? "-"} {match.teams?.away?.name || "Unknown"}
                </h5>
                <p className='card-text text-center'>
                  {match.fixture?.date?.split("T")[0] || "Date Unknown"} |{" "}
                  {match.venue?.name || "Venue Unknown"}, {match.venue?.city || "City Unknown"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FootballResults;
