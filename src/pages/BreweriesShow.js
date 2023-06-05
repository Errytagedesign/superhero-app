import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Breweries.css";

function BreweriesShow({ breweries }) {
  const [breweryDetails, setBreweryDetails] = useState({});

  // console.log(typeof breweries[0].id);

  // Use th useParams to get the id of the clicked breweries from breweriesindex on your browser address bar. After clicking, you will the id of the clicked breweries on the address bar on your browseer
  const slug = useParams();
  // console.log(slug);

  // We need to use useEffect here so that the components only re-render when the state changes base on the dependences which are brewweries arry and the url clicked
  useEffect(() => {
    // Use forEach to loop through the array of breweries and display the data the id === slug.brewId
    breweries.forEach((brew) => {
      if (brew.id === slug.brewId) {
        // console.log(brew);

        // Set the breweryDetails state to brew, this will return every data associated with the clicked brewery
        setBreweryDetails(brew);
      }
    });
  }, [breweries, slug.brewId]);

  console.log(breweryDetails);

  return (
    <main>
      <h2>Show page per Breweries </h2>
      <section className="brewery-details-container">
        <article>
          <div className="brewery-details">
            <small> Name :</small>
            <h3> {breweryDetails.name} </h3>
          </div>
          <div className="brewery-details">
            <small> Phone :</small>
            <h3> {breweryDetails.phone} </h3>
          </div>
          <div className="brewery-details">
            <small> Brewery Type :</small>
            <h3> {breweryDetails.brewery_type} </h3>
          </div>
          <div className="brewery-details">
            <small> Address :</small>
            <h3> {breweryDetails.street} </h3>
          </div>
          <div className="brewery-details">
            <small> Postal code :</small>
            <h3> {breweryDetails.postal_code} </h3>
          </div>
          <div className="brewery-details">
            <small> City :</small>
            <h3> {breweryDetails.city} </h3>
          </div>
          <div className="brewery-details">
            <small> State :</small>
            <h3> {breweryDetails.state} </h3>
          </div>
          <div className="brewery-details">
            <small> State province :</small>
            <h3> {breweryDetails.state_province} </h3>
          </div>
          <div className="brewery-details">
            <small> Country:</small>
            <h3> {breweryDetails.country} </h3>
          </div>
          <div className="brewery-details">
            <small> Website:</small>
            <a href={breweryDetails.website_url}>
              {" "}
              {breweryDetails.website_url}{" "}
            </a>
          </div>
          <div className="brewery-details">
            <small> Latitude:</small>
            <h3> {breweryDetails.latitude} </h3>
          </div>
          <div className="brewery-details">
            <small> Longitude:</small>
            <h3> {breweryDetails.longitude} </h3>
          </div>
        </article>
      </section>
    </main>
  );
}

export default BreweriesShow;
