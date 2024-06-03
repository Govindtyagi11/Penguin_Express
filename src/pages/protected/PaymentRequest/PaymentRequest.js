import React from 'react'
import Breadcrumb from "../../../components/Breadcrumb";
import TitleChanger from '../../../TitleChanger/TitleChanger';


const PaymentRequest = () => {
  return (
    <>
      <TitleChanger title="Payment Request" />
      <Breadcrumb pageTitle="Payment Request" />
      <div className="home_store payment_request">
        <div className="filter_status ">
          <h2>Filter By User</h2>
          <select name="Method" id="Method">
            <option value="payment">Select User</option>
            <option value="payment">Store</option>
            <option value="delivery">Rider</option>
          </select>
        </div>
        <div className="order_table_info">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Type</th>
                <th>Payment Address</th>
                <th>Amount Requested</th>
                <th>Remarks</th>
                <th>Status</th>
                <th>Date Created</th>
                <th>Actions</th>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default PaymentRequest