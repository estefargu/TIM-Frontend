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

const Conductor = () => {

  const[conductorData, setConductorData] = useState([]);
  const navigate = useNavigate();
  
  useEffect(()=>{
    const getConductores = async() =>{
      const response = await Axios({
        url: 'http://localhost:1337/api/listarconductor'
      });
      const listconductor = Object.keys(response.data).map(i=> response.data[i])
      setConductorData(listconductor.flat()); //flat convierte la matriz en un array
    }
    getConductores();
  },[]);

  function handleCreateConductor(event){
    navigate('/conductores/conductorform');
  }
  function handleEdit(conductorId){
    navigate(`/conductores/conductoreditform/${conductorId}`)
  }

  const handleDisable = async(conductorId) => {
    try{
      var url = "http://localhost:1337/api/deshabilitarconductor/"+conductorId;
      const response = await Axios.put(url);
      window.location.reload();
    }
    catch{
      console.log(e);
    }
  }

  const columns = [
  {
    title: 'Identificacion',
    dataIndex: 'conductorId'
  },
  {
    title: 'Nombre',
    dataIndex: 'nombreConductor'
  },
  {
    title: 'Vehiculo',
    dataIndex: 'placaVehiculo'
  },
  {
    title: 'Horario',
    dataIndex: 'horarioConductor'
  },
  {
    title: 'Options',
    dataIndex: 'Options'
  }
]

  return (
    <div>
      <CButton onClick={handleCreateConductor}> Nuevo Conductor </CButton>
      <CTable>
        <CTableHead>
          <CTableRow>
            {columns.map((column, index) => (
              <CTableHeaderCell key= {index}> {column.title}</CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {conductorData.map((conductor, index)=>(
            <CTableRow key={index}>
              {columns.map((column, columnIndex) =>(
                <CTableDataCell key={columnIndex}> 
                  {column.dataIndex === 'Options'?(
                    <>
                      <CButton onClick={()=>handleEdit(conductor.conductorId)} color="primary" >Edit</CButton>
                      <CButton onClick={()=>handleDisable(conductor.conductorId)} color="secondary" >Disable</CButton>
                    </>
                  ):(
                    conductor[column.dataIndex]
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

export default Conductor