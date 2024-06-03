import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from '../../../../TitleChanger/TitleChanger';
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdPersonRemove } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Stores = () => {
    return (
      <div>
        <TitleChanger title="Manage Products " />
        <Breadcrumb pageTitle="Manage Products" />
        <div className="home_store manage_product">
          <div className="add_store_btn">
            <button type="submit">Filter</button>
          </div>
          <div style={{ display: "flex" }}>
            <div className="payment_status">
              <h2>Settle Payments for Stores</h2>
              <button type="submit">Settle Store Payment</button>
            </div>
            <div className="filter_status ">
              <h2>Filter By Store Status</h2>
              <select name="Method" id="Method">
                <option value="payment">Select Status</option>
                <option value="payment">Approved</option>
                <option value="delivery">Not Approved</option>
                <option value="paypal">Deactivated</option>
              </select>
            </div>
          </div>
          <div className="order_table_info">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Rating</th>
                  <th>Available QTY</th>
                  <th>Sold QTY Last 30 Days</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    Chicken With Broccoli<br /> Simple Product<br /> By <span>Maspeth</span>
                  </td>
                  <td>Lunch</td>
                  <td>
                    <div className="rating">
                      <div className="rated">
                        <span>
                          <FaRegStar />
                        </span>
                        <span>
                          <FaRegStar />
                        </span>
                        <span>
                          <FaRegStar />
                        </span>
                        <span>
                          <FaRegStar />
                        </span>
                        <span>
                          <FaRegStar />
                        </span>
                      </div>
                      <label>Not Rated</label>
                      <span>0/0</span>
                    </div>
                  </td>
                  <td></td>
                  <td>0</td>
                  <td>
                    <div className="actions">
                      <div className="edit">
                        <FaPen />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                      <div className="remove">
                        <FaToggleOn />
                      </div>
                      <div className="toggle">
                        <FaEye />
                      </div>
                      <div className="edit">
                        <FaStar />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    Chicken With Broccoli<br /> Simple Product<br /> By <span>Maspeth</span>
                  </td>
                  <td>Lunch</td>
                  <td>
                    <div className="rating">
                      <div className="rated">
                        <span>
                          <FaRegStar />
                        </span>
                        <span>
                          <FaRegStar />
                        </span>
                        <span>
                          <FaRegStar />
                        </span>
                        <span>
                          <FaRegStar />
                        </span>
                        <span>
                          <FaRegStar />
                        </span>
                      </div>
                      <label>Not Rated</label>
                      <span>0/0</span>
                    </div>
                  </td>
                  <td></td>
                  <td>0</td>
                  <td>
                    <div className="actions">
                      <div className="edit">
                        <FaPen />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                      <div className="remove">
                        <FaToggleOn />
                      </div>
                      <div className="toggle">
                        <FaEye />
                      </div>
                      <div className="edit">
                        <FaStar />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    Chicken With Broccoli<br /> Simple Product<br /> By <span>Maspeth</span>
                  </td>
                  <td>Lunch</td>
                  <td>
                    <div className="rating">
                      <div className="rated">
                        <span>
                          <FaRegStar />
                        </span>
                        <span>
                          <FaRegStar />
                        </span>
                        <span>
                          <FaRegStar />
                        </span>
                        <span>
                          <FaRegStar />
                        </span>
                        <span>
                          <FaRegStar />
                        </span>
                      </div>
                      <label>Not Rated</label>
                      <span>0/0</span>
                    </div>
                  </td>
                  <td></td>
                  <td>0</td>
                  <td>
                    <div className="actions">
                      <div className="edit">
                        <FaPen />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                      <div className="remove">
                        <FaToggleOn />
                      </div>
                      <div className="toggle">
                        <FaEye />
                      </div>
                      <div className="edit">
                        <FaStar />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}

export default Stores