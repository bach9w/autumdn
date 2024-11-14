"use client";
import { Button } from "@components/ui/button";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Pagination1 = ({ page }: { page: any }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : "",
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <Pagination className="bg-white">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                if (!page) {
                } else {
                  router.push(
                    pathname +
                      "?" +
                      createQueryString("page", String(Number(page) - 1)),
                  );
                }
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="">{page ? page : "1"}</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              onClick={() => {
                if (!page) {
                  router.push(
                    pathname +
                      "?" +
                      createQueryString("page", String(Number(page) + 2)),
                  );
                } else {
                  router.push(
                    pathname +
                      "?" +
                      createQueryString("page", String(Number(page) + 1)),
                  );
                }
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Pagination1;
