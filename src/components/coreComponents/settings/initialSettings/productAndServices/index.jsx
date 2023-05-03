/******************************************************************************
 * /////////////////////////////--------- BENİ OKU ---------///////////////////////////////////
 *
 * INITIAL SETTINGS IÇERİSİNDE BULUNAN PRODUCT AND SERVICE COMPONENTİNİN BÜTÜN
 * ALT KOMPONENTLERİ (TOPLAM 8 KOMPONENT), KLASÖR YAPISINI ŞİŞİRMEMEK VE PROPS KALABALIĞINDAN
 * KURTULMAK AMACI İLE,
 * BU SAYFADA TANIMLANMIŞTIR BÜTÜN İŞLEMLER BU KOMPONENT İÇERİSİNDE DÖNMEKTEDİR.
 * BU SAYFA BELİRLENMİŞ GRUPLARA SAHİPTİR
 * -----------------------------------------------------
 * 0.USE-STATE GRUPLARI (TÜM STATELER BURADA TUTULMAKTADIR)
 * 1.GRUP ADD MODALS (EKLEME MODALLARI)
 * 2.GRUP TABLE MODALS (TABLO MODALLARI)
 * 3.GRUP HANDLE ADD FUNCTIONS (EKLEME FONKSIYONLARI)
 * 4.GRUP HANDLE DELETE FUNCTIONS (SILME FONKSIYONLARI)
 * 5.USE-EFFECT GRUPLARI (---- GET ---- İSTEKLERİ İÇİN)
 * 6.TOGGLE GRUPLARI (KOMPNENTLER ARASI GEÇİŞİ SAĞLAMAK İÇİN)
 * 7.OBJECT-KEY DÖNÜŞÜM FONKSIYONLARI (BACKEND İLE DATA UYUMUNU AYARLAYABİLMEK İÇİN)
 * 8.WORKER'LAR (ÇEŞİTLİ FONKSİYONLARIN İÇERİSİNDE KULLANILMAKTADIR)
 *
 * ///////////////////////////////////////////////////////////////////////////////////
 *******************************************************************************/

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import DefaultIcon from "../../../../dynamicComponents/Icons/DefaultIcon";
import GeneralButton from "../../../../dynamicComponents/buttons/GeneralButton";
import DropDownModal from "../../../../dynamicComponents/modals/DropDownModal";
import Select from "react-select";
import CountryFlags from "../../../../dynamicComponents/countryFlag/CountryFlags";

//WorkLayer
import productWorker from "../../../../../worklayer/productWorker";
import countryWorker from "../../../../../worklayer/countryWorker";
import currencyWorker from "../../../../../worklayer/currencyWorker";
import unitWorker from "../../../../../worklayer/unitWorklayer";

//Alerts
import alertMessage from "../../../../../hooks/alertMessage";
import alertError from "../../../../../hooks/alertError";

//Edit Components
import ProductFamilyEdit from "./productEdit/ProductFamilyEdit";
import ProductGroupEdit from "./productEdit/ProductGroupEdit";
import ProductSubGroupEdit from "./productEdit/ProductSubGroupEdit";
import ProductServiceEdit from "./productEdit/ProductServiceEdit";

const ProductAndServices = ({ setInitialContent }) => {
  //TOGGLE STATE
  const [productFamily, setProductFamily] = useState(false);
  const [productGroup, setProductGroup] = useState(false);
  const [productSubGroup, setProductSubGroup] = useState(false);
  const [productService, setProductService] = useState(false);
  const [productFamilyAddModalOpen, setProductFamilyAddModalOpen] =
    useState(false);
  const [productGroupAddModalOpen, setProductGroupAddModalOpen] =
    useState(false);

  const [productSubGroupAddModalOpen, setProductSubGroupAddModalOpen] =
    useState(false);

  const [productAddModalOpen, setProductAddModalOpen] = useState(false);

  //COUNTRY-CURRENCY-UNITS STATES
  const [allUnits, setAllUnits] = useState([]);
  const [allCountry, setAllCountry] = useState([]);
  const [allCurrencies, setAllCurrencies] = useState([]);

  //ADD STATES
  const [addProductFamily, setAddProductFamily] = useState({
    name: null,
    description: null,
  });

  const [addProductGroup, setAddProductGroup] = useState({
    productFamilyId: null,
    name: null,
    description: null,
  });

  const [addProductSubGroup, setAddProductSubGroup] = useState({
    productFamilyId: null,
    productGroupId: null,
    name: null,
    description: null,
  });

  const [addProduct, setAddProduct] = useState({
    productFamilyId: null,
    productGroupId: null,
    productSubGroupId: null,
    productType: null,
    name: null,
    description: null,
    unitId: null,
    numberOfUnit: null,
    unitPrice: null,
    countryId: null,
    currencyId: null,
  });

  //EDIT COMPONENTS STATE
  const [openProductFamilyEdit, setOpenProductFamilyEdit] = useState({
    data: null,
    status: false,
  });

  const [openProductGroupEdit, setOpenProductGroupEdit] = useState({
    data: null,
    status: false,
  });

  const [openProductSubGroupEdit, setOpenProductSubGroupEdit] = useState({
    data: null,
    status: false,
  });

  const [openProductServiceEdit, setOpenProductServiceEdit] = useState({
    data: null,
    status: false,
  });

  //LIST STATES
  const [listProducts, setListProducts] = useState([]);
  const [listProductFamily, setListProductFamily] = useState();
  const [listProductGroup, setListProductGroup] = useState();
  const [listProductSubGroup, setListProductSubGroup] = useState();
  const [listGroupForFamilyId, setListGroupForFamilyId] = useState();
  const [listSubGroupForFamilyId, setListSubGroupForFamilyId] = useState();
  //SELECT FAMILY ID FOR GROUP STATE
  const [selectedFamilyId, setSelectedFamilyId] = useState();

  //SELECT GROUP ID FOR SUBGROUP STATE
  const [selectedGroupId, setSelectedGroupId] = useState();

  //DELETE TRGIGGER FOR COMPONENT RELOAD
  const [deleteTrigger, setDeleteTrigger] = useState(false);

  //NULL STATE FUNCTIONS
  const nullProductFamily = () => {
    setAddProductFamily({
      name: null,
      description: null,
    });
  };

  const nullProductGroupFamily = () => {
    setAddProductGroup({
      productFamilyId: null,
      name: null,
      description: null,
    });
  };

  const nullProductSubGroup = () => {
    setAddProduct({
      productFamilyId: null,
      productGroupId: null,
      name: null,
      description: null,
    });
  };

  const nullProductAdd = () => {
    setAddProductSubGroup({
      productFamilyId: null,
      productGroupId: null,
      productSubGroupId: null,
      productType: null,
      name: null,
      description: null,
      unitId: null,
      numberOfUnit: null,
      unitPrice: null,
      countryId: null,
      currencyId: null,
    });
  };

  //FOR ADDSUBMODALGROUP COMPONENT GET GROUP FOR FAMİLY ID
  useEffect(() => {
    if (selectedFamilyId !== undefined) {
      productWorker
        .getProductGroupProductFamilyIdList(String(selectedFamilyId))
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
  }, [selectedFamilyId]);

  useEffect(() => {
    if (selectedFamilyId !== undefined || selectedGroupId !== undefined) {
      productWorker
        .getProductSubGroupProductGroupIdList(
          String(selectedFamilyId),
          String(selectedGroupId)
        )
        .then((res) => {
          setListSubGroupForFamilyId(res.data.items);
        })
        .catch((err) => {
          console.log(err);
          alertError({
            error: [{ error: "Product Group Error " }],
          });
        });
    }
  }, [selectedGroupId]);

  // KEY TRANSFORMS FOR SELECT COMPONENTS-----------------------------------
  //Countries
  const countryCodes = allCountry.map((param) => {
    param.label = (
      <CountryFlags flag={param.iso2.toLowerCase()} val={param.name} />
    );
    param.value = param.name;

    return param;
  });

  //Currencies
  const currencyCodes = allCurrencies.map((param) => {
    param.label = param.code;
    param.value = param.name;

    return param;
  });

  //Units
  const unitsCodes = allUnits.map((param) => {
    param.label = param.name;
    param.value = param.name;

    return param;
  });
  // -----------------------------------------------------------------------

  useEffect(() => {
    unitWorker
      .getUnitByCompanyId()
      .then((res) => {
        setAllUnits(res.data.items);
      })
      .catch((err) => {
        console.log(err);
        alertError({
          data: [{ error: "Units Not Listed  " }],
        });
      });

    productWorker
      .getProductFamily()
      .then((res) => {
        setListProductFamily(res.data.items);
      })
      .catch((err) => {
        console.log(err);
        alertError({
          data: [{ error: "Product Family Not Listed  " }],
        });
      });

    productWorker
      .getProductGroup()
      .then((res) => {
        setListProductGroup(res.data.items);
      })
      .catch((err) => {
        console.log(err);
        alertError({
          data: [{ error: "Product Group Not Listed " }],
        });
      });

    productWorker
      .getProductSubGroup()
      .then((res) => {
        setListProductSubGroup(res.data.items);
      })
      .catch((err) => {
        console.log(err);
        alertError({
          data: [{ error: "Product SubGroup Not Listed " }],
        });
      });

    productWorker
      .getProducts()
      .then((res) => {
        setListProducts(res.data.items);
      })
      .catch((err) => {
        console.log(err);
        alertError({
          data: [{ data: "Products Not Listed" }],
        });
      });

    countryWorker
      .getCountryList()
      .then((res) => {
        setAllCountry(res.data.items);
      })
      .catch((err) => {
        console.log(err);
        alertError({
          data: [{ error: "Country Not Listed " }],
        });
      });

    currencyWorker
      .getCurrencyList()
      .then((res) => {
        setAllCurrencies(res.data.items);
      })
      .catch((err) => {
        alertError({
          data: [{ error: "Currency Not Listed " }],
        });
      });
  }, [
    productFamilyAddModalOpen,
    productGroupAddModalOpen,
    productSubGroupAddModalOpen,
    productAddModalOpen,
    deleteTrigger,
    openProductFamilyEdit,
    openProductGroupEdit,
    openProductSubGroupEdit,
    openProductServiceEdit,
  ]);

  const tableRowFont = "8px";

  const productAndServiceIcons = {
    color: "black",
    fontSize: "30px",
  };

  //***************************** Return Back Menu
  const returnAddEditMenu = () => {
    setInitialContent("initialSettings");
  };

  const openProductfamily = () => {
    setProductFamily(!productFamily);
  };

  const openProductGroup = () => {
    setProductGroup(!productGroup);
  };

  const openProductSubGroup = () => {
    setProductSubGroup(!productSubGroup);
  };

  const openProductService = () => {
    setProductService(!productService);
  };

  //******************************** TOGGLE FUNCS --> ADD MODALS - TABLE MODALS
  const productFamilyAddModalOpenFunc = () => {
    setProductFamilyAddModalOpen(!productFamilyAddModalOpen);
  };

  const productGroupAddModalOpenFunc = () => {
    setProductGroupAddModalOpen(!productGroupAddModalOpen);
  };

  const productSubGroupAddModalOpenFunc = () => {
    setProductSubGroupAddModalOpen(!productSubGroupAddModalOpen);
  };

  const productAddModalOpenFunc = () => {
    setProductAddModalOpen(!productAddModalOpen);
  };

  //***************************** HANDLE DELETE FUNCTIONS
  const handleDeleteFamily = (e) => {
    const id = e.id;

    const obj = {
      id: id,
    };

    productWorker
      .deleteProductFamily(obj)
      .then((res) => {
        alertMessage({
          data: [{ data: "Product Family Deleted " }],
        });
        setDeleteTrigger(!deleteTrigger);
      })
      .catch((err) => {
        alertError({
          data: [{ data: "Product Family Not Deleted " }],
        });
        console.log(err);
      });
  };

  const handleDeleteGroup = (e) => {
    const id = e.id;
    const obj = {
      id: id,
    };
    productWorker
      .deleteProductGroup(obj)
      .then((res) => {
        alertMessage({
          data: [{ data: "Product Group Deleted " }],
        });
        setDeleteTrigger(!deleteTrigger);
      })
      .catch((err) => {
        console.log(err);
        alertError({
          data: [{ data: "Product Group Not Deleted " }],
        });
      });
  };

  const handleDeleteSubGroup = (e) => {
    const id = e.id;
    const obj = {
      id: id,
    };
    productWorker
      .deleteProductSubGroup(obj)
      .then((res) => {
        alertMessage({
          data: [{ data: "Product SubGroup Deleted " }],
        });
        setDeleteTrigger(!deleteTrigger);
      })
      .catch((err) => {
        console.log(err);
        alertError({
          data: [{ data: "Product SubGroup Not Deleted " }],
        });
      });
  };

  const handleDeleteProducts = (e) => {
    console.log(e);
    const id = e.id;
    const obj = {
      id: Number(id),
    };

    productWorker
      .deleteProducts(obj)
      .then((res) => {
        alertMessage({
          data: [{ data: "Products Deleted " }],
        });
        setDeleteTrigger(!deleteTrigger);
      })
      .catch((err) => {
        console.log(err);
        alertError({
          data: [{ data: "Products Not Deleted " }],
        });
      });
  };

  //************************************ ADD MODALS
  const productFamilyAddModal = () => {
    return (
      <>
        <div className="mt-4 mb-2">
          <div className="form-group mt-2 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                onChange={(e) => {
                  const val = e.target.value;
                  setAddProductFamily({ ...addProductFamily, name: val });
                }}
                type="text"
                className="form-control"
                id="staticEmail"
              />
            </div>
          </div>
          <div className="form-group mt-4 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <textarea
                onChange={(e) => {
                  const val = e.target.value;
                  setAddProductFamily({
                    ...addProductFamily,
                    description: val,
                  });
                }}
                type="text"
                className="form-control"
                id="inputPassword"
                placeholder=""
              />
            </div>
          </div>
          <div className="mt-4  productFamilyAddCompButtonGroup">
            <button
              onClick={productFamilyAddModalOpenFunc}
              className="productAndServiceConfirmButton"
            >
              <i className="bi bi-arrow-left"></i>
            </button>
            <button
              onClick={() => {
                HandleAddProductFamily();
              }}
              className="productAndServiceConfirmButton"
            >
              <i className="bi bi-save"></i>
            </button>
          </div>
        </div>
      </>
    );
  };

  const productGroupAddModal = () => {
    return (
      <>
        <div>
          <div className="form-group mt-2 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Product Family
            </label>
            <div className="col-sm-10">
              <Select
                onChange={(e) => {
                  const val = e.id;
                  setAddProductGroup({
                    ...addProductGroup,
                    productFamilyId: val,
                  });
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
                onChange={(e) => {
                  const val = e.target.value;
                  setAddProductGroup({
                    ...addProductGroup,
                    name: val,
                  });
                }}
                type="text"
                className="form-control"
                id="staticEmail"
              />
            </div>
          </div>
          <div className="form-group mt-4 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <textarea
                onChange={(e) => {
                  const val = e.target.value;
                  setAddProductGroup({
                    ...addProductGroup,
                    description: val,
                  });
                }}
                type="text"
                className="form-control"
                id="inputPassword"
                placeholder=""
              />
            </div>
          </div>
          <div className="mt-4  productFamilyAddCompButtonGroup">
            <button
              onClick={productGroupAddModalOpenFunc}
              className="productAndServiceConfirmButton"
            >
              <i className="bi bi-arrow-left"></i>
            </button>
            <button
              onClick={() => {
                HandleAddProductGroup();
              }}
              className="productAndServiceConfirmButton"
            >
              <i className="bi bi-save"></i>
            </button>
          </div>
        </div>
      </>
    );
  };

  const productSubGroupAddModal = () => {
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
                setSelectedFamilyId(e.id);
                setAddProductSubGroup({
                  ...addProductSubGroup,
                  productFamilyId: val,
                });
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
                setAddProductSubGroup({
                  ...addProductSubGroup,
                  productGroupId: val,
                });
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
              onChange={(e) => {
                const val = e.target.value;
                setAddProductSubGroup({
                  ...addProductSubGroup,
                  name: val,
                });
              }}
              type="text"
              className="form-control"
              id="staticEmail"
            />
          </div>
        </div>
        <div className="form-group mt-4 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <textarea
              onChange={(e) => {
                const val = e.target.value;
                setAddProductSubGroup({
                  ...addProductSubGroup,
                  description: val,
                });
              }}
              type="text"
              className="form-control"
              id="inputPassword"
              placeholder=""
            />
          </div>
        </div>
        <div className="mt-4  productFamilyAddCompButtonGroup">
          <button
            onClick={productSubGroupAddModalOpenFunc}
            className="productAndServiceConfirmButton"
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <button
            onClick={() => {
              HandleAddProductSubGroup();
            }}
            className="productAndServiceConfirmButton"
          >
            <i className="bi bi-save"></i>
          </button>
        </div>
      </div>
    );
  };

  const productAddModal = () => {
    return (
      <div className="mt-3">
        <div className="form-group mt-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Family
          </label>
          <div className="col-sm-10 mb-3">
            <Select
              onChange={(e) => {
                const val = e.id;
                setSelectedFamilyId(e.id);
                setAddProduct({
                  ...addProduct,
                  productFamilyId: val,
                });
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
                setAddProduct({
                  ...addProduct,
                  productGroupId: val,
                });
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
                setAddProduct({
                  ...addProduct,
                  productSubGroupId: val,
                });
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
                console.log(e);
                const val = e.value;
                setAddProduct({
                  ...addProduct,
                  productType: val,
                });
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
              onChange={(e) => {
                const val = e.target.value;
                setAddProduct({
                  ...addProduct,
                  name: val,
                });
              }}
              type="text"
              className="form-control"
              id="staticEmail"
            />
          </div>
          <label htmlFor="staticEmail" className="col-sm-2 mt-3 col-form-label">
            Country
          </label>
          <div className="col-sm-10 mt-3">
            <Select
              onChange={(e) => {
                const val = e.id;
                setAddProduct({
                  ...addProduct,
                  countryId: val,
                });
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
                setAddProduct({
                  ...addProduct,
                  currencyId: val,
                });
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
                setAddProduct({
                  ...addProduct,
                  unitId: val,
                });
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
                const val = e.target.value;
                setAddProduct({
                  ...addProduct,
                  unitPrice: val,
                });
              }}
              type="number"
              className="form-control"
              id="staticEmail"
            />
          </div>
        </div>
        <div className="form-group mt-4 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <textarea
              onChange={(e) => {
                const val = e.target.value;
                setAddProduct({
                  ...addProduct,
                  description: val,
                });
              }}
              type="text"
              className="form-control"
              id="inputPassword"
              placeholder=""
            />
          </div>
        </div>
        <div className="mt-4  productFamilyAddCompButtonGroup">
          <button
            onClick={productAddModalOpenFunc}
            className="productAndServiceConfirmButton"
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <button
            onClick={() => {
              HandleAddProduct();
            }}
            className="productAndServiceConfirmButton"
          >
            <i className="bi bi-save"></i>
          </button>
        </div>
      </div>
    );
  };

  //*************************************** TABLES
  const familyDropDown = () => {
    return (
      <DropDownModal className="productAndServicesDropDown">
        <div className="row mb-3 productAndServicesHeader">
          <DefaultIcon
            layoutStyles={{
              width: "1rem",
              marginRight: "1rem",
              cursor: "pointer",
            }}
            onClick={() => {
              setProductFamily(false);
            }}
            className="bi bi-arrow-left-circle"
          />
          <span className="addEditUserTitle">
            Product Family
            <button
              className="productAndServiceAddButton"
              onClick={() => {
                nullProductFamily();
                productFamilyAddModalOpenFunc();
              }}
            >
              {productFamilyAddModalOpen === true ? (
                ""
              ) : (
                <i
                  style={productAndServiceIcons}
                  className="bi bi-plus-square-fill"
                ></i>
              )}
            </button>
          </span>
        </div>

        {productFamilyAddModalOpen === true ? (
          productFamilyAddModal()
        ) : (
          <table className="table mt-4 table-bordered text-center ">
            <thead>
              <tr>
                <th style={{ fontSize: "10px" }} scope="col">
                  Name
                </th>
                <th style={{ fontSize: "10px" }} scope="col">
                  Description
                </th>

                <th style={{ fontSize: "10px" }} scope="col">
                  Update
                </th>
                <th style={{ fontSize: "10px" }} scope="col">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {listProductFamily.map((param, key) => {
                return (
                  <tr key={key}>
                    <td>{param.name}</td>
                    <td>{param.description}</td>
                    <td>
                      <i
                        onClick={() => {
                          setOpenProductFamilyEdit({
                            data: param,
                            status: true,
                          });
                        }}
                        className="bi bi-pencil-square"
                      ></i>
                    </td>
                    <td>
                      <i
                        onClick={() => {
                          handleDeleteFamily(param);
                        }}
                        className="bi bi-trash3"
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </DropDownModal>
    );
  };

  const groupDropDown = () => {
    return (
      <DropDownModal className="productAndServicesDropDown">
        <div className="row mb-3 productAndServicesHeader">
          <DefaultIcon
            layoutStyles={{
              width: "1rem",
              marginRight: "1rem",
              cursor: "pointer",
            }}
            onClick={() => {
              setProductGroup(false);
            }}
            className="bi bi-arrow-left-circle"
          />
          <span className="addEditUserTitle">
            Product Group{" "}
            <button
              className="productAndServiceAddButton"
              onClick={() => {
                productGroupAddModalOpenFunc();
                nullProductGroupFamily();
              }}
            >
              {productGroupAddModalOpen === true ? (
                ""
              ) : (
                <i
                  style={productAndServiceIcons}
                  className="bi bi-plus-square-fill"
                ></i>
              )}
            </button>
          </span>
        </div>

        {productGroupAddModalOpen === true ? (
          productGroupAddModal()
        ) : (
          <table className="table mt-4 table-bordered text-center ">
            <thead>
              <tr>
                <th style={{ fontSize: "10px" }} scope="col">
                  Name
                </th>
                <th style={{ fontSize: "10px" }} scope="col">
                  Product Family
                </th>
                <th style={{ fontSize: "10px" }} scope="col">
                  Description
                </th>

                <th style={{ fontSize: "10px" }} scope="col">
                  Update
                </th>
                <th style={{ fontSize: "10px" }} scope="col">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {listProductGroup.map((param, key) => {
                return (
                  <tr key={key}>
                    <td>{param.name}</td>
                    <td>{param.productFamilyName}</td>
                    <td>{param.description}</td>
                    <td>
                      <i
                        onClick={() => {
                          setOpenProductGroupEdit({
                            data: param,
                            status: true,
                          });
                        }}
                        className="bi bi-pencil-square"
                      ></i>
                    </td>
                    <td>
                      <i
                        onClick={(e) => {
                          handleDeleteGroup(param);
                        }}
                        className="bi bi-trash3"
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </DropDownModal>
    );
  };

  const subGroupDropDown = () => {
    return (
      <DropDownModal className="productAndServicesDropDown">
        <div className="row mb-3 productAndServicesHeader">
          <DefaultIcon
            layoutStyles={{
              width: "1rem",
              marginRight: "1rem",
              cursor: "pointer",
            }}
            onClick={() => {
              setProductSubGroup(false);
            }}
            className="bi bi-arrow-left-circle"
          />
          <span className="addEditUserTitle">
            Product SubGroup{" "}
            <button
              className="productAndServiceAddButton"
              onClick={() => {
                productSubGroupAddModalOpenFunc();
                nullProductSubGroup();
              }}
            >
              {productSubGroupAddModalOpen === true ? (
                ""
              ) : (
                <i
                  style={productAndServiceIcons}
                  className="bi bi-plus-square-fill"
                ></i>
              )}
            </button>
          </span>
        </div>

        {productSubGroupAddModalOpen === true ? (
          productSubGroupAddModal()
        ) : (
          <table className="table mt-4 table-bordered text-center ">
            <thead>
              <tr>
                <th style={{ fontSize: "10px" }} scope="col">
                  Name
                </th>
                <th style={{ fontSize: "10px" }} scope="col">
                  Product Family
                </th>
                <th style={{ fontSize: "10px" }} scope="col">
                  Product Group
                </th>
                <th style={{ fontSize: "10px" }} scope="col">
                  Description
                </th>

                <th style={{ fontSize: "10px" }} scope="col">
                  Update
                </th>
                <th style={{ fontSize: "10px" }} scope="col">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {listProductSubGroup.map((param, key) => {
                return (
                  <tr key={key}>
                    <td>{param.name}</td>
                    <td>{param.productFamilyName}</td>
                    <td>{param.productGroupName}</td>
                    <td>{param.description}</td>
                    <td>
                      <i
                        onClick={() => {
                          setOpenProductSubGroupEdit({
                            data: param,
                            status: true,
                          });
                        }}
                        className="bi bi-pencil-square"
                      ></i>
                    </td>
                    <td>
                      <i
                        onClick={(e) => {
                          handleDeleteSubGroup(param);
                        }}
                        className="bi bi-trash3"
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </DropDownModal>
    );
  };

  const productServiceDropDown = () => {
    return (
      <DropDownModal className="productAndServicesDropDown">
        <div className="row ">
          <DefaultIcon
            layoutStyles={{
              width: "1rem",
              marginRight: "1rem",
              cursor: "pointer",
            }}
            onClick={() => {
              setProductService(false);
            }}
            className="bi bi-arrow-left-circle"
          />
          <span className="addEditUserTitle">
            Product And Service{" "}
            <button
              className="productAndServiceAddButton"
              onClick={() => {
                productAddModalOpenFunc();
                nullProductSubGroup();
              }}
            >
              {productAddModalOpen === true ? (
                ""
              ) : (
                <i
                  style={productAndServiceIcons}
                  className="bi bi-plus-square-fill"
                ></i>
              )}
            </button>{" "}
          </span>
        </div>
        {productAddModalOpen === true ? (
          productAddModal()
        ) : (
          <div style={{ overflow: "scroll", padding: "1rem" }}>
            <div className="form-group mt-4 row">
              <table className="table  table-bordered text-center ">
                <thead>
                  <tr>
                    <th style={{ fontSize: tableRowFont }} scope="col">
                      Product Family
                    </th>
                    <th style={{ fontSize: tableRowFont }} scope="col">
                      Product Group
                    </th>
                    <th style={{ fontSize: tableRowFont }} scope="col">
                      Product Sub Group
                    </th>
                    <th style={{ fontSize: tableRowFont }} scope="col">
                      Product Type
                    </th>
                    <th style={{ fontSize: tableRowFont }} scope="col">
                      Product Name
                    </th>
                    <th style={{ fontSize: tableRowFont }} scope="col">
                      Price
                    </th>
                    <th style={{ fontSize: tableRowFont }} scope="col">
                      Currency
                    </th>
                    <th style={{ fontSize: tableRowFont }} scope="col">
                      Country
                    </th>
                    <th style={{ fontSize: tableRowFont }} scope="col">
                      Update
                    </th>
                    <th style={{ fontSize: tableRowFont }} scope="col">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listProducts.map((param, key) => {
                    return (
                      <tr key={key}>
                        <td>{param.productFamilyName}</td>
                        <td>{param.productGroupName}</td>
                        <td>{param.productSubGroupName}</td>
                        <td>{param.productTypeName}</td>
                        <td>{param.name}</td>
                        <td>{param.unitPrice}</td>
                        <td>{param.currencySymbol}</td>
                        <td>{param.countryName}</td>
                        <td>
                          <i
                            onClick={() => {
                              setOpenProductServiceEdit({
                                data: param,
                                status: true,
                              });
                            }}
                            className="bi bi-pencil-square"
                          ></i>
                        </td>
                        <td>
                          <i
                            onClick={() => {
                              handleDeleteProducts(param);
                            }}
                            className="bi bi-trash3"
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </DropDownModal>
    );
  };

  const productAndServiceButtonComponents = () => {
    return (
      <>
        <div className="row d-flex mt-3 border-bottom ">
          <DefaultIcon
            layoutStyles={{
              width: "1rem",
              marginRight: "1rem",
              cursor: "pointer",
            }}
            onClick={returnAddEditMenu}
            className="bi bi-arrow-left-circle"
          />
          <span className="addEditUserTitle mb-3">Products & Services</span>
        </div>
        <GeneralButton
          icon={
            <DefaultIcon
              iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
              className="bi bi-box-seam"
            />
          }
          text="Product Family"
          className="initialSettingButton"
          onClick={openProductfamily}
        />
        <GeneralButton
          icon={
            <DefaultIcon
              iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
              className="bi bi-collection"
            />
          }
          text="Product Group "
          className="initialSettingButton"
          onClick={openProductGroup}
        />
        <GeneralButton
          icon={
            <DefaultIcon
              iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
              className="bi bi-bag-dash"
            />
          }
          text="Product Sub Group"
          className="initialSettingButton"
          onClick={openProductSubGroup}
        />
        <GeneralButton
          icon={
            <DefaultIcon
              iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
              className="bi bi-building-gear"
            />
          }
          text="Products & Services"
          className="initialSettingButton"
          onClick={openProductService}
        />
      </>
    );
  };

  //*********************************** Select component key-changed
  const listFamily = listProductFamily?.map((param, key) => {
    param.label = param.name;

    return param;
  });

  const listGroup = listProductGroup?.map((param, key) => {
    param.label = param.name;

    return param;
  });

  const listGroupId = listGroupForFamilyId?.map((param, key) => {
    param.label = param.name;

    return param;
  });

  const listSubGroupId = listSubGroupForFamilyId?.map((param, key) => {
    param.label = param.name;

    return param;
  });

  //************************************** HANDLE ADD FUNC
  const HandleAddProductFamily = () => {
    const familyDescription = addProductFamily.description;
    const familyName = addProductFamily.name;

    if (familyDescription === null || familyName === null) {
      alertMessage({
        data: [{ data: "All Field Required " }],
      });
    } else {
      productWorker
        .addProductFamily(addProductFamily)
        .then((res) => {
          alertMessage({
            data: [{ data: "Product Family Add " }],
          });

          nullProductFamily();

          productFamilyAddModalOpenFunc();
        })
        .catch((err) => {
          alertError({
            err: [{ error: "Product Family Error " }],
          });
          console.log(err);
        });
    }
  };

  const HandleAddProductGroup = () => {
    const groupDescription = addProductGroup.description;
    const groupFamilyId = addProductGroup.productFamilyId;
    const groupName = addProductGroup.name;

    if (
      groupDescription === null ||
      groupFamilyId === null ||
      groupName === null
    ) {
      alertMessage({
        data: [{ data: "All Field Required " }],
      });
    } else {
      productWorker
        .addProductGroup(addProductGroup)
        .then((res) => {
          alertMessage({
            data: [{ data: "Product Group Add " }],
          });

          nullProductGroupFamily();

          productGroupAddModalOpenFunc();
        })
        .catch((err) => {
          alertError({
            err: [{ error: "Product Group Error " }],
          });
          console.log(err);
        });
    }
  };

  const HandleAddProductSubGroup = () => {
    const groupSubDescription = addProductSubGroup.description;
    const groupSubFamilyId = addProductSubGroup.productFamilyId;
    const groupSubName = addProductSubGroup.name;
    const groupSubGroupId = addProductSubGroup.productGroupId;

    if (
      groupSubDescription === null ||
      groupSubFamilyId === null ||
      groupSubName === null ||
      groupSubGroupId === null
    ) {
      alertMessage({
        data: [{ data: "All Field Required " }],
      });
    } else {
      productWorker
        .addProductSubGroup(addProductSubGroup)
        .then((res) => {
          alertMessage({
            data: [{ data: "Product SubGroup Add " }],
          });

          nullProductSubGroup();
          productSubGroupAddModalOpenFunc();
        })
        .catch((err) => {
          alertError({
            err: [{ error: "Product SubGroup Error " }],
          });
          console.log(err);
        });
    }
  };

  const HandleAddProduct = () => {
    productWorker
      .addProducts(addProduct)
      .then((res) => {
        alertMessage({
          data: [{ data: "Product Add Successfully" }],
        });
        nullProductAdd();
        productAddModalOpenFunc();
      })
      .catch((err) => {
        console.log(err);
        alertError({
          data: [{ data: "err.response.data" }],
        });
      });
  };

  return (
    <React.Fragment>
      <>
        <div className="row">
          <div className="col-sm-12">
            {openProductFamilyEdit.status === true ? (
              <ProductFamilyEdit
                family={openProductFamilyEdit}
                setOpenProductFamilyEdit={setOpenProductFamilyEdit}
              />
            ) : openProductGroupEdit.status === true ? (
              <ProductGroupEdit
                listFamily={listFamily}
                group={openProductGroupEdit}
                setOpenProductGroupEdit={setOpenProductGroupEdit}
              />
            ) : openProductSubGroupEdit.status === true ? (
              <ProductSubGroupEdit
                listFamily={listFamily}
                subGroup={openProductSubGroupEdit}
                setOpenProductSubGroupEdit={setOpenProductSubGroupEdit}
              />
            ) : openProductServiceEdit.status === true ? (
              <ProductServiceEdit
                listFamily={listFamily}
                countryCodes={countryCodes}
                currencyCodes={currencyCodes}
                unitsCodes={unitsCodes}
                productService={openProductServiceEdit}
                setOpenProductServiceEdit={setOpenProductServiceEdit}
              />
            ) : productFamily === true ? (
              familyDropDown()
            ) : productGroup === true ? (
              groupDropDown()
            ) : productSubGroup === true ? (
              subGroupDropDown()
            ) : productService === true ? (
              productServiceDropDown()
            ) : (
              productAndServiceButtonComponents()
            )}
          </div>
        </div>
      </>
    </React.Fragment>
  );
};

ProductAndServices.propTypes = {
  setInitialContent: PropTypes.func,
};

export default ProductAndServices;
