import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from '../../../../TitleChanger/TitleChanger';

const WalletTransaction = () => {
  return (
    <>
      <TitleChanger title="Products Order" />
      <Breadcrumb pageTitle="Products Order" />
      <div className="wallet_transaction products_order">
        <div className="head">
          <h2>Filter By Product Category</h2>
        </div>
        <div style={{ display: "flex",alignItems: 'center' }}>
          <div className="filter_status ">
            <h2>Category</h2>
            <select name="Category" id="Category">
              <option value="All">All</option>
              <option value="Lunch">Lunch</option>
              <option value="Soup">Soup & Noodle</option>
              <option value="Dishes">Side Dishes</option>
              <option value="Sweeti">Sweeti</option>
              <option value="Drink">Drink</option>
              <option value="Dinner">Dinner</option>
            </select>
          </div>
          <div class="filter_btn">
            <button type="submit">Search</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WalletTransaction