import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from '../../../../TitleChanger/TitleChanger';


const Transaction = () => {
  return (
    <>
      <TitleChanger title="Transactions" />
      <Breadcrumb pageTitle="Transactions" />
      <div className="home_store">
        <div className="order_table_info">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>order Id</th>
                <th>Transaction Id</th>
                <th>Amount</th>
                <th>status</th>
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
    </>
  );
}

export default Transaction