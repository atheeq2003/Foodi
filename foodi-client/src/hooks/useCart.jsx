import React from 'react'
import { AuthContext } from '../contexts/AuthProvider'

const useCart = () => {
  const {user} = useContext(AuthContext);
  
  return (
    <div>useCart</div>
  )
}

export default useCart