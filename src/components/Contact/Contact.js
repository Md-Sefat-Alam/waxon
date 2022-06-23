import React, { useRef } from "react";
import ContentHeader from "../Shared/ContentHeader/ContentHeader";
import emailjs from "@emailjs/browser";
import { Alert, Snackbar } from "@mui/material";

const Contact = () => {
  const form = useRef();
  const [open, setOpen] = React.useState(false);
  const [alertText, setAlertText] = React.useState({ title: "", type: "" });

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleEmailSubmission = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (
      formData.get("from_name") &&
      formData.get("user_email") &&
      formData.get("message")
    ) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID.split(";")[0],
          process.env.REACT_APP_TEMPLATE.split(";")[0],
          form.current,
          process.env.REACT_APP_PUBLIC_KEY.split(";")[0]
        )
        .then(
          (result) => {
            if (result.text === "OK") {
              handleClick();
              setAlertText({
                title: "We reveived your message. Thanks!",
                type: "success",
              });
              e.target.reset();
            }
          },
          (error) => {
            handleClick();
            setAlertText({ title: error.text, type: "error" });
          }
        );
    } else {
      handleClick();
      setAlertText({ title: "Enter all data", type: "error" });
    }
  };
  return (
    <div className="container">
      <div className="mb-20">
        <ContentHeader title={"Get in touch"} title_type={"contact"} />
      </div>
      <div className="w-full px-5 xl:px-0 lg:w-1/2 italic text-gray-400 mb-10">
        <p>
          Please fill out the form on this section to contact with me. Or call
          between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
        </p>
      </div>
      <div className="flex flex-col px-5 xl:px-0 lg:flex-row justify-between">
        <div className="w-full lg:w-1/2 pr-5">
          <form ref={form} onSubmit={handleEmailSubmission}>
            <input
              type="text"
              name="from_name"
              className="w-full border p-2 mb-8 focus:outline-none focus:border-gray-400"
              placeholder="Name"
            />
            <input
              type="text"
              name="user_email"
              className="w-full border p-2 mb-8 focus:outline-none focus:border-gray-400"
              placeholder="Email"
            />
            <textarea
              name="message"
              id=""
              rows={4}
              className="w-full border p-2 mb-8 focus:outline-none focus:border-gray-400"
              placeholder="Message"
            ></textarea>
            <input
              type="submit"
              className="px-10 border-2 border-blue-700 hover:bg-white hover:text-black italic transition-all py-4 bg-blue-700 text-white cursor-pointer"
              value="Send Message"
            />
          </form>
        </div>
        <div className="w-full mt-10 lg:mt-0 lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7903687794997!2d90.39161884827669!3d23.754853775233794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b95a2a5331ad%3A0xcd8dd511700ff187!2sOleander%20IT!5e0!3m2!1sen!2sbd!4v1655885180047!5m2!1sen!2sbd"
            width="100%"
            height="350"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Location"
          ></iframe>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertText.type}
          sx={{ width: "100%" }}
        >
          {alertText.title}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
