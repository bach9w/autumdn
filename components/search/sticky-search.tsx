import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { FiAlertCircle, FiSearch } from "react-icons/fi";
import { ComboBoxResponsive } from "./responsive-combobox";
import SearchForm from "@components/SearchForm";

const StickySearchForm = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center rounded rounded-t-none bg-gradient-to-r from-black to-gray-600 px-4 py-2 font-medium text-white transition-opacity hover:opacity-90"
      >
        <FiSearch /> Търсачка
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
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
            <SearchForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickySearchForm;
