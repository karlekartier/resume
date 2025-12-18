"use client";

import * as React from "react";

type Version = "v2.0" | "v2.1";

interface VersionContextType {
    version: Version;
    setVersion: (version: Version) => void;
}

const VersionContext = React.createContext<VersionContextType | undefined>(undefined);

export function VersionProvider({ children }: { children: React.ReactNode }) {
    const [version, setVersion] = React.useState<Version>("v2.1");

    return (
        <VersionContext.Provider value={{ version, setVersion }}>
            {children}
        </VersionContext.Provider>
    );
}

export function useVersion() {
    const context = React.useContext(VersionContext);
    if (context === undefined) {
        throw new Error("useVersion must be used within a VersionProvider");
    }
    return context;
}
