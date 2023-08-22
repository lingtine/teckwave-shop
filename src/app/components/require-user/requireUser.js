import { useCookies } from "react-cookie";
import { useParams, useRouter } from "next/navigation";
import { employeeApi } from "~/redux/services";

const RequireUser = ({ allowedRoles }) => {
  const [cookies] = useCookies(["logged_in"]);
  const param = useParams();
  const router = useRouter();

  const { isLoading, isFetching } = employeeApi.endpoints.getEmployee.useQuery(
    null,
    {
      skip: false,
      refetchOnMountOrArgChange: true,
    }
  );

  const user = employeeApi.endpoints.getMe.useQueryState(null, {
    selectFromResult: ({ data }) => data,
  });

  return ",";
};

export default RequireUser;
