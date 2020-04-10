import React from "react";
import {Switch, Route, useLocation} from "react-router-dom";
import {PersistentContext} from "context/PersistentContext";
import path_list from "constants/routes";

const Router = () => {
    const location = useLocation();

    return (
        <PersistentContext.Consumer>
            {path_value => {
                return (
                    <Switch location={location} key={location.pathname}>
                        {path_list.map(
                            ({component: Component, path, ...rest}) => {
                                return (
                                    <Route path={path} key={path} {...rest}>
                                        <Component {...rest} />
                                    </Route>
                                );
                            }
                        )}
                    </Switch>
                );
            }}
        </PersistentContext.Consumer>
    );
};

export default Router;