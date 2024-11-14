"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiAlertCircle, FiFilter, FiSearch } from "react-icons/fi";
import { ComboBoxResponsive } from "./responsive-combobox";
import SearchForm from "@components/SearchForm";
import FilterSearch from "./filter-search";

const StickySearchForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      setIsHome(window.location.pathname === "/auction");
    }
  }, []);

  return (
    <>
      {isMounted && isHome && (
        <div className="z-50 flex w-full justify-center gap-4 px-4">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center rounded rounded-t-none px-4 py-2 font-medium text-black transition-opacity hover:bg-black hover:text-white"
          >
            <FiSearch /> Търсачка
          </button>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center rounded rounded-t-none px-4 py-2 font-medium text-black transition-opacity hover:bg-black hover:text-white"
          >
            <FiFilter /> Филтри
          </button>

          <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
          <FilterSpringModal
            isOpen={isFilterOpen}
            setIsOpen={setIsFilterOpen}
          />
        </div>
      )}
    </>
  );
};

const SpringModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative top-[20%] w-full max-w-lg cursor-default overflow-hidden rounded-lg p-0 text-white shadow-xl sm:top-0"
          >
            <SearchForm isOpen={isOpen} setIsOpen={setIsOpen} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FilterSpringModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg cursor-default overflow-hidden overscroll-y-none rounded-lg p-0 text-white shadow-xl sm:top-0"
          >
            <FilterSearch isOpen={isOpen} setIsOpen={setIsOpen} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default StickySearchForm;
