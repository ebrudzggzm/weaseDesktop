const useLoginInputValidation = (...args) => {
  const result = args.map((param) => {
    let paramValue = Object.values(param)[0];

    if (paramValue === undefined) {
      return false;
    }

    if (String(paramValue)?.length === 0) {
      return false;
    }

    if (String(paramValue)?.length > 0 && paramValue !== undefined) {
      return true;
    }
  });

  return result.map((param) => {
    if (param === true) {
      return true;
    }
  });
};

export default useLoginInputValidation;
