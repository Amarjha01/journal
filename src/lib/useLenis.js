"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function useLenis() {
  useEffect(() => {
    if (window.innerWidth > 1024) {
      const lenis = new Lenis({ lerp: 0.1, smooth: true });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      return () => lenis.destroy();
    }
  }, []);
}
