import Skeleton from 'react-loading-skeleton'
import { Container, Content } from './style'

type IconsInformationProps = {
  variant: number
}

export function IconsInformationSkeleton({
  variant,
}: IconsInformationProps): any {
  return Array(variant)
    .fill(0)
    .map((_, i) => (
      <Container key={i}>
        <Skeleton circle width={32} height={32} />
        <Content>
          <Skeleton count={2} />
        </Content>
      </Container>
    ))
}
