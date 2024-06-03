import React from 'react'
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from '../../../../TitleChanger/TitleChanger';

const BulkUploads = () => {
  return (
    <>
      <TitleChanger title="Bulk Upload" />
      <Breadcrumb pageTitle="Bulk Upload" />
      <div className="bulk_upload_page">
        <div className="bulk_upload_page_con">
          <ul>
            <li>Readd and follow instructions carefully while preparing data</li>
            <li>Download and save the sample file to reduce errors</li>
            <li>For adding bulk products file should be .csv format</li>
            <li>You can copy image path from media section</li>
            <li>
              Make sure you entered valid data as per instructions before
              proceed
            </li>
          </ul>
        </div>
        <div className="bulk_upload_page_file">
          <div class="partner">
            <label>Type<span>[upload]</span></label>
            <select name="upload" id="upload">
              <option value="Select">Select</option>
              <option value="Upload">Upload</option>
              <option value="Update">Update</option>
            </select>
          </div>
          <div className='file'>
            <label>File</label>
            <input type='file' />
          </div>
          <div class="add_reset_btn">
            <div class="reset">
                <input type="button" value="Reset"/>
            </div>
            <div class="add_product">
                <input type="button" value="Add Product"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BulkUploads