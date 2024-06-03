import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from '../../../../TitleChanger/TitleChanger';


const WalletTransaction = () => {
  return (
    <>
      <TitleChanger title="Wallet Transaction" />
      <Breadcrumb pageTitle="Wallet Transaction" />
      <div className="home_store">
        <div className="order_table_info">
          <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Type</th>
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
             </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default WalletTransaction