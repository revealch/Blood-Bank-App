import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../../components/shared/Spinner";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{toast(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assets/images/banner2.jpg" alt="RegisterImage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formType={"register"}
              submitBtn={"register"}
              formTitle={"Register Page"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
