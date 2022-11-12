import { useContext } from 'react'
import { Context } from '../../context/Context'

import { Navigate } from 'react-router-dom'
import { Container, IconItem, IconsContainer, IconsContent } from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  const { user } = useContext(Context)

  const isCheckout = user.isCheckoutSuccess

  return (
    <>
      {isCheckout ? (
        <Container>
          <header>
            <h1>Uhu! Seu pedido chegará em breve</h1>
            <span>Agora é só aguarda que logo o café chegará até você</span>
          </header>
          <IconsContainer>
            <IconsContent>
              <IconItem variant="purple">
                <MapPin size={18} weight="fill" />
              </IconItem>
              <div>
                <p>
                  Entrega em <strong>Rua da Programação, 100</strong>
                </p>
                <p>Bairro VSCode - Goiânia, GO</p>
              </div>
            </IconsContent>
          </IconsContainer>
          <IconsContainer>
            <IconsContent>
              <IconItem variant="yellow">
                <Timer size={18} weight="fill" />
              </IconItem>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </IconsContent>
          </IconsContainer>
          <IconsContainer>
            <IconsContent>
              <IconItem variant="yellowDark">
                <CurrencyDollar size={18} weight="fill" />
              </IconItem>
              <div>
                <p>
                  Entrega em <strong>Rua da Programação, 100</strong>
                </p>
                <p>Bairro VSCode - Goiânia, GO</p>
              </div>
            </IconsContent>
          </IconsContainer>
        </Container>
      ) : (
        <Navigate to="/" />
      )}
    </>
  )
}
