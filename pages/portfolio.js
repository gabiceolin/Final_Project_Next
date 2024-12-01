import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Image from 'next/image';
import portfolioImage from '../public/portfolio-image.gif';
import axios from 'axios';
import Footer from '../components/footer';

export default function Portfolio() {
  const [food, setFood] = useState('Apple and fries');
  const [goldPrice, setGoldPrice] = useState(null);
  const [nutritionData, setNutritionData] = useState(null);
  const [jokeData, setJokeData] = useState('');

  function fetchNutrition(foodItem) {
    axios
      .get(`https://api.api-ninjas.com/v1/nutrition?query=${foodItem}`, {
        headers: { 'X-Api-Key': 'gedSGCyXN9MOuomkvTwDog==XrV0xeJpZPIuy6ni' },
      })
      .then((response) => {
        setNutritionData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching nutrition data', error);
      });
  }

  const handleNutrition = () => {
    fetchNutrition(food);
  };

  useEffect(() => {
    axios
      .get('https://api.api-ninjas.com/v1/goldprice', {
        headers: { 'X-Api-Key': 'gedSGCyXN9MOuomkvTwDog==XrV0xeJpZPIuy6ni' },
      })
      .then((response) => {
        setGoldPrice(response.data);
      })
      .catch((error) => {
        console.error('Error fetching gold price data', error);
      });

    axios
      .get('https://api.api-ninjas.com/v1/jokes', {
        headers: { 'X-Api-Key': 'gedSGCyXN9MOuomkvTwDog==XrV0xeJpZPIuy6ni' },
      })
      .then((response) => {
        setJokeData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching joke data', error);
      });

    fetchNutrition(food);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>Welcome to my Portfolio</h1>
        <div className='d-flex justify-content-center'>
        <Image src={portfolioImage} alt="Portfolio Image" width={600}  height={400} className="img-fluid"
        />
        </div>
        <p className="text-center">Here you will be able to see 3 different APIs</p>
      

        <h2>Gold Price API</h2>
        {goldPrice ? (
          <div className="alert alert-info">
            <p>Gold Price (per ounce): ${goldPrice.price}</p>
          </div>
        ) : (
          <p>Loading gold price...</p>
        )}

        <h2>Nutrition API</h2>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <input
            type="text"
            placeholder="Type the food"
            value={food}
            onChange={(e) => setFood(e.target.value)}
            className="form-control w-50"
          />
          <button
            type="button"
            onClick={handleNutrition}
            className="btn btn-primary ms-3"
          >
            Find
          </button>
        </div>
        {nutritionData ? (
          nutritionData.map((item) => (
            <div className="card my-3" key={item.name}>
              <div className="card-body">
                <h4>{item.name}</h4>
                <p>Sugar: {item?.sugar_g} g</p>
                <p>Carbohydrates: {item?.carbohydrates_total_g} g</p>
                <p>Potassium: {item?.potassium_mg} g</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading nutrition data...</p>
        )}

        <h2>Jokes</h2>
        {jokeData ? (
          <div className="alert alert-success mt-2">
            <h4>{jokeData[0].joke}</h4>
          </div>
        ) : (
          <p>Loading joke...</p>
        )}
      </div>

      <Footer /> {/* Add the Footer component */}
    </div>
  );
}
