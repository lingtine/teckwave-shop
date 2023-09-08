"use client";
import { useParams } from "next/navigation";
import { useFetchAllSpecificationQuery } from "~/redux/services/catalog/specification-api";
import { useSelector, useDispatch } from "react-redux";
import {
  changeSpecification,
  changeValue,
  clearData,
} from "~/redux/features/product/form-add-specification-product-slice";
import SelectBox from "~/app/components/select-box/select-box";
import Input from "~/app/components/input/input";
import Button from "~/app/components/button/button";
import { useAddSpecificationMutation } from "~/redux/services/catalog/product-api";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
function AddSpecification() {
  const { productId } = useParams();
  const router = useRouter();
  const { data, isFetching, isSuccess } = useFetchAllSpecificationQuery({
    PageSize: 40,
  });
  const dataForm = useSelector(
    (state) => state.formAddSpecificationProductSlice
  );
  const [add, result] = useAddSpecificationMutation();
  const dispatch = useDispatch();

  let dataConfig;
  if (isSuccess) {
    dataConfig = data.data.map((item) => {
      return {
        ...item,
        label: item.name,
      };
    });
  }
  useEffect(() => {
    if (result.isSuccess) {
      toast.success("Add succeeded");
      dispatch(clearData());
      router.push(`/dashboard/products/productDetail/${productId}`);
    } else if (result.isError) {
      toast.error("Error");
    }
  }, [result, productId, dispatch, router]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { specification, value } = dataForm;

    add([
      productId,
      [
        {
          specificationId: specification.id,
          specificationName: specification.name,
          specificationValue: value,
        },
      ],
    ]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-end flex-col">
        <ul className="max-w-lg">
          <li className="text-lg font-semibold">
            Add Specification for Product
          </li>
          <li className="flex justify-between items-center">
            <h4 className="my-4 mr-4">Specification: </h4>
            {isSuccess && (
              <SelectBox
                options={dataConfig}
                onChange={(option) => {
                  dispatch(changeSpecification(option));
                }}
                selected={dataForm.specification}
              />
            )}
          </li>
          <li className="flex justify-between items-center">
            <h4 className="my-4 mr-4">Value: </h4>
            <Input
              label={"Value"}
              value={dataForm.value}
              onChange={(e) => {
                dispatch(changeValue(e.target.value));
              }}
            ></Input>
          </li>

          <li>
            <Button secondary type={"submit"}>
              Add Specification
            </Button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default AddSpecification;
