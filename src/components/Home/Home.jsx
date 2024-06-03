import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaHamburger } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { FaLevelDownAlt } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


function Home() {
  
const [state, setState] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  }
]);
   const [isVisible, setIsVisible] = useState(false);
   const handleInputClick = () => {
     setIsVisible(!isVisible);
};
   
  return (
    <>
      <div className="home_page">
        <div className="order_info">
          <div className="orders">
            <div className="icon">
              <PiShoppingCart />
            </div>
            <div className="content">
              <p>Orders</p>
              <span>0</span>
            </div>
          </div>
          <div className="orders sign_ups">
            <div className="icon">
              <IoPersonAddOutline />
            </div>
            <div className="content">
              <p>New Signups</p>
              <span>9</span>
            </div>
          </div>
          <div className="orders riders">
            <div className="icon">
              <IoPeopleOutline />
            </div>
            <div className="content">
              <p>Riders</p>
              <span>6</span>
            </div>
          </div>
          <div className="orders store">
            <div className="icon">
              <FaHamburger />
            </div>
            <div className="content">
              <p>Store</p>
              <span>9</span>
            </div>
          </div>
        </div>
        <div className="transaction_selling">
          <div className="latest_transaction">
            <div>
              <h2>Sales Analytics</h2>
            </div>
          </div>
          <div className="best_sellling_product">
            <div>
              <h2>Category Wise Product's Count</h2>
            </div>
          </div>
        </div>
        <div className="order_outline">
          <div>
            <h2>Order Outlines</h2>
          </div>
          <div className="order_outline_card">
            <div className="pending">
              <div className="content">
                <span>0</span>
                <p>Pending</p>
              </div>
              <div className="icon">
                <FaHistory />
              </div>
            </div>
            <div className="pending confirmed">
              <div className="content">
                <span>0</span>
                <p>Confirmed</p>
              </div>
              <div className="icon">
                <FaLevelDownAlt />
              </div>
            </div>
            <div className="pending preparing">
              <div className="content">
                <span>0</span>
                <p>Preparing</p>
              </div>
              <div className="icon">
                <FaPeopleCarry />
              </div>
            </div>
            <div className="pending out">
              <div className="content">
                <span>0</span>
                <p>Out For Delivery</p>
              </div>
              <div className="icon">
                <FaShippingFast />
              </div>
            </div>
            <div className="pending delivered">
              <div className="content">
                <span>0</span>
                <p>Delivered</p>
              </div>
              <div className="icon">
                <FaUserCheck />
              </div>
            </div>
            <div className="pending cancelled">
              <div className="content">
                <span>0</span>
                <p>Cancelled</p>
              </div>
              <div className="icon">
                <FaTimesCircle />
              </div>
            </div>
          </div>
        </div>
        <div className="date_time_table">
          <div className="date_filter">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div className="input_range">
                <h2>Date and time range:</h2>
                <input
                  type="text"
                  onClick={handleInputClick}
                  placeholder="Select Date of Ranges to Filter"
                  className="select_input"
                />
                {isVisible && (
                  <div className="date_time">
                    <DateRangePicker
                      onChange={(item) => setState([item.selection])}
                      showSelectionPreview={true}
                      moveRangeOnFirstSelection={false}
                      months={2}
                      ranges={state}
                      direction="horizontal"
                    />
                  </div>
                )}
              </div>
              <div className="filter_status">
                <h2>Filter Orders By Status</h2>
                <select name="status" id="status">
                  <option value="Orders">All Orders</option>
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Preparing">Preparing</option>
                  <option value="Delivery">Out For Delivery</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
              <div className="filter_btn">
                <button type="submit">Filter</button>
              </div>
            </div>
            <div className="order_table_info">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Store</th>
                    <th>User Name</th>
                    <th>Total($)</th>
                    <th>D.Charge</th>
                    <th>Wallet Used($)</th>
                    <th>Promo disc.($)</th>
                    <th>Delivery Tip ($)</th>
                    <th>Final Total($)</th>
                    <th>Payment Method</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>Order Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;