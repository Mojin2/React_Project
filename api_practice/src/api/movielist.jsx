import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./movie";
import { dummy2 } from "../data/dummy2";

const url =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=a6b27739090baab4876f21c971f0ceaa&language=ko&page=1&region=KR";

function MovieList(props) {
  const [dummy, setDummy] = useState({});

  const searchDummy = async () => {
    try {
      const response = await axios({
        method: "get",
        url: url,
      });
      console.log(response.data.results);
      console.log(response);
      setDummy(response.data);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <div className="appContentWrap">
        <button onClick={searchDummy}>데이터 가져오기</button>
      </div>
      <div>
        {Object.keys(dummy).length !== 0 && (
          <div className="app-container">
            {dummy.results.map((item) => {
              return (
                <Movie
                  title={item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                />
              );
            })}
          </div>
        )}

        {/* <div className="app-container">
          {dummy2.results.map((item) => {
            return (
              <Movie
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            );
          })}
        </div> */}
      </div>
    </div>
  );
}

export default MovieList;
