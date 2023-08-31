"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconButton } from "@material-tailwind/react/components/IconButton";
import Button from "../button/button";
function Pagination({ url, pageIndex, pageSize, totalCount }) {
  const maxSizePage = Math.floor(totalCount / pageSize) + 1;
  const router = useRouter();
  let renderItemPage;
  renderItemPage = Array(maxSizePage)
    .fill(0)
    .map((_, index) => {
      return (
        <li key={index}>
          <Link href={index === 0 ? `${url}` : `${url}/${index}`}>
            <IconButton variant={pageIndex == index ? "filled" : "text"}>
              {index + 1}
            </IconButton>
          </Link>
        </li>
      );
    });

  const handleBack = () => {
    if (pageIndex !== 0) {
      if (pageIndex === 1) {
        router.push(`${url}`);
      } else {
        router.push(`${url}/${pageIndex - 1}`);
      }
    }
  };

  const handleForward = () => {
    if (pageIndex !== maxSizePage) {
      router.push(`${url}/${pageIndex + 1}`);
    }
  };

  return (
    <ul className="flex items-center gap-2 bg-white py-1 px-2 rounded-md">
      <li>
        <Button
          onClick={handleBack}
          leftIcon={<IoIosArrowBack />}
          disabled={pageIndex === 0}
        >
          Previous
        </Button>
      </li>

      {renderItemPage}

      <li>
        <Button
          onClick={handleForward}
          rightIcon={<IoIosArrowForward />}
          disabled={maxSizePage === 1 || pageIndex === maxSizePage}
        >
          next
        </Button>
      </li>
    </ul>
  );
}

export default Pagination;
