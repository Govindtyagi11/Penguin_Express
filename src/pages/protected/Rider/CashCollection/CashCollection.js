import React, { useState } from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from '../../../../TitleChanger/TitleChanger';
import { MdDelete } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const CashCollection = () => {

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
      <TitleChanger title="Cash Collection" />
      <Breadcrumb pageTitle="Cash Collection" />
      <div className="cash_collection_page ">
        <div className="cash_collection_con">
          <div className="cash_collection_con1">
            <div class="details">
              <label>Details</label>
              <textarea
                rows="4"
                placeholder="Id: 278 | Name:Amit Rider | Mobile:9719167976 | Cash:0.0"
                disabled
              ></textarea>
            </div>
            <div class="amount_collect">
              <label>Amount to be collect</label>
              <input type="text" placeholder="" />
            </div>
            <div class="amount_collect">
              <label>
                Date <span>(DD-MM-YY)</span>
              </label>
              <input type="date" placeholder="" />
            </div>
            <div class="amount_collect">
              <label>Message</label>
              <textarea rows="4"></textarea>
            </div>
            <div class="add_reset_btn">
              <div class="reset">
                <input type="button" value="Reset" />
              </div>
              <div class="add_product">
                <input type="button" value="Collect" />
              </div>
            </div>
          </div>
          <div className="cash_collection_con2">
            <div className="head">
              <h2>Select Rider</h2>
            </div>
            <div className="order_table_info">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>ID</th>
                    <th>UserName</th>
                    <th>Cash to Collect ($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="radio"
                        id="1"
                        name="media_details"
                        value="1"
                      />
                    </td>
                    <td>283</td>
                    <td>Tset</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="radio"
                        id="1"
                        name="media_details"
                        value="1"
                      />
                    </td>
                    <td>283</td>
                    <td>Tset</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="radio"
                        id="1"
                        name="media_details"
                        value="1"
                      />
                    </td>
                    <td>283</td>
                    <td>Tset</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="radio"
                        id="1"
                        name="media_details"
                        value="1"
                      />
                    </td>
                    <td>283</td>
                    <td>Tset</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="radio"
                        id="1"
                        name="media_details"
                        value="1"
                      />
                    </td>
                    <td>283</td>
                    <td>Tset</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="radio"
                        id="1"
                        name="media_details"
                        value="1"
                      />
                    </td>
                    <td>283</td>
                    <td>Tset</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="radio"
                        id="1"
                        name="media_details"
                        value="1"
                      />
                    </td>
                    <td>283</td>
                    <td>Tset</td>
                    <td>0.00</td>
                  </tr>
                </tbody>
              </table>
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
                <h2>Filter By Status</h2>
                <select name="status" id="status">
                  <option value="Orders">Select Status</option>
                  <option value="Pending">Rider Cash Received</option>
                  <option value="Confirmed">Cash Collected by Admin</option>
                </select>
              </div>
              <div className="filter_status">
                <h2>Filter By Rider</h2>
                <select name="status" id="status">
                  <option value="1">Select Rider</option>
                  <option value="2">Amit Rider</option>
                  <option value="3">Amit Rider Test</option>
                  <option value="4">Ankit</option>
                  <option value="5">Anup</option>
                  <option value="6">Ankur</option>
                  <option value="7">Test</option>
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
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Mobile</th>
                    <th>Order Id</th>
                    <th>Amount($)</th>
                    <th>Status</th>
                    <th>Date</th>
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

export default CashCollection