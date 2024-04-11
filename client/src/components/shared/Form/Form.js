import React, { useState } from "react";
import { Link } from "react-router-dom"
;import InputType from "./inputType";
import { handleLogin, handleRegister } from "../../../services/authservice";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          if (formType === "login") return handleLogin(e, email, password,role);
          else if (formType === "register")
            return handleRegister(
              e,
              email,
              password,
              role,
              name,
              organizationName,
              hospitalName,
              address,
              phone
            );
        }}
      >
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        <div className="d-flex md-3">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donarRadio"
              value={"donar"}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label htmlFor="donarRadio" className="form-check-label">
              donar
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organizationRadio"
              value={"organization"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="organizationRadio" className="form-check-label">
              organization
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="adminRadio" className="form-check-label">
              admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="hospitalRadio" className="form-check-label">
              hospital
            </label>
          </div>
        </div>
        {(() => {
          //eslint-disable-next-line
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText={"email"}
                    labelFor={"ForEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onchange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"password"}
                    labelFor={"ForPassword"}
                    inputType={"Password"}
                    name={"password"}
                    value={password}
                    onchange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  {(role === "donar" || role === "admin") && (
                    <InputType
                      labelText={"name"}
                      labelFor={"ForName"}
                      inputType={"name"}
                      name={"name"}
                      value={name}
                      onchange={(e) => setName(e.target.value)}
                    />
                  )}
                  {role === "organization" && (
                    <InputType
                      labelText={"organizationName"}
                      labelFor={"ForOrganizationName"}
                      inputType={"organizationName"}
                      name={"organizationName"}
                      value={organizationName}
                      onchange={(e) => setOrganizationName(e.target.value)}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      labelText={"hospitalName"}
                      labelFor={"ForHospitalName"}
                      inputType={"hospitalName"}
                      name={"hospitalName"}
                      value={hospitalName}
                      onchange={(e) => setHospitalName(e.target.value)}
                    />
                  )}
                  <InputType
                    labelText={"email"}
                    labelFor={"ForEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onchange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"password"}
                    labelFor={"ForPassword"}
                    inputType={"Password"}
                    name={"password"}
                    value={password}
                    onchange={(e) => setPassword(e.target.value)}
                  />

                  <InputType
                    labelText={"address"}
                    labelFor={"ForAddress"}
                    inputType={"address"}
                    name={"address"}
                    value={address}
                    onchange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    labelText={"phone"}
                    labelFor={"ForPhone"}
                    inputType={"phone"}
                    name={"phone"}
                    value={phone}
                    onchange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}

        <div className="d-felx flex-row justify-content-between">
          {formType === "login" ? (
            <p>
              Not registered yet ? Register
              <Link to="/register"> Here!</Link>
            </p>
          ) : (
            <p>
              Already registered ? Login
              <Link to="/login"> Here!</Link>
            </p>
          )}
          <button>{submitBtn}</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
