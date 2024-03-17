import * as React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({
  isSignedIn,
  path = 'login',
  children,
}: {
  isSignedIn: boolean
  path?: string
  children: React.ReactElement
}) => {
  if (!isSignedIn) {
    return <Navigate to={path} replace />
  }
  return children
}

export default PrivateRoute
