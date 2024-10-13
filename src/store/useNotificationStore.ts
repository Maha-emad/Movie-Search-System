import { createStore } from "zustand";

export enum NotificationType {
	Success = "success",
	Error = "error",
	Warning = "warning",
	Info = "info"
}

type NotificationState = {
	open: boolean;
	message: string;
	type: NotificationType;
};

type ShowNotification = Omit<NotificationState, "open">;

const defaultInitState = {
	open: false,
	message: "",
	type: NotificationType.Success
};

type NotificationAction = {
	showNotification: (notification: ShowNotification) => void;
	hideNotification: () => void;
};

export const initNotificationStore = (): NotificationState => {
	return {
		open: false,
		message: "",
		type: NotificationType.Success
	};
};

export type NotificationStore = NotificationAction & NotificationState;

export const createNotificationStore = (initState: NotificationState = defaultInitState) => {
	return createStore<NotificationStore>()((set) => ({
		...initState,
		showNotification: (notification: ShowNotification) => set(() => ({ ...notification, open: true })),
		hideNotification: () => set(() => ({ open: false, message: "", type: NotificationType.Success }))
	}));
};
