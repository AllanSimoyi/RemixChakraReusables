import { useMemo } from "react";
import { getNumPages, getPageNumber } from "../lib/pagination";

interface Props {
  numItems: number;
  skip: number;
  take: number;
}

export function usePagination (props: Props) {
  const { numItems, skip, take } = props;

  const pageNumber = useMemo(() => {
    return getPageNumber({ skip, take });
  }, [skip, take]);

  const onFirstPage = useMemo(() => {
    return pageNumber === 1;
  }, [pageNumber]);

  const numPages = useMemo(() => {
    return getNumPages({ numItems, take });
  }, [numItems, take]);

  const onLastPage = useMemo(() => {
    return pageNumber === numPages;
  }, [pageNumber, numPages]);

  const skipValues = useMemo(() => {
    return {
      firstPage: onFirstPage ? undefined : 0,
      previousPage: onFirstPage ? undefined : skip - take,
      nextPage: onLastPage ? undefined : skip + take,
      lastPage: onLastPage ? undefined : (numPages - 1) * take,
    }
  }, [onFirstPage, onLastPage, numPages, skip, take]);

  return { onFirstPage, onLastPage, skipValues }
}