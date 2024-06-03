import React from 'react'
import Breadcrumb from "../../../components/Breadcrumb";
import TitleChanger from '../../../TitleChanger/TitleChanger'
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file;
import { FaHistory } from "react-icons/fa";
import { FaLevelDownAlt } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

const Orders = () => {
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
        <TitleChanger title="Orders" />
        <Breadcrumb pageTitle="Orders" />
        <div className="home_orders">
          <div className="date_time_table">
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
                    <option value="orders">All Orders</option>
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="preparing">Preparing</option>
                    <option value="delivery">Out For Delivery</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <div className="payment_method ">
                  <h2>Filter By Payment Method</h2>
                  <select name="Method" id="Method">
                    <option value="payment">All Payment Methods</option>
                    <option value="delivery">Cash On Delivery</option>
                    <option value="paypal">Paypal</option>
                    <option value="razorPay">RazorPay</option>
                    <option value="paystack">Paystack</option>
                    <option value="flutterwave">Flutterwave</option>
                    <option value="paytm">Paytm</option>
                    <option value="strive">Strive</option>
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

export default Orders