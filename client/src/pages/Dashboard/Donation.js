import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import API from "../../services/API";

const Donation = () => {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const getDonation = async () => {
    try {
      const { data } = await API.post("/inventory/get-inventory-hospital", {
        filters: {
          inventoryType: "in",
          donar: user?._id,
        },
      });
      if (data?.success) {
        setData(data?.inventory);
        //console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(data);
  useEffect(() => {
    getDonation();
  }, []);
  return (
    <Layout>
      <div className="container mt-4">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory type</th>
              <th scope="col">Email</th>
              <th scope="col">Quantity</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.email}</td>
                <td>{record.quantity}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Donation;
