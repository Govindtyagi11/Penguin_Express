import React from 'react'
import TitleChanger from '../../../TitleChanger/TitleChanger';
import Breadcrumb from "../../../components/Breadcrumb";
import { LuDownload } from "react-icons/lu";
import { HiUpload } from "react-icons/hi";
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file;
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdPersonRemove } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";

const Test = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  const [isVisible, setIsVisible] = useState(false);
   const handleInputClick = () => {
     setIsVisible(!isVisible);
};
  return (
    <>
      <TitleChanger title="Media" />
      <Breadcrumb pageTitle="Media" />
      <div className="home_media">
        <div className="upload_file">
          <input id="file-upload" type="file" />
          <label for="file-upload" class="custom-file-upload1"></label>
          <div className="select_file">
            <input id="file-upload" type="file" />
            <label for="file-upload" class="custom-file-upload">
              Select Files
            </label>
            <span>Or</span>
            <p>Drag & Drop Photos here</p>
          </div>
        </div>
        <div className="upload_btn">
          <button type="submit">Upload</button>
        </div>
        <div className="date_filter media_gallery">
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: "30px" }}>
            <div className="date_time">
              <h2>Date and time range :</h2>
              <input
                type="text"
                onClick={handleInputClick}
                placeholder="Select Date of Ranges to Filter"
                className="select_input"
              />
              {isVisible && (
                <div className="date_time_range">
                <DateRangePicker
                  onChange={(item) => setState([item.selection])}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  ranges={state}
                  direction="horizontal"
                />
                </div>
              )}
            </div>
            <div className="payment_method ">
              <h2>Media Type</h2>
              <select name="Method" id="Method">
                <option value="Media">All Media Items</option>
                <option value="Images">Images</option>
                <option value="Audio">Audio</option>
                <option value="Video">Video</option>
                <option value="Archive">Archive</option>
                <option value="Spreadsheet">Spreadsheet</option>
                <option value="Documents">Documents</option>
              </select>
            </div>
            <div className="filter_btn">
              <button type="submit">Search</button>
            </div>
            <div className="reset_btn">
              <button type="submit">Reset</button>
            </div>
          </div>
        </div>
        <div className="home_store media_details">
          <div className="order_table_info">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Extension</th>
                  <th>Sub Directory</th>
                  <th>Size</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="radio" id="1" name="media_details" value="1" />
                  </td>
                  <td>Jack.jpg</td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>jpg</td>
                  <td>uploads/media/2024/</td>
                  <td>439.93KB</td>
                  <td>
                    <div className="actions">
                      <div className="delete">
                        <MdDelete />
                      </div>
                      <div className="toggle">
                        <FaCopy />
                      </div>
                      <div className="toggle">
                        <FaCopy />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="radio" id="2" name="media_details" value="2" />
                  </td>
                  <td>Jack.jpg</td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>jpg</td>
                  <td>uploads/media/2024/</td>
                  <td>439.93KB</td>
                  <td>
                    <div className="actions">
                      <div className="delete">
                        <MdDelete />
                      </div>
                      <div className="toggle">
                        <FaCopy />
                      </div>
                      <div className="toggle">
                        <FaCopy />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="radio" id="3" name="media_details" value="3" />
                  </td>
                  <td>Jack.jpg</td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>jpg</td>
                  <td>uploads/media/2024/</td>
                  <td>439.93KB</td>
                  <td>
                    <div className="actions">
                      <div className="delete">
                        <MdDelete />
                      </div>
                      <div className="toggle">
                        <FaCopy />
                      </div>
                      <div className="toggle">
                        <FaCopy />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="radio" id="4" name="media_details" value="4" />
                  </td>
                  <td>Jack.jpg</td>
                  <td>
                    <img src="/assets/images/menu_open_bg1.png" alt="" />
                  </td>
                  <td>jpg</td>
                  <td>uploads/media/2024/</td>
                  <td>439.93KB</td>
                  <td>
                    <div className="actions">
                      <div className="delete">
                        <MdDelete />
                      </div>
                      <div className="toggle">
                        <FaCopy />
                      </div>
                      <div className="toggle">
                        <FaCopy />
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

export default Test;
