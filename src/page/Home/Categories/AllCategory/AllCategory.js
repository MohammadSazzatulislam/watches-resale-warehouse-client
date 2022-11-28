import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";
import Modal from "../../../../Components/Modal/Modal";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import AllProductCard from "../AllProductCard/AllProductCard";

const AllCategory = () => {
  const [modalData, setModalData] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/product/${name}`, {
      headers: {
        authorization: localStorage.getItem("watchToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, [name, modalData]);

  if (!allProducts) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-28">
      <div>
        <h1 className="lg:text-3xl font-bold  text-2xl border-l-8 border-l-blue-800 mb-28">Our <br /> Letest Products</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4">
        {allProducts?.map((product) => (
          <AllProductCard
            setModalData={setModalData}
            key={product._id}
            product={product}
          ></AllProductCard>
        ))}
        {allProducts && modalData && (
          <>
            <Modal modalData={modalData} setModalData={setModalData}></Modal>
          </>
        )}
      </div>
    </div>
  );
};

export default AllCategory;
