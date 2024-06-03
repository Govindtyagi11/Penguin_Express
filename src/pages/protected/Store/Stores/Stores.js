import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from '../../../../TitleChanger/TitleChanger';
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdPersonRemove } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const Stores = () => {
    return (
      <div>
        <TitleChanger title="Stores" />
        <Breadcrumb pageTitle="Stores" />
        <div className="home_store">
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
                  <th>ID</th>
                  <th>Owner Name</th>
                  <th>Restaurant Name</th>
                  <th>Mobile</th>
                  <th>Balance</th>
                  <th>Rating</th>
                  <th>City</th>
                  <th>City Id</th>
                  <th>Working Days</th>
                  <th>Admin Commission(%)</th>
                  <th>Status</th>
                  <th>Profile</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123</td>
                  <td>Penguin Express</td>
                  <td>Maspeth</td>
                  <td>7184558899</td>
                  <td>0</td>
                  <td>(0/0)</td>
                  <td>Noida</td>
                  <td>1</td>
                  <td>
                    <b> Sunday</b> (Opened)<br/>
                    <b> Monday</b> (Opened)<br/>
                    <b> Tuesday</b> (Opened)<br/>
                    <b> Wednesday</b> (Opened)<br/>
                    <b> Thursday</b> (Opened)<br/>
                    <b> Friday</b> (Opened)<br/>
                    <b> Saturday</b> (Opened)<br/>
                  </td>
                  <td>5.00</td>
                  <td>
                    <label>Approved</label>
                  </td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <div className="actions">
                    <div className="edit">
                    <FaPen />
                    </div>
                    <div className="delete">
                    <MdDelete />
                    </div>
                    <div className="remove">
                    <MdPersonRemove />
                    </div>
                    <div className="toggle">
                    <FaEye />
                    </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>Penguin Express</td>
                  <td>Maspeth</td>
                  <td>7184558899</td>
                  <td>0</td>
                  <td>(0/0)</td>
                  <td>Noida</td>
                  <td>1</td>
                  <td>
                    <b> Sunday</b> (Opened)<br/>
                    <b> Monday</b> (Opened)<br/>
                    <b> Tuesday</b> (Opened)<br/>
                    <b> Wednesday</b> (Opened)<br/>
                    <b> Thursday</b> (Opened)<br/>
                    <b> Friday</b> (Opened)<br/>
                    <b> Saturday</b> (Opened)<br/>
                  </td>
                  <td>5.00</td>
                  <td>
                    <label>Approved</label>
                  </td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <div className="actions">
                    <div className="edit">
                    <FaPen />
                    </div>
                    <div className="delete">
                    <MdDelete />
                    </div>
                    <div className="remove">
                    <MdPersonRemove />
                    </div>
                    <div className="toggle">
                    <FaEye />
                    </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>Penguin Express</td>
                  <td>Maspeth</td>
                  <td>7184558899</td>
                  <td>0</td>
                  <td>(0/0)</td>
                  <td>Noida</td>
                  <td>1</td>
                  <td>
                    <b> Sunday</b> (Opened)<br/>
                    <b> Monday</b> (Opened)<br/>
                    <b> Tuesday</b> (Opened)<br/>
                    <b> Wednesday</b> (Opened)<br/>
                    <b> Thursday</b> (Opened)<br/>
                    <b> Friday</b> (Opened)<br/>
                    <b> Saturday</b> (Opened)<br/>
                  </td>
                  <td>5.00</td>
                  <td>
                    <label>Approved</label>
                  </td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <div className="actions">
                    <div className="edit">
                    <FaPen />
                    </div>
                    <div className="delete">
                    <MdDelete />
                    </div>
                    <div className="remove">
                    <MdPersonRemove />
                    </div>
                    <div className="toggle">
                    <FaEye />
                    </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>Penguin Express</td>
                  <td>Maspeth</td>
                  <td>7184558899</td>
                  <td>0</td>
                  <td>(0/0)</td>
                  <td>Noida</td>
                  <td>1</td>
                  <td>
                    <b> Sunday</b> (Opened)<br/>
                    <b> Monday</b> (Opened)<br/>
                    <b> Tuesday</b> (Opened)<br/>
                    <b> Wednesday</b> (Opened)<br/>
                    <b> Thursday</b> (Opened)<br/>
                    <b> Friday</b> (Opened)<br/>
                    <b> Saturday</b> (Opened)<br/>
                  </td>
                  <td>5.00</td>
                  <td>
                    <label>Approved</label>
                  </td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <div className="actions">
                    <div className="edit">
                    <FaPen />
                    </div>
                    <div className="delete">
                    <MdDelete />
                    </div>
                    <div className="remove">
                    <MdPersonRemove />
                    </div>
                    <div className="toggle">
                    <FaEye />
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