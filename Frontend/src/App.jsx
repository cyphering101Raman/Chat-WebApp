import React, { useEffect } from 'react'
import { Container } from './components/index.js'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './store/authStore.js'


const App = () => {

  const { checkAuth, isAuthLoading } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth])


  if(isAuthLoading) return null;

  return (
    <>
      <Container />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}

export default App