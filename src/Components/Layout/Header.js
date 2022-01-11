import React from "react";
import styles from "./Header.module.css";
import mealsImage from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Crust & Crispy</h1>
        <HeaderCartButton onClickCart={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Meal Image" />
      </div>
    </>
  );
};

export default Header;
