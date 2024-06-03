import React from "react";
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from "../../../../TitleChanger/TitleChanger";
import { FaCheckCircle } from "react-icons/fa";

const SystemHealth = () => {
  return (
    <>
      <TitleChanger title="System Health" />
      <Breadcrumb pageTitle="System Health" />
      <div className="system_health_page">
        <div className="head">
          <h2>System Analytics</h2>
        </div>
        <hr />
        <div className="content">
          <div className="versions">
            <div>
              <p>
                Current PHP Version: <span> 7.4.33 </span>
              </p>
            </div>
            <div>
              <p>
                Required Minimum PHP Version: <span> 7.3 </span>
              </p>
            </div>
            <div>
              <p>
                Required Maximum PHP Version: <span> 7.4 </span>
              </p>
            </div>
          </div>
          <div class="order_table_info">
            <table>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Status</th>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>1</b>
                  </td>
                  <td>
                    <FaCheckCircle className="check_circle" />
                  </td>
                  <td>Google API Key</td>
                  <td>
                    You need to create API KEY from google console. Used in
                    selecting city deliverable area and city location.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>1</b>
                  </td>
                  <td>
                    <FaCheckCircle className="check_circle" />
                  </td>
                  <td>Google API Key</td>
                  <td>
                    You need to create API KEY from google console. Used in
                    selecting city deliverable area and city location.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>1</b>
                  </td>
                  <td>
                    <FaCheckCircle className="check_circle" />
                  </td>
                  <td>Google API Key</td>
                  <td>
                    You need to create API KEY from google console. Used in
                    selecting city deliverable area and city location.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>1</b>
                  </td>
                  <td>
                    <FaCheckCircle className="check_circle" />
                  </td>
                  <td>Google API Key</td>
                  <td>
                    You need to create API KEY from google console. Used in
                    selecting city deliverable area and city location.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>1</b>
                  </td>
                  <td>
                    <FaCheckCircle className="check_circle" />
                  </td>
                  <td>Google API Key</td>
                  <td>
                    You need to create API KEY from google console. Used in
                    selecting city deliverable area and city location.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SystemHealth;
