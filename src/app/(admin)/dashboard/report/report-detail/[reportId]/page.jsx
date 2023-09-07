"use client";
import { useGetReportQuery } from "~/redux/services/warehouse/report-api";
import { useParams } from "next/navigation";
import ReportDetailInformation from "~/app/components/report-detail/report-detail-information";
import { Spinner } from "@material-tailwind/react/components/Spinner";
import ReportDetailProducts from "~/app/components/report-detail/report-detail-products";
function ReportDetail() {
  const { reportId } = useParams();
  const { data, isFetching, isSuccess } = useGetReportQuery(reportId, {
    refetchOnMountOrArgChange: true,
  });
  let content;

  if (isFetching) {
    content = (
      <div className="min-h-[400px] flex justify-center items-center">
        <Spinner className="h-16 w-16 text-gray-900/50"></Spinner>
      </div>
    );
  } else if (isSuccess) {
    content = (
      <>
        <h2 className="text-2xl font-semibold my-8 uppercase">Report detail</h2>

        <div className="flex gap-8">
          <div className="max-w-[50%] flex-1">
            <ReportDetailInformation data={data.data} />
          </div>

          <div className="max-w-[50%]">
            <ReportDetailProducts data={data.data.reportProducts} />
          </div>
        </div>
      </>
    );
  }
  return <div>{content}</div>;
}

export default ReportDetail;
