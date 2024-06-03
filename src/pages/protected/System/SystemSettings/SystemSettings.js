import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from '../../../../TitleChanger/TitleChanger';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaUpload } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCopy } from "react-icons/fa";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85%',
  marginTop: '5vh',
  height: '100vh',
  bgcolor: 'background.paper',
  border: 'none',
  outline: 'none',
  overflow: 'auto',
  borderRadius: "6px" ,
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
};

const SystemSettings = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <TitleChanger title="System Setting" />
      <Breadcrumb pageTitle="System Setting" />
      <div className="system_setting_page">
        <div className="general_setting">
          <div className="head">
            <h2>General Setting</h2>
          </div>
          <hr />
          <div className="general_setting_con">
            <div className="app_name">
              <label htmlFor="">App Name</label>
              <input type="text" placeholder="penguin express" />
            </div>
            <div className="app_name">
              <label htmlFor="">Support Number</label>
              <input type="text" placeholder="9876543210" />
            </div>
            <div className="app_name">
              <label htmlFor="">Support Email</label>
              <input type="email" placeholder="support@erestro.com" />
            </div>
            <div className="app_name">
              <label htmlFor="">Country Currency Code</label>
              <select name="Method" id="Method">
                <option value="payment">USD United State Dollar</option>
                <option value="payment">USD United State Dollar</option>
                <option value="payment">USD United State Dollar</option>
                <option value="payment">USD United State Dollar</option>
              </select>
            </div>
            <div className="stoke_currency">
              <label htmlFor="">
                Store Currency ( Symbol or Code - $ or USD - Anyone ){" "}
              </label>
              <input
                type="text"
                placeholder="Either Symbol or Code - For Example $ or USD"
              />
            </div>
            <div className="stoke_currency">
              <label htmlFor="">System Timezone </label>
              <select name="Method" id="Method">
                <option value="payment">USD United State Dollar</option>
                <option value="payment">USD United State Dollar</option>
                <option value="payment">USD United State Dollar</option>
                <option value="payment">USD United State Dollar</option>
              </select>
            </div>
            <div className="upload_modal">
              <label>Logo</label>
              <Button className="modal_btn" onClick={handleOpen}>
                Upload
                <FaUpload className="icon" />
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} className="modal_box">
                  <div className="head">
                    <h2>Media </h2>
                    <MdClose onClick={handleClose} className="icon" />
                  </div>
                  <hr />
                  <div className="modal_con">
                    <div className="home_media">
                      <div className="upload_file">
                        <input id="file-upload" type="file" />
                        <label
                          for="file-upload"
                          class="custom-file-upload1"
                        ></label>
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
                    </div>
                    <div className="select_media">
                      <div className="head">
                        Select media and click choose Photo
                      </div>
                      <div className="choose_photo">
                        <FaPlus />
                        <input type="button" Value="Choose Photo" />
                      </div>
                      <div className="order_table_info">
                        <table>
                          <thead>
                            <tr>
                              <th></th>
                              <th>Image</th>
                              <th>Name</th>
                              <th>Size</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input
                                  type="radio"
                                  id="1"
                                  name="media_details"
                                  value="1"
                                />
                              </td>
                              <td>
                                <img
                                  src="/assets/images/menu_open_bg1.png"
                                  alt=""
                                />
                              </td>
                              <td>Jack.jpg</td>
                              <td>4.61KB</td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type="radio"
                                  id="1"
                                  name="media_details"
                                  value="1"
                                />
                              </td>
                              <td>
                                <img
                                  src="/assets/images/menu_open_bg1.png"
                                  alt=""
                                />
                              </td>
                              <td>Jack.jpg</td>
                              <td>4.61KB</td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type="radio"
                                  id="1"
                                  name="media_details"
                                  value="1"
                                />
                              </td>
                              <td>
                                <img
                                  src="/assets/images/menu_open_bg1.png"
                                  alt=""
                                />
                              </td>
                              <td>Jack.jpg</td>
                              <td>4.61KB</td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type="radio"
                                  id="1"
                                  name="media_details"
                                  value="1"
                                />
                              </td>
                              <td>
                                <img
                                  src="/assets/images/menu_open_bg1.png"
                                  alt=""
                                />
                              </td>
                              <td>Jack.jpg</td>
                              <td>4.61KB</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </Box>
              </Modal>
              <p>Only Choose When Update is necessary</p>
              <div className="logo">
                <img src="/assets/images/opa_logo.png" />
              </div>
            </div>
            <div className="upload_modal">
              <label>Favicon</label>
              <Button className="modal_btn" onClick={handleOpen}>
                Upload
                <FaUpload className="icon" />
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} className="modal_box">
                  <div className="head">
                    <h2>Media </h2>
                    <MdClose onClick={handleClose} className="icon" />
                  </div>
                  <hr />
                  <div className="modal_con">
                    <div className="home_media">
                      <div className="upload_file">
                        <input id="file-upload" type="file" />
                        <label
                          for="file-upload"
                          class="custom-file-upload1"
                        ></label>
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
                    </div>
                    <div className="select_media">
                      <div className="head">
                        Select media and click choose Photo
                      </div>
                      <div className="choose_photo">
                        <FaPlus />
                        <input type="button" Value="Choose Photo" />
                      </div>
                      <div className="order_table_info">
                        <table>
                          <thead>
                            <tr>
                              <th></th>
                              <th>Image</th>
                              <th>Name</th>
                              <th>Size</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input
                                  type="radio"
                                  id="1"
                                  name="media_details"
                                  value="1"
                                />
                              </td>
                              <td>
                                <img
                                  src="/assets/images/menu_open_bg1.png"
                                  alt=""
                                />
                              </td>
                              <td>Jack.jpg</td>
                              <td>4.61KB</td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type="radio"
                                  id="1"
                                  name="media_details"
                                  value="1"
                                />
                              </td>
                              <td>
                                <img
                                  src="/assets/images/menu_open_bg1.png"
                                  alt=""
                                />
                              </td>
                              <td>Jack.jpg</td>
                              <td>4.61KB</td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type="radio"
                                  id="1"
                                  name="media_details"
                                  value="1"
                                />
                              </td>
                              <td>
                                <img
                                  src="/assets/images/menu_open_bg1.png"
                                  alt=""
                                />
                              </td>
                              <td>Jack.jpg</td>
                              <td>4.61KB</td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type="radio"
                                  id="1"
                                  name="media_details"
                                  value="1"
                                />
                              </td>
                              <td>
                                <img
                                  src="/assets/images/menu_open_bg1.png"
                                  alt=""
                                />
                              </td>
                              <td>Jack.jpg</td>
                              <td>4.61KB</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </Box>
              </Modal>
              <p>Only Choose When Update is necessary</p>
              <div className="logo">
                <img src="/assets/images/opa_logo.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="google_delivery">
          <div className="google_map_setting">
            <div className="head">
              <h2>Google Map Key Settings</h2>
            </div>
            <hr />
            <div className="content">
              <p>
                Set Two Google Map API KEY to secure your appliation and panel
                Google Map Usage
              </p>
              <ol>
                <li>Maps JavaScript API KEY for admin panel MAP usage.</li>
                <li>Google Map API KEY for Application usage.</li>
              </ol>
            </div>
            <div className="map_api_key">
              <h2>Maps JavaScript API KEY</h2>
              <input type="text" placeholder="Enter your Google Map" />
            </div>
            <div className="map_api_key">
              <h2>Google Map API KEY (For Application)</h2>
              <input type="text" placeholder="Enter your Google Map" />
            </div>
          </div>
          <div className="delivery_setting">
            <div className="head">
              <h2>Delivery Settings</h2>
            </div>
            <hr />
            <div className="content">
              <span>Order Delivery</span>
              <span>OTP System</span>
            </div>
          </div>
        </div>
        <div className="version_cart">
          <div className="version_setting">
            <div className="head">
              <h2>Version Settings</h2>
            </div>
            <hr />
            <div className="map_api_key">
              <h2>Current Version Of Android APP </h2>
              <input
                type="text"
                placeholder="Current For Version For Android APP"
              />
            </div>
            <div className="map_api_key">
              <h2>Current Version Of IOS APP </h2>
              <input type="text" placeholder="Current Version For IOS APP" />
            </div>
          </div>
          <div className="cart_setting">
            <div className="head">
              <h2>Cart Settings</h2>
            </div>
            <hr />
            <div className="map_api_key">
              <h2>Minimum Cart Amount($)</h2>
              <input type="number" placeholder="Minimum Cart Amount" />
            </div>
            <div className="map_api_key">
              <h2>Maximum Items Allowed In Cart</h2>
              <input
                type="number"
                placeholder="Maximum Items Allowed In Cart"
              />
            </div>
            <div className="map_api_key">
              <h2>
                Low stock limit
                <span> (Product will be considered as low stock) </span>
              </h2>
              <input type="number" placeholder="Product low stock limit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SystemSettings