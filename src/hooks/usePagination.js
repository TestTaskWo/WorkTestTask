import { useMemo } from "react";
import { getPageCount } from "../utils/pages";

export const usePagination = (totalCount, limit) => {
    const paginationArray = useMemo(() => {
        const count = getPageCount(totalCount, limit);
        const pages = [];
        for(let i = 1; i <= count; i++) {
            pages.push(i);
        }
        return pages;
    }, [totalCount]);
    return [paginationArray];
};
