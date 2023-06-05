import { Link } from "react-router-dom";
import "./Breweries.css";

function BreweriesIndex({ breweries }) {
  console.log(breweries);

  return (
    <main className="brewery-container">
      <h2>Breweries list</h2>
      <section className="brewery">
        {breweries.map(({ id, name, state, country }) => (
          <article className="brewery-card" key={id}>
            <Link to={`/${id}`}>
              <ul>
                <li>
                  <h3> {name} </h3>
                  <ul>
                    <li>
                      <p> {state} </p>
                    </li>
                    <li>
                      <p> {country} </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default BreweriesIndex;
