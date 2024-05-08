import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios'
import {
  CButton,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CTableHeaderCell
} from '@coreui/react'
import { object } from 'prop-types'

const Vehiculo = () => {

  const[vehiculoData, setVehiculoData] = useState([]);
  //const{empresaId} = useParams();
  const navigate = useNavigate();
  
  useEffect(()=>{
    const getVehiculos = async() =>{
      const response = await Axios({
        url: 'http://localhost:1337/api/listarvehiculo'
      });
      const listvehiculos = Object.keys(response.data).map(i=> response.data[i])
      setVehiculoData(listvehiculos.flat()); //flat convierte la matriz en un array
    }
    getVehiculos();
  },[]);

  function handleCreateVehiculo(event){
    navigate('/vehiculos/vehiculoform');
  }
  function handleEdit(placaVehiculo){
    navigate(`/vehiculos/vehiculoeditform/${placaVehiculo}`)
  }

  const handleDisable = async(placaVehiculo) => {
    try{
      var url = "http://localhost:1337/api/deshabilitarvehiculo/"+placaVehiculo;
      const response = await Axios.put(url);
      window.location.reload();
    }
    catch{
      console.log(e);
    }
  }

  

  const columns = [
  {
    title: 'Placa del vehiculo',
    dataIndex: 'placaVehiculo'
  },
  {
    title: 'Marca del vehiculo',
    dataIndex: 'marca'
  },
  {
    title: 'Id de la ruta',
    dataIndex: 'rutaId'
  },
  /*{
    title: 'Empresa de transporte a la que pertenece',
    dataIndex: 'empresaTransporte'
  },*/
  {
    title: 'Options',
    dataIndex: 'Options'
  }
]

  return (
    <div>
      <CButton onClick={handleCreateVehiculo}> Nuevo vehiculo </CButton>
      <CTable>
        <CTableHead>
          <CTableRow>
            {columns.map((column, index) => (
              <CTableHeaderCell key= {index}> {column.title}</CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {vehiculoData.map((vehiculo, index)=>(
            <CTableRow key={index}>
              {columns.map((column, columnIndex) =>(
                <CTableDataCell key={columnIndex}> 
                  {column.dataIndex === 'Options'?(
                    <>
                      <CButton onClick={()=>handleEdit(vehiculo.placaVehiculo)} color="primary" >Edit</CButton>
                      <CButton onClick={()=>handleDisable(vehiculo.placaVehiculo)} color="secondary" >Disable</CButton>
                    </>
                  ):(
                    vehiculo[column.dataIndex]
                  )}
                 </CTableDataCell>
              ))}
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>

  )
}

export default Vehiculo
