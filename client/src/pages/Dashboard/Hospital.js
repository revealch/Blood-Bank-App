import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";

const Hospital = () => {
  const [data, setData] = useState([]);

  const getHospital = async () => {
    try {
      const { data } = await API.get("/inventory/get-hospital");
      console.log(data);
      if (data?.success) {
        setData(data?.hospital);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHospital();
  }, []);
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

export default Hospital;
