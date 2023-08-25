"use client";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconButton } from "@material-tailwind/react/components/IconButton";
import Button from "../button/button";
function Pagination({ url, pageIndex, pageSize, totalCount }) {
  const maxSizePage = Math.floor(totalCount / pageSize);
  const router = useRouter();
  let renderItemPage = [];
  for (let i = 0; i <= maxSizePage; i++) {
    renderItemPage.push(
      <li key={i}>
        <Link href={i === 0 ? `${url}` : `${url}/${i}`}>
          <IconButton variant={pageIndex == i ? "filled" : "text"}>
            {i + 1}
          </IconButton>
        </Link>
      </li>
    );
  }

  const handleBack = () => {
    if (pageIndex !== 0) {
      if (pageIndex == 1) {
        router.push(`${url}`);
      } else {
        router.push(`${url}/${pageIndex - 1}`);
      }
    }
  };
  console.log(pageIndex);
  console.log(maxSizePage);

  const handleForward = () => {
    if (pageIndex != maxSizePage) {
      router.push(`${url}/${pageIndex + 1}`);
    }
  };

  return (
    <ul className="flex items-center gap-2 bg-white py-1 px-2 rounded-md">
      <li className="gap-2">
        <Button
          onClick={handleBack}
          leftIcon={<IoIosArrowBack />}
          disabled={pageIndex === 0}
        >
          Previous
        </Button>
      </li>

      {renderItemPage}

      <li className="gap-2">
        <Button
          onClick={handleForward}
          rightIcon={<IoIosArrowForward />}
          disabled={pageIndex == maxSizePage}
        >
          next
        </Button>
      </li>
    </ul>
  );
}

export default Pagination;
