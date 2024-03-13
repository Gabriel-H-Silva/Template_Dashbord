import React, { useState, useEffect } from 'react';
import api from "../../Services/api";
import { Col } from "react-bootstrap";


function AddToyModal() {

    const [data, setData] = useState([]);

    useEffect(() => {
        api.get('api/readerssettings/v1/').then(response => setData(response.data))
    }, []);

    return (
        ""
    )
}

export default AddToyModal;