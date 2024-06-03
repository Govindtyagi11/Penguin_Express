import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from "../../../../TitleChanger/TitleChanger";

const ContactUs = () => {
  return (
    <>
      <TitleChanger title="Contact Us" />
      <Breadcrumb pageTitle="Contact Us" />
      <div className="notification_setting_page">
        <div className="label_textarea">
          <label>Contact Us</label>
          <textarea
            name=""
            id=""
            rows="10"
            placeholder=""
          ></textarea>
        </div>
        <div class="reset_update_btn">
          <div class="reset">
            <input type="button" value="Reset" />
          </div>
          <div class="update">
            <input type="button" value="Update Contact Info" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs