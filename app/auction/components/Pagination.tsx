"use client";
import { Button } from "@components/ui/button";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
const Pagination = ({ page }: { page: any }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
      {page !== "1" ||
        ("" && (
          <Button
            onClick={() => {
              router.push(
                pathname +
                  "?" +
                  createQueryString("page", String(Number(page) - 1)),
              );
            }}
          >
            Предишна страница
          </Button>
        ))}
      {page === "" ? (
        <Button
          onClick={() => {
            router.push(
              pathname +
                "?" +
                createQueryString("page", String(Number(page) + 2)),
            );
          }}
        >
          Следваща страница
        </Button>
      ) : (
        <Button
          onClick={() => {
            router.push(
              pathname +
                "?" +
                createQueryString("page", String(Number(page) + 1)),
            );
          }}
        >
          Следваща страница
        </Button>
      )}
    </div>
  );
};

export default Pagination;