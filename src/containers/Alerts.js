import {Alert, AlertTitle} from "@material-ui/lab";
import React from "react";


export const LoadingAlert = () => (
    <Alert severity="info">
        <AlertTitle>Loading...</AlertTitle>
    </Alert>
);

export const ErrorAlert = () => (
    <Alert severity="danger">
        <AlertTitle>Loading...</AlertTitle>
    </Alert>
);