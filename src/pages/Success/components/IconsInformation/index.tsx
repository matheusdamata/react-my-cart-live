import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Container, Content, IconItem, IconsContent } from './style'

export function IconsInformation() {
  return (
    <Container>
      <Content>
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
        <IconsContent>
          <IconItem variant="yellow">
            <Timer size={18} weight="fill" />
          </IconItem>
          <div>
            <p>Previsão de entrega</p>
            <strong>20 min - 30 min</strong>
          </div>
        </IconsContent>
        <IconsContent>
          <IconItem variant="yellowDark">
            <CurrencyDollar size={18} weight="fill" />
          </IconItem>
          <div>
            <p>Pagamento na entrega</p>
            <strong>Cartão de Crédito</strong>
          </div>
        </IconsContent>
      </Content>
    </Container>
  )
}
