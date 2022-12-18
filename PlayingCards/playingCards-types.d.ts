// Type Definitions for PlayingCards
// import React from "react";

export type PCSlice = {
    windowTitle: string;
    initted: boolean;
    flipping: boolean;
    side: string;
    rank: string;
    suit: string;
    newRank: string | null;
    newSuit: string | null;
};

export interface Notification {
    severity: string;
    code?: number | string;
    message: string;
}

export interface KeyValue {
    key: string;
    value: any;
}
