import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from '../../../../TitleChanger/TitleChanger';


const FundTransfer = () => {
  return (
    <>
      <TitleChanger title="Fund Transfer" />
      <Breadcrumb pageTitle="Fund Transfer" />
      <div className="home_store payment_request">
        <div className="order_table_info">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Opening Balance</th>
                <th>Closing Balance</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Message</th>
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

export default FundTransfer