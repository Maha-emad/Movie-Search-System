import React, { createContext, useContext, useState } from "react";
enum severityEnum {
	success = "success",
	error = "error",
	warning = "warning",
	info = "info"
}
type severityType = severityEnum;

type AlertType = {
	open: boolean;
	message: string;
	severity: severityType;
};

type AlertStore = {
	alert: AlertType;
	showAlert: (message: string, severity: severityType) => void;
	closeAlert: () => void;
};

const AlertContext = createContext<AlertStore>({
	alert: { open: false, message: "", severity: severityEnum.error },
	showAlert: () => {},
	closeAlert: () => {}
});

export const useAlert = () => useContext(AlertContext);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [alert, setAlert] = useState<AlertType>({
		open: false,
		message: "",
		severity: severityEnum.error // default severity
	});

	const showAlert = (message: string, severity = severityEnum.error) => {
		setAlert({ open: true, message, severity });
	};

	const closeAlert = () => {
		setAlert({ ...alert, open: false });
	};

	return <AlertContext.Provider value={{ alert, showAlert, closeAlert }}>{children}</AlertContext.Provider>;
};
