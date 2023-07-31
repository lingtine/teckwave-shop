import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";

function AddAddress() {
  return (
    <div className="px-10">
      <h1 className="text-xl font-bold text-primary-1">Add Address</h1>

      <div>
        <form>
          <ul>
            <li className="my-4">
              <Input label={"FullName"} required />
            </li>
            <li className="my-4">
              <Input label={"Phone"} required />
            </li>
            <li className="my-4">
              <Input label={"Province/City"} required />
            </li>
            <li className="my-4">
              <Input label={"District"} required />
            </li>
            <li className="my-4">
              <InputTextArea label={"Address"} required />
            </li>
            <li className="flex my-2 items-center">
              <h4 className="font-semibold">Type Address: </h4>
              <div className="mx-2 flex items-center">
                <input className="mx-2" type="radio" checked />
                <label>Apartment</label>
              </div>
              <div className="mx-2 flex items-center">
                <input className="mx-2" type="radio" />
                <label>Company</label>
              </div>
            </li>
            <li className="flex justify-end">
              <Button secondary normal>
                Add Address
              </Button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default AddAddress;
