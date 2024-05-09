import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import{
    CForm,
    CCol,
    CFormInput,
    CFormSelect,
    CFormCheck,
    CButton
} from '@coreui/react'

const ConductorForm = () =>{

    const navigate = useNavigate();

    const [conductorData, setConductorData] = useState({
        conductorId: '',
        nombreConductor: '',
        placaVehiculo: '',
        horarioConductor: ''
    });

    function handleChange(event){
        const {name, value} = event.target;
        setConductorData({
            ...conductorData,
            [name]: value
        });
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{
            const response = await Axios.post('http://localhost:1337/api/crearconductor', conductorData);
            navigate('/conductores/conductor');
        }
        catch(e){
            console.log(e);
        }
    }
    function handleReturnUI(event){
        navigate('/conductores/conductor');
    }

    return(
        <CForm className="row g-3" onSubmit={handleSubmit}>
            <CCol md={12}>
                <CFormInput type="text" id="conductorId" name="conductorId" label="Identificacion" value={conductorData.conductorId} onChange={handleChange}/>
            </CCol>
            <CCol md={12}>
                <CFormInput type="text" id="nombreConductor" name="nombreConductor" label="Nombre" value={conductorData.nombreConductor} onChange={handleChange}/>
            </CCol>
            <CCol xs={4}>
                <CFormInput type="text" id="placaVehiculo" name="placaVehiculo" label="Vehiculo" value={conductorData.placaVehiculo} onChange={handleChange}/>
            </CCol>
            <CCol md={12}>
                <CFormInput type="text" id="horarioConductor" name="horarioConductor" label="Horario" value={conductorData.horarioConductor} onChange={handleChange}/>
            </CCol>
            <CCol xs={12}>
                <CButton onClick={handleSubmit} color="primary" type="submit">Save</CButton>
                <CButton onClick={handleReturnUI} color="primary" type="submit">Cancel</CButton>
            </CCol>
        </CForm>
    )
}

export default ConductorForm