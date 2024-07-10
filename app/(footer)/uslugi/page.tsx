"use client";
import { Button } from "@components/ui/button";
import { MessageCircleQuestionIcon, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReactWhatsapp from "react-whatsapp";
import { RevealBento } from "./grid";

const Uslugi = () => {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center">
      <RevealBento />
    </div>
  );
};

export default Uslugi;
