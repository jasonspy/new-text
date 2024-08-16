import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

interface paginationProps {
  currentPage: number;
  totlaPages: number;
  onPageChange: any;
}

const Pagination = ({
  currentPage,
  totlaPages,
  onPageChange,
}: paginationProps) => {
  const onPageClick = (page: any) => {
    onPageChange(page);
  };

  if (totlaPages > 1) {
    return (
      <div className="flex items-center justify-center py-5 lg:px-0 sm:px-6 px-4 my-4">
        <div className="w-full  flex items-center justify-between  ">
          <div
            onClick={() => onPageClick(currentPage - 1)}
            className="flex items-center  text-gray-600 dark:text-gray-200  hover:text-indigo-700 cursor-pointer"
          >
            {currentPage > 1 ? (
              <>
                <img src={arrowLeft} alt="" />
                <p className="text-sm ml-3 font-medium leading-none ">
                  Previous
                </p>
              </>
            ) : (
              ""
            )}
          </div>

          <div className="flex gap-x-4 items-center">
            {Array.from(Array(totlaPages), (e, i) => {
              return (
                <button
                  onClick={() => onPageClick(i + 1)}
                  disabled={i + 1 === currentPage}
                  className={`${
                    i + 1 === currentPage
                      ? "bg-white disabled "
                      : "bg-transparent "
                  }  text-[#5B5E63] p-2 rounded-full h-6 w-6  text-sm items-center text-center justify-center flex`}
                  key={i}
                >
                  {i + 1}{" "}
                </button>
              );
            })}
          </div>
          <div
            onClick={() => onPageClick(currentPage + 1)}
            className="flex items-center  text-gray-600 dark:text-gray-200  hover:text-white cursor-pointer"
          >
            {currentPage > 1 ? (
              <>
                <p className="text-sm font-medium leading-none mr-3">Next</p>
                <img src={arrowRight} alt="" />
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Pagination;
