import React from 'react'
import Breadcrumb from "../../../components/Breadcrumb";
import TitleChanger from '../../../TitleChanger/TitleChanger';
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdPersonRemove } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const Slider = () => {
  return (
    <>
      <TitleChanger title="Sliders" />
      <Breadcrumb pageTitle="Sliders" />
      <div>
        <div className="home_store">
          <div className="add_store_btn">
            <button type="submit">Add Slider</button>
          </div>
          <div className="order_table_info">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Type</th>
                  <th>Type Id</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>default</td>
                  <td>0</td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <div className="actions">
                      <div className="edit">
                        <FaPen />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>default</td>
                  <td>0</td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <div className="actions">
                      <div className="edit">
                        <FaPen />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>default</td>
                  <td>0</td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <div className="actions">
                      <div className="edit">
                        <FaPen />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>default</td>
                  <td>0</td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <div className="actions">
                      <div className="edit">
                        <FaPen />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                    </div>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider