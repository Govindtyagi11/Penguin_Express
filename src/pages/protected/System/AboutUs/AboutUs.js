import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from "../../../../TitleChanger/TitleChanger";

const AboutUs = () => {
  return (
    <>
      <TitleChanger title="About Us" />
      <Breadcrumb pageTitle="About Us" />
      <div className="notification_setting_page">
        <div className="label_textarea">
          <label>About Us</label>
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
            <input type="button" value="Update About Us" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs 