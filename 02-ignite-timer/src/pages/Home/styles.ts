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

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  font-size: 1.125rem;
  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};
`

const BaseInput = styled.input`
  height: 2.5rem;
  font-weight: bold;
  font-size: 1.125rem;

  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  color: ${(props) => props.theme['gray-100']};
  background: transparent;

  padding: 0 0.5rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;

  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;

  color: ${(props) => props.theme['gray-100']};

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  width: 4rem;

  display: flex;
  justify-content: center;

  overflow: hidden;

  color: ${(props) => props.theme['green-500']};

  padding: 2rem 0;
`

export const StartCpountdownButton = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  padding: 1rem;
  border-radius: 8px;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`
