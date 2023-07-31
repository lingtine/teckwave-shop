import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";

function AddProducts() {
  return (
    <div>
      <h2 className="my-2 text-lg text-primary-1 font-bold">Add Product</h2>
      <div className="flex -mx-2">
        <div className="flex-[0_0_50%] px-2">Image</div>
        <div className="flex-[0_0_50%] px-2">
          <ul>
            <li className="text-sm font-semibold">Product Information</li>
            <li className="my-4">
              <Input label={"Product Name"}></Input>
            </li>
            <li className="my-4">
              <Input label={"Category"}></Input>
            </li>
            <li className="my-4">
              <Input label={"Price"}></Input>
            </li>
            <li className="my-4">
              <Input label={"Stock"}></Input>
            </li>
            <li className="my-4">
              <InputTextArea label={"Description"}></InputTextArea>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end">
        <Button secondary small>
          Create Product
        </Button>
      </div>
    </div>
  );
}

export default AddProducts;
