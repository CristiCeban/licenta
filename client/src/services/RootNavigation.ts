import React from "react";

export const navigationRef: any = React.createRef()

export const navigate = (name: string, params?: any) => {
    if (navigationRef?.current)
        navigationRef.current.navigate(name, params)
}