"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingProgress() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [binaryStream, setBinaryStream] = useState("");

  const generateBinary = useCallback(() => {
    let str = "";
    for (let i = 0; i < 60; i++) {
      str += Math.random() > 0.5 ? "1" : "0";
      if (i % 8 === 7) str += " ";
    }
    return str;
  }, []);

  useEffect(() => {
    const binaryInterval = setInterval(() => {
      setBinaryStream(generateBinary());
    }, 80);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(binaryInterval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => {
      clearInterval(progressInterval);
      clearInterval(binaryInterval);
    };
  }, [generateBinary]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[hsl(120,8%,4%)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Binary stream display */}
            <div className="w-72 overflow-hidden font-mono text-[10px] leading-relaxed text-[#0e6b0e]/40 text-center break-all" aria-hidden="true">
              {binaryStream}
            </div>

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#0e6b0e] animate-pulse" />
              <span className="font-mono text-sm tracking-[0.3em] uppercase text-[#0e6b0e]">
                {'> Initializing_'}
              </span>
            </div>

            <div className="w-72 h-[2px] rounded-full bg-[hsl(120,8%,12%)] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-[#0e6b0e] shadow-[0_0_8px_#0e6b0e]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <span className="font-mono text-xs text-[#0e6b0e]/60 tracking-widest">
              [{progress}%] SYSTEM READY
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
