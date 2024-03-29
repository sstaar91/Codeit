import { Flip, ToastContainer } from "react-toastify";

const Toast = () => {
  return (
    <div className="absolute top-0 left-0">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        theme="colored"
        transition={Flip}
      />
    </div>
  );
};

export default Toast;
