import { exact } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Vehiculo = React.lazy(()=> import('./views/management/vehiculos/vehiculo/Vehiculo'))
const VehiculoForm = React.lazy(()=> import('./views/management/vehiculos/vehiculo/VehiculoForm'))
const VehiculoEditForm = React.lazy(()=> import('./views/management/vehiculos/vehiculo/VehiculoEditForm'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/vehiculos', name: 'Vehiculos', exact: true },
  { path: '/vehiculos/vehiculo', name: 'Vehiculo', element: Vehiculo },
  { path: '/vehiculos/vehiculoform', name:'VehiculoForm', element: VehiculoForm},
  { path: '/vehiculos/vehiculoeditform/:placaVehiculo', name:'VehiculoEditForm', element: VehiculoEditForm}
]

export default routes
