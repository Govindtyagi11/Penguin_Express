import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from "../../../../TitleChanger/TitleChanger";

const PaymentMethods = () => {
  return (
    <>
      <TitleChanger title="Payment Methods" />
      <Breadcrumb pageTitle="Payment Methods" />
      <div className="payment_method_page">
        <div className="head">
          <h2>Paypal Payments</h2>
        </div>
        <div className="label_input">
          <div className="label">
            <label>Client Id</label>
          </div>
          <div className="input">
            <input type="text" placeholder="Paypal Client ID" />
          </div>
        </div>
        <div className="label_input">
          <div className="label">
            <label>Secret Key</label>
          </div>
          <div className="input">
            <input type="text" placeholder="Paypal Secret Key" />
          </div>
        </div>
        <div className="label_input">
          <div className="label">
            <label>
              Payment Mode <span> [ sandbox / live ] </span>
            </label>
          </div>
          <div className="input">
            <select name="Payment" id="Payment">
              <option value="Select">Selcet Mode</option>
              <option value="Sandbox">Sandbox [Texting]</option>
              <option value="production">production [Live]</option>
            </select>
          </div>
        </div>
        <div className="label_input">
          <div className="label">
            <label>Paypal Business Email</label>
          </div>
          <div className="input">
            <input type="text" placeholder="Paypal Business Email" />
          </div>
        </div>
        <div className="label_input">
          <div className="label">
            <label>Currency code</label>
          </div>
          <div className="input">
            <select name="Payment" id="Payment">
              <option value="AUD">AUD</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
        <div className="label_input">
          <div className="label">
            <label>
              Notification URL
              <span>
                (Set this as IPN notification URL in you PayPal account)
              </span>
            </label>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="https://p3solutions.in/penguineexpress/app/v1/api/ipnl"
              disabled
            />
          </div>
        </div>
        <hr />
        <div className="head">
          <h2>Razorpay Payments</h2>
        </div>
        <div className="label_input">
          <div className="label">
            <label>Client Id</label>
          </div>
          <div className="input">
            <input type="text" placeholder="Paypal Client ID" />
          </div>
        </div>
        <div className="label_input">
          <div className="label">
            <label>Secret Key</label>
          </div>
          <div className="input">
            <input type="text" placeholder="Paypal Secret Key" />
          </div>
        </div>
        <div className="label_input">
          <div className="label">
            <label>
              Payment Endpoint URL
              <span>(Set this as Endpoint URL in your Razorpay account)</span>
            </label>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="https://p3solutions.in/penguineexpress/app/v1/api/razorpay_webhook"
              disabled
            />
          </div>
        </div>
        <div className="label_input">
          <div className="label">
            <label>Webhoook Secret Key</label>
          </div>
          <div className="input">
            <input type="text" placeholder="" />
          </div>
        </div>
        <div class="reset_update_btn">
          <div class="reset">
            <input type="button" value="Reset" />
          </div>
          <div class="update">
            <input type="button" value="Update Payment Settings" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentMethods