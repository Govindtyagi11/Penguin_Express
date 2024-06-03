import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from '../../../../TitleChanger/TitleChanger';
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";


const ViewCustomers = () => {
  return (
    <>
      <TitleChanger title="View Customer" />
      <Breadcrumb pageTitle="View Customer" />
      <div className="home_store">
        <div className="order_table_info">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mobile No</th>
                <th>Email</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123</td>
                <td>Deepak</td>
                <td>7184558899</td>
                <td>deepak@mailnator.com</td>
                <td>H-345, Royal Park,Sahstri Nagar, Noida</td>
                <td>Noida</td>
                <td>Uttar Pradesh</td>
                <td>201001</td>
                <td>
                  <label>Active</label>
                </td>
                <td>
                  <div className="actions">
                    <div className="edit">
                      <FaShoppingCart  />
                    </div>
                    <div className="delete">
                      <FaMoneyBillWave  />
                    </div>
                    <div className="remove">
                      <FaRegAddressBook  />
                    </div>
                    <div className="delete">
                      <FaToggleOn  />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>Deepak</td>
                <td>7184558899</td>
                <td>deepak@mailnator.com</td>
                <td>H-345, Royal Park,Sahstri Nagar, Noida</td>
                <td>Noida</td>
                <td>Uttar Pradesh</td>
                <td>201001</td>
                <td>
                  <label>Active</label>
                </td>
                <td>
                  <div className="actions">
                    <div className="edit">
                      <FaShoppingCart  />
                    </div>
                    <div className="delete">
                      <FaMoneyBillWave  />
                    </div>
                    <div className="remove">
                      <FaRegAddressBook  />
                    </div>
                    <div className="delete">
                      <FaToggleOn  />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>Deepak</td>
                <td>7184558899</td>
                <td>deepak@mailnator.com</td>
                <td>H-345, Royal Park,Sahstri Nagar, Noida</td>
                <td>Noida</td>
                <td>Uttar Pradesh</td>
                <td>201001</td>
                <td>
                  <label>Active</label>
                </td>
                <td>
                  <div className="actions">
                    <div className="edit">
                      <FaShoppingCart  />
                    </div>
                    <div className="delete">
                      <FaMoneyBillWave  />
                    </div>
                    <div className="remove">
                      <FaRegAddressBook  />
                    </div>
                    <div className="delete">
                      <FaToggleOn  />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>Deepak</td>
                <td>7184558899</td>
                <td>deepak@mailnator.com</td>
                <td>H-345, Royal Park,Sahstri Nagar, Noida</td>
                <td>Noida</td>
                <td>Uttar Pradesh</td>
                <td>201001</td>
                <td>
                  <label>Active</label>
                </td>
                <td>
                  <div className="actions">
                    <div className="edit">
                      <FaShoppingCart  />
                    </div>
                    <div className="delete">
                      <FaMoneyBillWave  />
                    </div>
                    <div className="remove">
                      <FaRegAddressBook  />
                    </div>
                    <div className="delete">
                      <FaToggleOn  />
                    </div>
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ViewCustomers