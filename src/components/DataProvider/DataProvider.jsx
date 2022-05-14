import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import question from "../../question.json";

DataProvider.propTypes = {
    
};

function DataProvider(props) {
    const [listAnswer, setListAnswer] = useState([]);
    return (
        <DataContext.Provider value={[question, listAnswer, setListAnswer]}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataProvider
export const DataContext = createContext();


