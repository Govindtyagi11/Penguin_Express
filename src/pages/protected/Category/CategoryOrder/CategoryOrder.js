import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from '../../../../TitleChanger/TitleChanger';
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdPersonRemove } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const CategoryOrder = () => {
  return (
    <>
      <TitleChanger title="CategoryOrder" />
      <Breadcrumb pageTitle="CategoryOrder" />
      <div className="category_order_page">
        <div className="head">
          <h2>Category List</h2>
        </div>
        <div className="order_table_info">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Row ID</th>
                <th>Order</th>
                <th>Name</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>0</td>
                <td>0</td>
                <td>Lunch</td>
                <td>
                  <img src="/assets/images/menu_open_bg1.png" alt="" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>0</td>
                <td>0</td>
                <td>Lunch</td>
                <td>
                  <img src="/assets/images/menu_open_bg1.png" alt="" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>0</td>
                <td>0</td>
                <td>Lunch</td>
                <td>
                  <img src="/assets/images/menu_open_bg1.png" alt="" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>0</td>
                <td>0</td>
                <td>Lunch</td>
                <td>
                  <img src="/assets/images/menu_open_bg1.png" alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="save_data_btn">
          <button type="submit">Save</button>
        </div>
      </div>
    </>
  );
}

export default CategoryOrder