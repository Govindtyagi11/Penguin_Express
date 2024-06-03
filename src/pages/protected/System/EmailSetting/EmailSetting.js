import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from "../../../../TitleChanger/TitleChanger";

const EmailSetting = () => {
  return (
    <>
      <TitleChanger title="Email Setting" />
      <Breadcrumb pageTitle="Email Setting" />
      <div className="email_setting_page">
        <div className="head">
          <h2>
            Email SMTP settings, notifications and others related to email.
          </h2>
        </div>
        <div className="label_input">
          <label>Email</label>
          <input type="email" placeholder="your@gmail.com" />
          <p>
            This is the email address that the contact and report emails will be
            sent to, aswell as being the from address in signup and notification
            emails.
          </p>
        </div>
        <div className="label_input">
          <label>Password</label>
          <input type="text" placeholder="your_mail_password" />
          <p>Password of above given email.</p>
        </div>
        <div className="label_input">
          <label>SMTP Host</label>
          <input type="email" placeholder="smtp.gmail.com" />
          <p>
            This is the host address for your smtp server, this is only needed
            if you are using SMTP as the Email Send Type.
          </p>
        </div>
        <div className="label_input">
          <label>SMTP Port</label>
          <input type="text" placeholder="" />
          <p>SMTP port this will provide your service provider. </p>
        </div>
        <div className="label_input">
          <label>Email Content Type</label>
          <select name="Email" id="Email">
            <option value="Text">Text</option>
            <option value="HTML">HTML</option>
          </select>
          <p>Text-plain or HTML content chooser. </p>
        </div>
        <div className="label_input">
          <label>SMTP Encryption</label>
          <select name="Encryption" id="Encryption">
            <option value="off">off</option>
            <option value="SSl">SSl</option>
            <option value="TLS">TLS</option>
          </select>
          <p>
            If your e-mail service provider supported secure connections, you
            can choose security method on list.
          </p>
        </div>
        <div class="reset_update_btn">
          <div class="reset">
            <input type="button" value="Reset" />
          </div>
          <div class="update">
            <input type="button" value="Update Email Settings" />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailSetting