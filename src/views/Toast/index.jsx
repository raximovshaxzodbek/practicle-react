import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast() {
  const notify = () => {
    toast("Basic notification", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const successNotify = () => {
    toast.success("Successfull");
  };

  const warningNotify = () => {
    toast.warning("Warning");
  };

  const errorNotify = () => {
    toast.error("Error");
  };

  const infoNotify = () => {
    toast.info("Info");
  };
  return (
    <div className="toast">
      <div className="btn-group">
        <button className="btn" onClick={notify}>
          Notify!
        </button>
        <button onClick={successNotify} className="btn success">
          Success
        </button>
        <button onClick={warningNotify} className="btn warning">
          Warning
        </button>

        <button onClick={errorNotify} className="btn error">
          Error
        </button>

        <button onClick={infoNotify} className="btn info">
          Info
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
