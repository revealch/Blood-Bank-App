import moment from 'moment';
import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout';
import API from '../../services/API';
import { toast } from 'react-toastify';

const HospitalList = () => {
  const [data, setData] = useState([]);

  const getHospital = async () => {
    try {
      const { data } = await API.get("/admin/hospital-list");
      console.log(data);
      if (data?.success) {
        setData(data?.hospitalData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(data);
  useEffect(() => {
    getHospital();
  }, []);
  const deleteHospital=async(id)=>{
    try {
      let answer = window.prompt(
        "Are You SUre Want To Delete This Donar",
        "Sure"
      );
      if (!answer) return;
      const { data } = await API.delete(`/admin/delete-donar-hospital-org/${id}`);
      toast(data?.message)
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <Layout>
      <div className="container mt-4">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((record) => (
              <tr key={record._id}>
                <td>{record.hospitalName}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteHospital(record._id)}
                  >
                    Delete
                  </button>
                </td>
                

              </tr>
            ))}
          </tbody>{" "}
        </table>
      </div>
    </Layout>
  );
}

export default HospitalList
