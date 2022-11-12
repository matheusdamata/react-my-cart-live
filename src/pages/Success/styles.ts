import styled from 'styled-components'

export const Container = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme['base-title']};

  border-radius: 6px;
  padding: 2rem 2rem 0 2rem;

  header {
    margin-bottom: 2rem;
  }

  h1 {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-size: 0.875rem;
  }
`

export const SkeletonContainer = styled.div`
  margin-bottom: 1rem;
`
