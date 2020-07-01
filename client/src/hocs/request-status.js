import React from "react";

const RequestStatus = (props) => {
    const {loading, error} = props;
    if (loading) {
        return (
            <div className="progress">
                <div className="indeterminate"/>
            </div>
        )
    }
    if (error) {
        return <p className="request-error"><i className="material-icons small">warning</i><span>Ошибка</span></p>
    }

    return props.children
}

export default RequestStatus;
