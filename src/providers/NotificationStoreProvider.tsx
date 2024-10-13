"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type NotificationStore, createNotificationStore, initNotificationStore } from "@/store/useNotificationStore";

export type NotificationStoreApi = ReturnType<typeof createNotificationStore>;

export const NotificationStoreContext = createContext<NotificationStoreApi | undefined>(undefined);

export interface NotificationStoreProviderProps {
	children: ReactNode;
}

export const NotificationStoreProvider = ({ children }: NotificationStoreProviderProps) => {
	const storeRef = useRef<NotificationStoreApi>();
	if (!storeRef.current) {
		storeRef.current = createNotificationStore(initNotificationStore());
	}

	return <NotificationStoreContext.Provider value={storeRef.current}>{children}</NotificationStoreContext.Provider>;
};

export const useNotificationStore = <T,>(selector: (store: NotificationStore) => T): T => {
	const notificationStoreContext = useContext(NotificationStoreContext);

	if (!notificationStoreContext) {
		throw new Error(`useNotificationStoreContextStore must be used within NotificationStoreProvider`);
	}

	return useStore(notificationStoreContext, selector);
};
