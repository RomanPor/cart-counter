import React from 'react';
import DataService from "../../data-service";

const {
    Provider: DataServiceProvider,
    Consumer: DataServiceConsumer
} = React.createContext(new DataService());

export {
    DataServiceProvider,
    DataServiceConsumer
};
