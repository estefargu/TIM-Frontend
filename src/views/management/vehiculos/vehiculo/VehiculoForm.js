import React, {useEffect, useState} from 'react';
import Axios from 'axios'
import{
    CForm,
    CCol,
    CFormInput,
    CFormSelect,
    CFormCheck,
    CButton
} from '@coreui/react'
import navigate from 'navigate';
import { useParams } from 'react-router-dom';

const VehiculoForm = () =>{

    const {placaVehiculo} = useParams();

    const [vehiculoData, setVehiculoData] = useState({
        placaVehiculo: '',
        empresaId: '',
        rutaId: '',
        marca: '',
    });

    function handleChange(event){
        const {name, value} = event.target;
        setVehiculoData({
            ...vehiculoData,
            [name]: value
        });
    }

    const handleSubmit = async()=>{
        try{
            const response = await Axios.post('http://localhost:1337/api/crearvehiculo', vehiculoData);
            console.log(response.data);
        }
        catch(e){
            console.log(e);
        }
    }
    function handleReurnUI(event){
        navigate('/vehiculos/vehiculo');
    }

    return(
        <CForm className="row g-3" onSubmit={handleSubmit}>
            <CCol md={12}>
                <CFormInput type="text" id="placaVehiculo" name="placaVehiculo" label="Placa del vehiculo" value={vehiculoData.placaVehiculo} onChange={handleChange}/>
            </CCol>
            <CCol md={12}>
                <CFormInput type="text" id="empresaId" name="empresaId" label="Id de la empresa de transporte" value={vehiculoData.empresaId} onChange={handleChange}/>
            </CCol>
            <CCol xs={4}>
                <CFormInput type="text" id="rutaId" name="rutaId" label="Id de la ruta" value={vehiculoData.rutaId} onChange={handleChange}/>
            </CCol>
            <CCol md={12}>
                <CFormInput type="text" id="marca" name="marca" label="Marca del vehiculo" value={vehiculoData.marca} onChange={handleChange}/>
            </CCol>
            <CCol xs={12}>
                <CButton color="primary" type="submit">Save</CButton>
                <CButton color="primary" type="submit">Cancel</CButton>
            </CCol>
        </CForm>
    )
}

export default VehiculoForm