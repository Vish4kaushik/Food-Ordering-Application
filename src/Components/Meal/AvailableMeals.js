import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [sandwich, setSandwich] = useState([]);
  const [deserts, setDeserts] = useState([]);
  const [beverages, setBeverages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      let response = await fetch(
        "https://foodorder-f4d63-default-rtdb.firebaseio.com/sandwich.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      let responseData = await response.json();

      let sandwichData = [];
      for (const key in responseData) {
        sandwichData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setSandwich(sandwichData);
      response = await fetch(
        "https://foodorder-f4d63-default-rtdb.firebaseio.com/deserts.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      responseData = await response.json();

      let desertData = [];
      for (const key in responseData) {
        desertData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setDeserts(desertData);

      response = await fetch(
        "https://foodorder-f4d63-default-rtdb.firebaseio.com/beverages.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      responseData = await response.json();

      let beverageData = [];
      for (const key in responseData) {
        beverageData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setBeverages(beverageData);

      setLoading(false);
    };

    fetchMeals().catch((error) => {
      setLoading(false);
      setError(error.message);
    });
  }, []);

  if (loading) {
    return (
      <section className={styles.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.mealsError}>
        <p>{error}</p>
      </section>
    );
  }

  const sandwichList = sandwich.map((item) => (
    <MealItem
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  const desertList = deserts.map((item) => (
    <MealItem
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  const beverageList = beverages.map((item) => (
    <MealItem
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <h2>Sandwiches</h2>
        <ul>{sandwichList}</ul>
      </Card>
      <Card>
        <h2>Deserts</h2>
        <ul>{desertList}</ul>
      </Card>
      <Card>
        <h2>Beverages</h2>
        <ul>{beverageList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
