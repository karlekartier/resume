import React from "react";
import Image from "next/image";
import { ASSETS_PREFIX } from "@/utils/constants";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="relative flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 animate-spin">
                    <Image
                        src={`${ASSETS_PREFIX}/assets/favicon/kk_logo.svg`}
                        alt="Loading..."
                        fill
                        className="object-contain"
                    />
                </div>
                <p className="text-muted-foreground text-sm font-medium animate-pulse">Loading...</p>
            </div>
        </div>
    );
}
