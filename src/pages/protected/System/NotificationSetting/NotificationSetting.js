import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from "../../../../TitleChanger/TitleChanger";

const NotificationSetting = () => {
  return (
    <>
      <TitleChanger title="Notification Setting" />
      <Breadcrumb pageTitle="Notification Setting" />
      <div className="notification_setting_page">
        <div className="label_textarea">
          <label>Client Id</label>
          <textarea name="" id="" rows="5" placeholder="FCM Server Key"></textarea>
        </div>
        <div class="reset_update_btn">
          <div class="reset">
            <input type="button" value="Reset" />
          </div>
          <div class="update">
            <input type="button" value="Update Notification Settings" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationSetting