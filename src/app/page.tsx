"use client";
import BigLogo from "@/components/BigLogo";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return (
      <main className="flex h-screen flex-col items-center justify-between px-20 pt-[100px] pb-[52px] bg-black">
        <Loader />
      </main>
    );
  }
  return (
    <main className="flex h-screen flex-col items-center justify-between px-20 pt-[100px] pb-[52px] bg-black">
      <Navbar />
      <Slider />
      <Footer />
    </main>
  );
}
