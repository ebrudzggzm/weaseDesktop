import Swal from "sweetalert2";

const alertMessage = (payload) => {
  //Swall
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const missingData = payload.data.map((elem) => {
    const elemValue = Object.values(elem)[0];
    const elemKey = Object.keys(elem)[0];

    if (elemValue === undefined || elemValue === null || elemValue === "") {
      return elemKey;
    }
    return elemValue;
  });

  const missingDataConvertString = missingData.join().replace(/,/g, " ");

  // console.log(missingDataConvertString);
  // console.log(missingDataConvertString.length);
  // console.log(typeof missingDataConvertString);

  if (missingDataConvertString.trim().length > 0) {
    return Toast.fire({
      icon: "success",
      title: `${missingDataConvertString.toUpperCase()}`,
    });
  }

  if (
    missingDataConvertString === undefined ||
    missingDataConvertString === null
  ) {
    return Toast.fire({
      icon: "warning",
      title: `${missingDataConvertString.toUpperCase()} data`,
    });
  }
};

export default alertMessage;
