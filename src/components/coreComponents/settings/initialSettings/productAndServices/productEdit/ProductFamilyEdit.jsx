import React from "react";
import PropTypes from "prop-types";
import productWorker from "../../../../../../worklayer/productWorker";
import alertMessage from "../../../../../../hooks/alertMessage";
import alertError from "../../../../../../hooks/alertError";

const ProductFamilyEdit = ({ family, setOpenProductFamilyEdit }) => {
  const nameRef = React.useRef();
  const descRef = React.useRef();

  const handleUpdateProductFamily = () => {
    let obj = {
      id: Number(family.data.id),
      name: String(nameRef.current.value),
      description: String(descRef.current.value),
    };

    productWorker
      .updateProductFamily(obj)
      .then((res) => {
        console.log(res);
        alertMessage({
          data: [{ data: "Product Family Updated " }],
        });
      })
      .catch((err) => {
        console.log(err);
        alertError({
          error: [{ error: "Product Family Not Updated " }],
        });
      });
  };

  return (
    <div className="mt-4 mb-2">
      <div className="row">
        <div className="col-sm-6 mb-3">Update Product Family</div>
      </div>
      <div className="form-group mt-2 row">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-10">
          <input
            ref={nameRef}
            type="text"
            placeholder={family.data.name}
            className="form-control"
            onClick={(e) => {
              e.target.placeholder = "";
            }}
          />
        </div>
      </div>
      <div className="form-group mt-4 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Description
        </label>
        <div className="col-sm-10">
          <textarea
            ref={descRef}
            placeholder={family.data.description}
            type="text"
            className="form-control"
            id="inputPassword"
            onClick={(e) => {
              e.target.placeholder = "";
            }}
          />
        </div>
      </div>
      <div className="mt-4  productFamilyAddCompButtonGroup">
        <button
          onClick={() => {
            setOpenProductFamilyEdit({
              data: null,
              status: false,
            });
          }}
          className="productAndServiceConfirmButton"
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <button
          onClick={handleUpdateProductFamily}
          className="productAndServiceConfirmButton"
        >
          <i className="bi bi-save"></i>
        </button>
      </div>
    </div>
  );
};

ProductFamilyEdit.propTypes = {
  family: PropTypes.object,
  setOpenProductFamilyEdit: PropTypes.func,
};
export default ProductFamilyEdit;
