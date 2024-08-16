import { toast } from "react-hot-toast";

export const getSimplifiedError = (error: any) => {
  if (!error.response) {
    toast.error(
      "Something went wrong, check your internet and please try again"
    );
    return "Something went wrong, check your internet and please try again";
  }
  const errorObject = error?.response?.data;
  if (error.response?.status === 500) {
    toast.error("Sorry an unexpected error occurred.");
    return "Sorry an unexpected error occurred.";
  }
  if (error.response?.status === 400) {
    if (errorObject?.error === "Please Verify Your Email") {
      toast.error("Please Verify Your Email")
    } 
    else {
      console.log(errorObject);
      
      toast.error(errorObject?.message)
    }
    // else {
    //   const errors = errorObject?.message.split('/')
    //   if (errors.length) {
    //     errors.forEach((err : any) => {
    //       toast.error(err);
    //     });
    //   } 
    //   else {
    //     toast.error("Oops something went wrong!");
    //   }
      
    // }
  }

  if (error.response.status === 403) {
    toast.error(errorObject?.error ?? "Not Permitted!");
    // console.error(error?.response?.error);
    return errorObject?.message;
  }
  if (error.response.status === 404) {
    toast.error(errorObject?.message ?? "Resource Not Found!");
    // console.error(error?.response?.error);
    return errorObject?.error;
  } else if (error?.response?.status === 401) {
    toast.error(errorObject?.error); //log here and perform action below
    if (errorObject?.error === "Please authenticate") {
      localStorage.removeItem('persist:root')
      setTimeout(() => {
        window.location.replace("/login");
      }, 2000);
    }
    if (errorObject?.error === "Forbidden: Not Verified or Not Permitted") {
      setTimeout(() => {
        window.location.replace("/login");
      }, 1000);
    }
    return "Token has expired, please log in";
  } else {
    //Check for possible phone number unique issues
    return "Something went wrong";
  }
};
