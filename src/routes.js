import { exact } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Vehiculo = React.lazy(()=> import('./views/management/vehiculos/vehiculo/Vehiculo'))
const VehiculoForm = React.lazy(()=> import('./views/management/vehiculos/vehiculo/VehiculoForm'))
const VehiculoEditForm = React.lazy(()=> import('./views/management/vehiculos/vehiculo/VehiculoEditForm'))
const Conductor = React.lazy(()=> import('./views/management/conductores/conductor/Conductor'))
const ConductorForm = React.lazy(()=> import('./views/management/conductores/conductor/ConductorForm'))
const ConductorEditForm = React.lazy(()=> import('./views/management/conductores/conductor/ConductorEditForm'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/vehiculos', name: 'Vehiculos', exact: true },
  { path: '/vehiculos/vehiculo', name: 'Vehiculo', element: Vehiculo },
  { path: '/vehiculos/vehiculoform', name:'VehiculoForm', element: VehiculoForm},
  { path: '/vehiculos/vehiculoeditform/:placaVehiculo', name:'VehiculoEditForm', element: VehiculoEditForm},
  { path: '/conductores', name: 'Conductores', exact: true },
  { path: '/conductores/conductor', name: 'Conductor', element: Conductor},
  { path: '/conductores/conductorform', name:'ConductorForm', element: ConductorForm},
  { path: '/conductores/conductoreditform/:conductorId', name:'ConductorEditForm', element: ConductorEditForm}
]

export default routes
