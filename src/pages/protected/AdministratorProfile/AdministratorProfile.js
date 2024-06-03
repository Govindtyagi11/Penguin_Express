import React from 'react'
import Breadcrumb from "../../../components/Breadcrumb";
import TitleChanger from "../../../TitleChanger/TitleChanger";

const AdministratorProfile = () => {
  return (
    <>
      <TitleChanger title="Administrator Profile" />
      <Breadcrumb pageTitle="Administrator Profile" />
      <div className="payment_method_page administrator_profile">
        <div className="label_input">
          <div className="label">
            <label>Username</label>
          </div>
          <div className="input">
            <input type="text" placeholder="Administrator" />
          </div>
        </div>
        <div className="label_input">
          <div className="label">
            <label>Mobile</label>
          </div>
          <div className="input">
            <input type="number" placeholder="9876543212" />
          </div>
        </div>
        <div className="label_input">
          <div className="label">
            <label>Old Password</label>
          </div>
          <div className="input">
            <input type="text" placeholder="Type Password here" />
          </div>
        </div>
        <div className="label_input">
          <div className="label">
            <label>New Password</label>
          </div>
          <div className="input">
            <input type="text" placeholder="Type Password here" />
          </div>
        </div>
        <div className="label_input">
          <div className="label">
            <label>Confirm New Password</label>
          </div>
          <div className="input">
            <input type="text" placeholder="Type Confirm Password here" />
          </div>
        </div>
        <div class="reset_update_btn">
          <div class="reset">
            <input type="button" value="Reset" />
          </div>
          <div class="update">
            <input type="button" value="Update Profile" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdministratorProfile