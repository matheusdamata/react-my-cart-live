import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context'

import { Navigate } from 'react-router-dom'
import { Container, SkeletonContainer } from './styles'
import { IconsInformation } from './components/IconsInformation'
import { IconsInformationSkeleton } from './components/IconsInformationSkeleton'

export function Success() {
  const [isLoading, setIsLoading] = useState(true)

  const { user } = useContext(Context)

  const isCheckout = user.isCheckoutSuccess

  useEffect(() => {
    setTimeout(LoadingComplete, 1000)
  }, [])

  function LoadingComplete() {
    setIsLoading(false)
  }

  return (
    <>
      {isCheckout ? (
        <Container>
          <header>
            <h1>Uhu! Seu pedido chegará em breve</h1>
            <span>Agora é só aguarda que logo o café chegará até você</span>
          </header>

          {isLoading ? (
            <SkeletonContainer>
              <IconsInformationSkeleton variant={3} />
            </SkeletonContainer>
          ) : (
            <IconsInformation />
          )}
        </Container>
      ) : (
        <Navigate to="/" />
      )}
    </>
  )
}
