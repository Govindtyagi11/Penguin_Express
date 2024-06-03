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
import { FaArrowCircleRight } from "react-icons/fa";


const Riders = () => {
    return (
      <div>
        <TitleChanger title="Riders" />
        <Breadcrumb pageTitle="Riders" />
        <div className="home_store manage_product">
          <div className="add_store_btn">
            <button type="submit">Add Rider</button>
          </div>
          <div className="order_table_info">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile No</th>
                  <th>Rating</th>
                  <th>Address</th>
                  <th>Balance</th>
                  <th>Commission Method</th>
                  <th>Commission </th>
                  <th>Date </th>
                  <th>Actions </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>282</td>
                  <td>Ankur</td>
                  <td>ankursharma@gmail.com</td>
                  <td>9867541320</td>
                  <td>(0.0/0)</td>
                  <td></td>
                  <td>0</td>
                  <td>Percentage On Delivery Charges</td>
                  <td>20.00 (%)</td>
                  <td>2024-02-17 00:26:16</td>
                  <td>
                    <div className="actions">
                      <div className="edit">
                        <FaPen />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                     
                      <div className="toggle">
                        <FaArrowCircleRight  />
                      </div>
                      <div className="edit">
                        <FaStar />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>282</td>
                  <td>Ankur</td>
                  <td>ankursharma@gmail.com</td>
                  <td>9867541320</td>
                  <td>(0.0/0)</td>
                  <td></td>
                  <td>0</td>
                  <td>Percentage On Delivery Charges</td>
                  <td>20.00 (%)</td>
                  <td>2024-02-17 00:26:16</td>
                  <td>
                    <div className="actions">
                      <div className="edit">
                        <FaPen />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                     
                      <div className="toggle">
                        <FaArrowCircleRight  />
                      </div>
                      <div className="edit">
                        <FaStar />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>282</td>
                  <td>Ankur</td>
                  <td>ankursharma@gmail.com</td>
                  <td>9867541320</td>
                  <td>(0.0/0)</td>
                  <td></td>
                  <td>0</td>
                  <td>Percentage On Delivery Charges</td>
                  <td>20.00 (%)</td>
                  <td>2024-02-17 00:26:16</td>
                  <td>
                    <div className="actions">
                      <div className="edit">
                        <FaPen />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                     
                      <div className="toggle">
                        <FaArrowCircleRight  />
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

export default Riders