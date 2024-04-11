import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import { useSelector } from "react-redux";

const Organization = () => {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => state.auth);

  const getOrganization = async () => {
    try {
      if (user.role === "donar") {
        const { data } = await API.get("/inventory/get-organization");
        if (data?.success) {
          setData(data?.organizations);
        }
      } else if (user.role === "hospital") {
        const { data } = await API.get(
          "/inventory/get-organization-for-hospital"
        );
        if (data?.success) {
          setData(data?.organizations);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(data);
  useEffect(() => {
    getOrganization();
  }, [user]);
  return (
    <Layout>
      <div className="container mt-4">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((record) => (
              <tr key={record._id}>
                <td>
                  {record.hospitalName || record.organisationName + " (ORG)"}
                </td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{record.address}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Organization;
