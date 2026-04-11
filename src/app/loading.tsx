"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-background flex items-center justify-center z-[100]">
            <div className="flex flex-col items-center gap-6">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="relative w-24 h-24"
                >
                    <img
                        src="/images/logo.png"
                        alt="Gravity Monk"
                        className="w-full h-full object-contain"
                    />
                </motion.div>
                <div className="w-48 h-[2px] bg-secondary overflow-hidden rounded-full">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="w-full h-full bg-primary"
                    />
                </div>
            </div>
        </div>
    );
}
