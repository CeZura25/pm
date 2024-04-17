import { FormRow, FormRowSelect } from "../components";
import { Form, useNavigation, redirect } from "react-router-dom";
import React from 'react'

<link rel="stylesheet" href="form.css"></link>

const Dash = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Edit Project
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Create new project
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Form method="post">
                <div className="form-center">
                  <FormRow
                    type="text"
                    name="firstName"
                    labelText="First Name"
                    defaultValue={"Ralph"}
                  />
                  <FormRow
                    type="text"
                    labelText="Last Name"
                    name="lastName"
                    defaultValue={"Talplacido"}
                  />
                  <FormRow
                    type="email"
                    labelText="Email"
                    name="email"
                    defaultValue={"ralph.sabalo@gmail.com"}
                  />
                  <FormRow
                    type="password"
                    labelText="Password"
                    name="password"
                    defaultValue={"password"}
                  />
                  <br />
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn form-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Creating" : "Create Project"}
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
  <label for="pname">Peoject Name</label>
  <input type="text" id="pname" class="form-control" placeholder="" />
</div>
<div class="form-group">
  <label for="pmanager">Project MAnager</label>
  <input type="text" id="pmanager" class="form-control" placeholder="" />
</div>
<div class="form-group">
  <label for="tm">Team Members</label>
  <input type="text" id="tm" class="form-control" placeholder="" />
</div>
<div class="form-group">
  <label for="pds">PDS</label>
  <input type="date" id="pds" class="form-control" placeholder="" />
</div>
<div class="form-group">
  <label for="pde">PDE</label>
  <input type="date" id="pde" class="form-control" placeholder="" />
</div>
<div class="form-group">
  <label for="ads">ADS</label>
  <input type="date" id="ads" class="form-control" placeholder="" />
</div>
<div class="form-group">
  <label for="ade">ADE</label>
  <input type="date" id="ade" class="form-control" placeholder="" />
</div>
  </div>
  
    
  );
}

export default Dash
