import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { useState } from "react";
import productWorker from "../../../../../../worklayer/productWorker";
import alertMessage from "../../../../../../hooks/alertMessage";
import alertError from "../../../../../../hooks/alertError";

const ProductGroupEdit = ({ group, setOpenProductGroupEdit, listFamily }) => {
  const [family, setFamily] = useState();

  const nameRef = React.useRef();
  const descRef = React.useRef();

  const handleSubGroupUpdate = () => {
    let obj = {
      id: Number(group.data.id),
      productFamilyId: Number(family),
      name: String(nameRef.current.value),
      description: String(descRef.current.value),
    };

    productWorker
      .updateProductGroup(obj)
      .then((res) => {
        alertMessage({
          data: [{ data: "Product Group Updated " }],
        });
      })
      .catch((err) => {
        alertError({
          error: [{ error: "Product Group Not Updated " }],
        });
      });
  };

  return (
    <div>
      <div>
        <div className="form-group mt-2 row">
          <div className="row">
            <div className="col-sm-6 mb-3">Update Product Group</div>
          </div>
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Product Family
          </label>
          <div className="col-sm-10">
            <Select
              onChange={(e) => {
                const val = e.id;
                setFamily(e.id);
              }}
              menuPlacement="auto"
              menuPosition="fixed"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: "100%",
                }),
              }}
              options={listFamily}
            />
          </div>
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              ref={nameRef}
              type="text"
              className="form-control"
              id="staticEmail"
              placeholder={group.data.name}
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
              type="text"
              className="form-control"
              id="inputPassword"
              placeholder={group.data.description}
              onClick={(e) => {
                e.target.placeholder = "";
              }}
            />
          </div>
        </div>
        <div className="mt-4  productFamilyAddCompButtonGroup">
          <button
            onClick={() => {
              setOpenProductGroupEdit({
                data: null,
                status: false,
              });
            }}
            className="productAndServiceConfirmButton"
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <button
            onClick={handleSubGroupUpdate}
            className="productAndServiceConfirmButton"
          >
            <i className="bi bi-save"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

ProductGroupEdit.propTypes = {
  group: PropTypes.object,
  setOpenProductGroupEdit: PropTypes.func,
  listFamily: PropTypes.array,
};

export default ProductGroupEdit;
