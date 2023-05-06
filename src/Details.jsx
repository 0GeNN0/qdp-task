import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function Details() {
  const { data } = useFetch();
  const params = useParams();

  // the plus operator to convert the string into number
  const movie = data.find(item => item.show.id === +params.id);

  if (!movie) {
    return <h1>Show Not Found 😥😥</h1>;
  }

  return (
    <div className="details">
      <h3>Title: {movie.show.name}</h3>
      <p><span>Summary</span>: {movie.show.summary.slice(3, movie.show.summary.length - 4)}</p>
    </div>
  );
}

export default Details;
