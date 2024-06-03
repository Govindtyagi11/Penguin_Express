import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from '../../../../TitleChanger/TitleChanger';

const ViewCustomers = () => {
  return (
    <>
      <TitleChanger title="Addresses" />
      <Breadcrumb pageTitle="Addresses" />
      <div className="home_store">
        <div className="order_table_info">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Type</th>
                <th>Mobile</th>
                <th>Alternate Mobile</th>
                <th>Landmark</th>
                <th>Area</th>
                <th>City</th>
                <th>State</th>
                <th>Pin Code</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123</td>
                <td>Deepak</td>
                <td></td>
                <td>7184558899</td>
                <td>7184558899</td>
                <td>Royal Park</td>
                <td>Noida</td>
                <td>Noida</td>
                <td>Uttar Pradesh</td>
                <td>201001</td>
                <td>1</td>
              </tr>
              <tr>
                <td>123</td>
                <td>Deepak</td>
                <td></td>
                <td>7184558899</td>
                <td>7184558899</td>
                <td>Royal Park</td>
                <td>Noida</td>
                <td>Noida</td>
                <td>Uttar Pradesh</td>
                <td>201001</td>
                <td>1</td>
              </tr>
              <tr>
                <td>123</td>
                <td>Deepak</td>
                <td></td>
                <td>7184558899</td>
                <td>7184558899</td>
                <td>Royal Park</td>
                <td>Noida</td>
                <td>Noida</td>
                <td>Uttar Pradesh</td>
                <td>201001</td>
                <td>1</td>
              </tr>
              <tr>
                <td>123</td>
                <td>Deepak</td>
                <td></td>
                <td>7184558899</td>
                <td>7184558899</td>
                <td>Royal Park</td>
                <td>Noida</td>
                <td>Noida</td>
                <td>Uttar Pradesh</td>
                <td>201001</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ViewCustomers