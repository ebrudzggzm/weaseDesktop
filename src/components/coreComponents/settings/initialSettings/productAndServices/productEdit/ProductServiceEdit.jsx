import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { useState } from "react";
import productWorker from "../../../../../../worklayer/productWorker";
import alertMessage from "../../../../../../hooks/alertMessage";
import alertError from "../../../../../../hooks/alertError";

const ProductServiceEdit = ({
  setOpenProductServiceEdit,
  productService,
  countryCodes,
  unitsCodes,
  currencyCodes,
  listFamily,
}) => {
  //SELECT FAMILY ID FOR GROUP STATE

  //SELECT GROUP ID FOR SUBGROUP STATE
  const [selectedGroupId, setSelectedGroupId] = useState();

  const [x, setX] = useState();
  const [y, setY] = useState();
  const [z, setZ] = useState();
  const [subGroupId, setSubGroupId] = useState();
  const [productType, setProductType] = useState();
  const [selectedCountry, setCountry] = useState();
  const [selectedCurrency, setCurrency] = useState();
  const [selectedUnits, setUnits] = useState();
  const [selectedUnitsPrice, setUnitsPrice] = useState();

  //FOR ADDSUBMODALGROUP COMPONENT GET GROUP FOR FAMİLY ID
  useEffect(() => {
    if (x !== undefined) {
      productWorker
        .getProductGroupProductFamilyIdList(x)
        .then((res) => {
          setY(res.data.items);
        })
        .catch((err) => {
          console.log(err);
          alertError({
            error: [{ error: "Product Group Error " }],
          });
        });
    }
  }, [x]);

  useEffect(() => {
    if (selectedGroupId !== undefined || x !== undefined) {
      productWorker
        .getProductSubGroupProductGroupIdList(
          String(x),
          String(selectedGroupId)
        )
        .then((res) => {
          setZ(res.data.items);
        })
        .catch((err) => {
          console.log(err);
          alertError({
            error: [{ error: "Product Group Error " }],
          });
        });
    }
  }, [selectedGroupId]);

  const listGroupId = y?.map((param, key) => {
    param.label = param.name;

    return param;
  });

  const listSubGroupId = z?.map((param, key) => {
    param.label = param.name;

    return param;
  });

  const nameRef = React.useRef();
  const descRef = React.useRef();

  const handleProductUpdate = () => {
    let obj = {
      id: Number(productService.data.id),
      productFamilyId: Number(x),
      productGroupId: Number(selectedGroupId),
      productSubGroupId: Number(subGroupId),
      productType: Number(productType),
      name: String(nameRef?.current.value),
      description: String(descRef?.current.value),
      unitId: Number(selectedUnits),
      numberOfUnit: Number(),
      unitPrice: Number(selectedUnitsPrice),
      countryId: Number(selectedCountry),
      currencyId: Number(selectedCurrency),
    };

    productWorker
      .updateProduct(obj)
      .then((res) => {
        console.log(res);
        alertMessage({
          data: [{ data: "Product Updated " }],
        });
      })
      .catch((err) => {
        console.log(err);
        alertError({
          error: [{ error: "Product Not Updated " }],
        });
      });
  };

  return (
    <div className="mt-3">
      <div className="row">
        <div className="col-sm-6 mb-3">Update Product & Service</div>
      </div>
      <div className="form-group mt-3 row">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
          Family
        </label>
        <div className="col-sm-10 mb-3">
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
          Group
        </label>
        <div className="col-sm-10 mb-3">
          <Select
            onChange={(e) => {
              const val = e.id;
              setSelectedGroupId(val);
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
          SubGroup
        </label>
        <div className="col-sm-10 mb-3">
          <Select
            onChange={(e) => {
              const val = e.id;
              setSubGroupId(e.id);
            }}
            menuPlacement="auto"
            menuPosition="fixed"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "100%",
              }),
            }}
            options={listSubGroupId}
          />
        </div>
        <label htmlFor="staticEmail" className="col-sm-2  col-form-label">
          Type
        </label>
        <div className="col-sm-10  mb-3">
          <Select
            onChange={(e) => {
              const val = e.value;
              setProductType(val);
            }}
            menuPlacement="auto"
            menuPosition="fixed"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "100%",
              }),
            }}
            options={[
              { label: "Product", value: 1 },
              { label: "Service", value: 2 },
            ]}
          />
        </div>
        <label htmlFor="staticEmail" className="col-sm-2  col-form-label">
          Name
        </label>
        <div className="col-sm-10 ">
          <input
            ref={nameRef}
            type="text"
            className="form-control"
            id="staticEmail"
            placeholder={productService.data.name}
            onClick={(e) => {
              e.target.placeholder = "";
            }}
          />
        </div>
        <label htmlFor="staticEmail" className="col-sm-2 mt-3 col-form-label">
          Country
        </label>
        <div className="col-sm-10 mt-3">
          <Select
            onChange={(e) => {
              const val = e.id;
              setCountry(val);
            }}
            menuPlacement="auto"
            menuPosition="fixed"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "100%",
              }),
            }}
            options={countryCodes}
          />
        </div>
        <label htmlFor="staticEmail" className="col-sm-2 mt-3 col-form-label">
          Currency
        </label>
        <div className="col-sm-10 mt-3">
          <Select
            onChange={(e) => {
              const val = e.id;
              setCurrency(val);
            }}
            menuPlacement="auto"
            menuPosition="fixed"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "100%",
              }),
            }}
            options={currencyCodes}
          />
        </div>
        <label htmlFor="staticEmail" className="col-sm-2 mt-3 col-form-label">
          Units
        </label>
        <div className="col-sm-10 mt-3">
          <Select
            onChange={(e) => {
              const val = e.id;
              setUnits(val);
            }}
            menuPlacement="auto"
            menuPosition="fixed"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "100%",
              }),
            }}
            options={unitsCodes}
          />
        </div>
        <label htmlFor="staticEmail" className="col-sm-2 mt-3 col-form-label">
          Units Price
        </label>
        <div className="col-sm-10 mt-4 ">
          <input
            onChange={(e) => {
              setUnitsPrice(e.target.value);
            }}
            type="number"
            className="form-control"
            id="staticEmail"
            onClick={(e) => {
              e.target.placeholder = "";
            }}
            placeholder={productService.data.unitPrice}
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
            placeholder={productService.data.description}
            onClick={(e) => {
              e.target.placeholder = "";
            }}
          />
        </div>
      </div>
      <div className="mt-4  productFamilyAddCompButtonGroup">
        <button
          onClick={() => {
            setOpenProductServiceEdit({
              data: null,
              status: false,
            });
          }}
          className="productAndServiceConfirmButton"
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <button
          onClick={handleProductUpdate}
          className="productAndServiceConfirmButton"
        >
          <i className="bi bi-save"></i>
        </button>
      </div>
    </div>
  );
};

ProductServiceEdit.propTypes = {
  productService: PropTypes.object,
  setOpenProductServiceEdit: PropTypes.func,
  countryCodes: PropTypes.array,
  unitsCodes: PropTypes.array,
  currencyCodes: PropTypes.array,
};

export default ProductServiceEdit;
