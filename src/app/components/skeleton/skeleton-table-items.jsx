function SkeletonTableList({ times, configData }) {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className="flex items-center w-full space-x-2 border py-4">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
      );
    });
  return (
    <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
      {boxes}
    </div>
  );
}

export default SkeletonTableList;
