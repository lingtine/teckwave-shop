import Link from "next/link";

function Topbar() {
  return (
    <div className="bg-teal-800">
      <div className="container mx-auto">
        <div className="flex justify-end p-1">
          <Link className="text-white text-sm " href="/dashboard/login">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
