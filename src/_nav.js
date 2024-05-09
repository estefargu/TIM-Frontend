import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilSpeedometer,
  cilFastfood,
  cilCarAlt,
  cilPeople
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
  },
  {
    component:CNavTitle,
    name:'Management'
  },
  {
    component: CNavGroup,
    name: 'Vehiculos',
    to:'/vehiculos',
    icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
    items:[
      {
        component: CNavItem,
        name:'Vehiculos',
        to: '/vehiculos/vehiculo'
      }
    ]
  },
  {
    component: CNavGroup,
    name: 'Conductores',
    to:'/conductores',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items:[
      {
        component: CNavItem,
        name:'Conductores',
        to: '/conductores/conductor'
      }
    ]
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
