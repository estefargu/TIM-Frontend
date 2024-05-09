
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


const VehiculoEditForm = () =>{
    const {placaVehiculo} = useParams();
    const [vehiculoData, setVehiculoData] = useState({
        placaVehiculo: '',
        rutaId: '',
        marca: '',
    });

    const navigate = useNavigate();
    
    useEffect(()=>{
        const getVehiculo = async ()=>{
            const response = await Axios({url:`http://localhost:1337/api/listarunvehiculo/${placaVehiculo}`})
            const vehiculo = response.data.data 
            setVehiculoData(vehiculo);
        }
        getVehiculo();
    },[]);

    function handleChange(event){
        const {name, value} = event.target;
        setVehiculoData({
            ...vehiculoData,
            [name]: value
        });
    }


    function handleReturnUI(event){
        navigate('/vehiculos/vehiculo');
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{
            const response = await Axios.put(`http://localhost:1337/api/actualizarvehiculo/${placaVehiculo}`, vehiculoData);
            navigate('/vehiculos/vehiculo');
        }
        catch(e){
            console.log(e);
        }
    }

    return(
        <CForm className="row g-3" onSubmit={handleSubmit}>
            <CCol md={12}>
                <CFormInput type="text" id="placaVehiculo" name="placaVehiculo" label="Placa del vehiculo" value={vehiculoData.placaVehiculo} onChange={handleChange}/>
            </CCol>
            <CCol xs={4}>
                <CFormInput type="text" id="rutaId" name="rutaId" label="Id de la ruta" value={vehiculoData.rutaId} onChange={handleChange}/>
            </CCol>
            <CCol md={12}>
                <CFormInput type="text" id="marca" name="marca" label="Marca del vehiculo" value={vehiculoData.marca} onChange={handleChange}/>
            </CCol>
            <CCol xs={12}>

                <CButton onClick={handleSubmit} color="primary" type="submit">Save</CButton>
                <CButton onClick={handleReturnUI} color="primary" type="submit">Cancel</CButton>

            </CCol>
        </CForm>
    )
}

export default VehiculoEditForm