import React from "react";
import Breadcrumb from "../../../../components/Breadcrumb";
import TitleChanger from '../../../../TitleChanger/TitleChanger';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Messages = () => {
  return (
    <>
      <TitleChanger title="Add Products" />
      <Breadcrumb pageTitle="Add Products" />
      <div className="product_page">
        <div className="basic_info">
          <div className="head">
            <h2>Basic Info</h2>
          </div>
          <div className="basic_info_con">
            <div className="basic_info_con1">
              <div className="product_id">
                <label>Product ID</label>
                <input type="text" placeholder="Product ID" />
              </div>
              <div className="name">
                <label>Name</label>
                <input type="text" placeholder="Product Name" />
              </div>
              <div className="partner">
                <label>Partner</label>
                <select name="partner" id="partner">
                  <option value="Select">Select Partner</option>
                  <option value="Anup">Anup Restaurant</option>
                  <option value="Bunty">Bunty Chap</option>
                  <option value="Maspeth">Maspeth</option>
                </select>
              </div>
              <div className="select_category">
                <label>Select Category</label>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={selectinfocategory}
                  sx={{
                    marginTop: "8px",
                    border: "1px solid black",
                    borderRadius: "4px",
                    outline: "none",
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Type to search and select Category"
                    />
                  )}
                />
              </div>
              <div className="description">
                <label>Short Description</label>
                <textarea placeholder="Product Short description"></textarea>
              </div>
              <div className="tax">
                <label>Tax</label>
                <input type="text" placeholder="NIL 0%" disabled />
                <p>
                  This tax will be exclusively calculate and display at checkout
                  page.
                </p>
              </div>
              <div className="main_image">
                <p>Main Image</p>
                <input id="file-upload" type="file" />
                <label for="file-upload" class="custom-file-upload">
                  Upload
                </label>
              </div>
            </div>
            <div className="basic_info_con2">
              <div className="select_tags">
                <label>Select Tags</label>
                <input type="search" placeholder="Search for Tags" />
              </div>
              <div className="indicator">
                <label>Indicator</label>
                <select name="indicator" id="partner">
                  <option value="none">None</option>
                  <option value="veg">Veg</option>
                  <option value="non_veg">Non-Veg</option>
                </select>
              </div>
              <div className="highlights">
                <div>
                  <label>Highlights</label>
                  <span>( These highlights will show near product title )</span>
                </div>
                <input
                  type="text"
                  placeholder="Type in some highlights for example Spicy,Sweet,Must Try etc"
                />
              </div>
              <div className="calories">
                <div>
                  <label>Calories</label>
                  <span> (1 kilocalorie (kcal) = 1000 calories (cal))</span>
                </div>
                <input type="number" placeholder="0" />
              </div>
              <div className="calories">
                <label>Total Allowed Quantity</label>
                <input type="number" placeholder="Total Allowed Quantity" />
              </div>
              <div className="calories">
                <label>Minimum Order Quantity</label>
                <input type="number" placeholder="Minimum Order Quantity" />
              </div>
            </div>
          </div>
        </div>
        <div className="recipe">
          <div className="head">
            <h2>Recipe</h2>
          </div>
          <div className="recipe_con">
            <div className="product_weight">
              <div className="meat">
                <label>Meat</label>
                <input type="text" placeholder="Meat" />
              </div>
              <div className="weight">
                <label>Weight / G</label>
                <input type="text" placeholder="Weight / G" />
              </div>
            </div>
            <div className="product_weight">
              <div className="meat">
                <label>Vegetable</label>
                <input type="text" placeholder="Meat" />
              </div>
              <div className="weight">
                <label>Weight / G</label>
                <input type="text" placeholder="Weight / G" />
              </div>
            </div>
            <div className="product_weight">
              <div className="meat">
                <label>Other</label>
                <input type="text" placeholder="Other" />
              </div>
              <div className="weight">
                <label>Weight / G</label>
                <input type="text" placeholder="Weight / G" />
              </div>
            </div>
            <div className="product_weight">
              <div className="meat">
                <label>Seasoning</label>
                <textarea placeholder="Seasoning"></textarea>
              </div>
              <div className="weight">
                <label>Cooking Instruction</label>
                <textarea placeholder="Cooking Instruction"></textarea>
              </div>
            </div>
            <div className="product_weight">
              <div className="meat">
                <label>Packing</label>
                <textarea placeholder="Packing"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="product_addon">
          <div className="product_addon1">
            <div class="head">
              <h2>Recipe</h2>
            </div>
            <div className="choose_add_ons">
              <label>Choose Add Ons</label>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={choose_add_ons}
                sx={{
                  marginTop: "8px",
                  border: "1px solid black",
                  borderRadius: "4px",
                  outline: "none",
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Type to search and select Category"
                  />
                )}
              />
            </div>
            <div className="title">
              <label>Title</label>
              <input type="text" placeholder="Add On Title" />
            </div>
            <div className="title">
              <label>Short Description</label>
              <textarea placeholder="Add Ons Short Description"></textarea>
            </div>
            <div className="title">
              <label>Price</label>
              <input type="number" placeholder="Add On Price" />
            </div>
            <div className="title">
              <label>Calories</label>
              <input type="number" placeholder="Add On Calories" />
            </div>
            <div class="save_add_ons">
              <input type="button" value="Save Add Ons" />
              <p>
                Click on <span>Add Product</span> to save the Add Ons for this
                product after filling remaining details.
              </p>
            </div>
          </div>
          <div className="product_addon2">
            <div class="head">
              <p>
                <span className="heading">Saved Add Ons. </span>
                You have to Add product to save this Add Ons data on your
                server. This is <span>temporary</span>.
              </p>
            </div>
            <div className="remove_btn">
              <input type="button" value="Remove"></input>
            </div>
            <div class="order_table_info">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="add_reset_btn">
          <div class="reset">
           <input type="button" value="Reset" />
          </div>
          <div class="add_product">
           <input type="button" value="Add Product" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Messages;

const selectinfocategory = [
  { label: 'Lunch', },
  { label: 'Soup & Noodle', },
  { label: 'Side Dishes', },
  { label: 'Sweeti', },
  { label: 'Drink', },
  { label: "Dinner", },
];
const choose_add_ons = [
  { label: 'Paneer Pizza', },
]