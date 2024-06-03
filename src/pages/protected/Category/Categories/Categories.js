import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from '../../../../TitleChanger/TitleChanger';
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdPersonRemove } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Categories = () => {
    return (
      <div>
        <TitleChanger title="Categories" />
        <Breadcrumb pageTitle="Categories" />
        <div className="home_store">
          <div className="order_table_info">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Banner</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dinner</td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <label>Active</label>
                  </td>

                  <td>
                    <div className="actions">
                      <div className="edit">
                        <FaPen />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                      <div className="remove">
                        <FaEyeSlash />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Dinner</td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <label>Active</label>
                  </td>

                  <td>
                    <div className="actions">
                      <div className="edit">
                        <FaPen />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                      <div className="remove">
                        <FaEyeSlash />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Dinner</td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <label>Active</label>
                  </td>

                  <td>
                    <div className="actions">
                      <div className="edit">
                        <FaPen />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                      <div className="remove">
                        <FaEyeSlash />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Dinner</td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <label>Active</label>
                  </td>

                  <td>
                    <div className="actions">
                      <div className="edit">
                        <FaPen />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                      <div className="remove">
                        <FaEyeSlash />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Dinner</td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>
                    <label>Active</label>
                  </td>

                  <td>
                    <div className="actions">
                      <div className="edit">
                        <FaPen />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                      <div className="remove">
                        <FaEyeSlash />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}

export default Categories