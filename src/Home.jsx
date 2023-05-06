import { Link } from "react-router-dom";
import useFetch from "./useFetch";

function Home() {
  const { data, isLoading, error } = useFetch();

  if (error) {
    return <h1>Something went wrong please check the console</h1>;
  }

  return isLoading ?
    <h1 className="loading">
      Loading...
    </h1>
    :
    <div className="cards">
      {
        data.map(item => {
          return (
            <div className="card" key={item.show.id}>
              <h3>Title: {item.show.name}</h3>
              <p><span>Language</span>: {item.show.language}</p>
              <small><span>Rating</span>: {item.show.rating.average || 'Not Rated'}</small>
              <hr />
              <Link to={`/shows/${item.show.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          );
        })
      }
    </div>;
}

export default Home;
