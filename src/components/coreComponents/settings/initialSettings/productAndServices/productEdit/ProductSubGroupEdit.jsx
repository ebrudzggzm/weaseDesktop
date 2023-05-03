import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { useState } from "react";
import productWorker from "../../../../../../worklayer/productWorker";
import alertMessage from "../../../../../../hooks/alertMessage";
import alertError from "../../../../../../hooks/alertError";

const ProductSubGroupEdit = ({
  subGroup,
  setOpenProductSubGroupEdit,
  listFamily,
}) => {
  const [listGroupForFamilyId, setListGroupForFamilyId] = useState();
  const [x, setX] = useState();
  const [y, setY] = useState();

  //FOR ADDSUBMODALGROUP COMPONENT GET GROUP FOR FAMİLY ID
  useEffect(() => {
    if (x !== undefined) {
      productWorker
        .getProductGroupProductFamilyIdList(x)
        .then((res) => {
          setListGroupForFamilyId(res.data.items);
        })
        .catch((err) => {
          console.log(err);
          alertError({
            error: [{ error: "Product Group Error " }],
          });
        });
    }
  }, [x]);

  const listGroupId = listGroupForFamilyId?.map((param, key) => {
    param.label = param.name;

    return param;
  });

  const nameRef = React.useRef();
  const descRef = React.useRef();

  const handleSubGroupUpdate = () => {
    let obj = {
      id: Number(subGroup.data.id),
      productFamilyId: Number(x),
      productGroupId: Number(y),
      name: String(nameRef.current.value),
      description: String(descRef.current.value),
    };

    productWorker
      .updateProductSubGroup(obj)
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
      <div className="form-group mt-2 row">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
          Product Family
        </label>
        <div className="col-sm-10">
          <Select
            onChange={(e) => {
              const val = e.id;
              setX(e.id);
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
          Product Group
        </label>
        <div className="col-sm-10">
          <Select
            onChange={(e) => {
              const val = e.id;
              setY(e.id);
            }}
            menuPlacement="auto"
            menuPosition="fixed"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "100%",
              }),
            }}
            options={listGroupId}
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
            placeholder={subGroup.data.name}
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
            placeholder={subGroup.data.description}
            onClick={(e) => {
              e.target.placeholder = "";
            }}
          />
        </div>
      </div>
      <div className="mt-4  productFamilyAddCompButtonGroup">
        <button
          onClick={() => {
            setOpenProductSubGroupEdit({
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
  );
};

ProductSubGroupEdit.propTypes = {
  subGroup: PropTypes.object,
  setOpenProductSubGroupEdit: PropTypes.func,
};

export default ProductSubGroupEdit;
