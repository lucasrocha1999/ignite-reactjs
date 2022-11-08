import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

const BaseCountdownButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  gap: 0.5rem;
  padding: 1rem;
  color: ${(props) => props.theme['gray-100']};
  transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['green-500']};
  transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);
  &:not(:disabled)hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};
  transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);
  &:not(:disabled)hover {
    background: ${(props) => props.theme['red-700']};
  }
`
