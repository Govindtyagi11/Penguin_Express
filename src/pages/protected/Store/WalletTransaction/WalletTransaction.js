import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from '../../../../TitleChanger/TitleChanger';

const WalletTransaction = () => {
  return (
    <>
      <TitleChanger title="Wallet Transaction" />
      <Breadcrumb pageTitle="Wallet Transaction" />
      <div className="wallet_transaction">
        <div className="filter_status ">
          <h2>Filter By Store </h2>
          <select name="Method" id="Method">
            <option value="payment">Select Store</option>
            <option value="payment">Anup Restaurant</option>
            <option value="delivery">Bunty Chap</option>
            <option value="paypal">Maspeth</option>
          </select>
        </div>
        <div className="order_table_info">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Owner</th>
                    <th>Store</th>
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