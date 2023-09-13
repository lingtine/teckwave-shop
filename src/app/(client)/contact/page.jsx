"use client";

import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";

import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  clearData,
} from "~/redux/features/contact/form-contact-slice";
import { useEffect } from "react";
function ContactPage() {
  const dispatch = useDispatch();
  const formValues = useSelector((state) => state.formContactSlice);
  useEffect(() => {
    document.title = "Contact";
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ field: name, value }));
  };
  const renderForm = (
    <form className="flex flex-col justify-between px-8 py-10 h-full">
      <div className="flex justify-between gap-4">
        <Input
          label={"Your Name"}
          onChange={handleChange}
          name="name"
          value={formValues.name}
        />
        <Input
          label={"Your Email"}
          name="email"
          onChange={handleChange}
          value={formValues.email}
        />
        <Input
          label={"Your Phone"}
          name="phoneNumber"
          onChange={handleChange}
          value={formValues.phoneNumber}
          type="number"
        />
      </div>
      <div className="my-8 flex-1">
        <InputTextArea
          label={"Your Message"}
          name="message"
          onChange={handleChange}
          value={formValues.message}
        />
      </div>
      <div className="flex justify-end">
        <Button secondary large>
          Send Message
        </Button>
      </div>
    </form>
  );
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-7 mb-36 mt-20">
          <div className="p-8 max-w-[340px] border">
            <div className="pb-8 border-b border-color-text-secondary">
              <div className="flex">
                <div className=" rounded-full p-1.5 text-xl text-primary bg-secondary-3">
                  <BiPhone />
                </div>
                <h4 className="mx-4 text-base font-medium">Call To Us</h4>
              </div>
              <p className="my-6 text-sm">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-sm">Phone: +8801611112222</p>
            </div>
            <div className="pt-8">
              <div className="flex items-center">
                <div className=" rounded-full p-1.5 text-xl text-primary bg-secondary-3">
                  <AiOutlineMail />
                </div>
                <h4 className="mx-4 text-base font-medium">Write To US</h4>
              </div>
              <p className="my-6 text-sm">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm">Emails: customer@exclusive.com</p>
              <p className="my-6 text-sm">Emails: support@exclusive.com</p>
            </div>
          </div>

          <div className="col-span-2 h-full border">{renderForm}</div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
