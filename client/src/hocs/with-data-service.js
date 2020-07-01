import React from 'react';
import { DataServiceConsumer } from '../components/data-service-context/data-service-context';

const withDataService = () => (Wrapped) => {
    return (props) => {
        return (
            <DataServiceConsumer>
                {
                    (dataService) => {
                        return (<Wrapped {...props}
                                         dataService={dataService}/>);
                    }
                }
            </DataServiceConsumer>
        );
    }
};
export default withDataService;
