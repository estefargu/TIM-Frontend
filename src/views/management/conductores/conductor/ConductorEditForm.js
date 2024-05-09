import React, {useEffect, useState} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import Axios from 'axios'
import{
    CForm,
    CCol,
    CFormInput,
    CFormSelect,
    CFormCheck,
    CButton
} from '@coreui/react'
import { environments } from 'eslint-plugin-prettier';


const ConductorEditForm = () =>{
    const {conductorId} = useParams();
    const [conductorData, setConductorData] = useState({
        nombreConductor: '',
        placaVehiculo: '',
        horarioConductor: ''
    });

    const navigate = useNavigate();
    
    useEffect(()=>{
        const getConductor = async ()=>{
            const response = await Axios({url:`http://localhost:1337/api/listarunconductor/${conductorId}`})
            const conductor = response.data.data 
            setConductorData(conductor);
        }
        getConductor();
    },[]);

    function handleChange(event){
        const {name, value} = event.target;
        setConductorData({
            ...conductorData,
            [name]: value
        });
    }

    function handleReturnUI(event){
        navigate('/conductores/conductor');
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{
            const response = await Axios.put(`http://localhost:1337/api/editarconductor/${conductorId}`, conductorData);
            navigate('/conductores/conductor');
        }
        catch(e){
            console.log(e);
        }
    }

    return(
        <CForm className="row g-3" onSubmit={handleSubmit}>
        <CCol md={12}>
            <CFormInput type="text" id="nombreConductor" name="nombreConductor" label="Nombre" value={conductorData.nombreConductor} onChange={handleChange}/>
        </CCol>
        <CCol xs={4}>
            <CFormInput type="text" id="placaVehiculo" name="placaVehiculo" label="Vehiculo asignado" value={conductorData.placaVehiculo} onChange={handleChange}/>
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

export default ConductorEditForm