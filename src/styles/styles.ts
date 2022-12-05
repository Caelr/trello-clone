import styled from 'styled-components'

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 2rem;
  width: 100%;
`

export const ColumnContainer = styled.div`
  background-color: #ebecf0;
  border-radius: 0.3rem;
  flex-grow: 0;
  margin-inline-end: 2rem;
  min-block-size: 4rem;
  padding: 0.8rem;
  width: 30rem;
`

export const ColumnTitle = styled.h2`
  padding-block-end: 1.2rem;
  padding-block-start: 0.6rem;
  padding-inline: 1.6rem;
  font-weight: bold;
`

export const CardContainer = styled.p`
   background-color: #fff;
   border-radius: 0.3rem;
   box-shadow: #091e4240 0 1px 0 0;
   cursor: pointer;
   margin-block-end: 0.5rem;
   max-inline-size: 30rem;
   padding-block: 0.5rem;
   padding-inline: 1rem;
`

type AddItemButtonProp = {
  dark?: boolean;
}

export const AddItemButton = styled.button<AddItemButtonProp>`
  background-color: #ffffff3d;
  border-radius: 0.3rem;
  border: none;
  color: ${(props) => (props.dark ? '#000' : '#fff')};
  cursor: pointer;
  max-inline-size: 30rem;
  padding-block: 1rem;
  padding-inline: 1.2rem;
  text-align:left;
  transition: background 85ms ease-in;
  &:hover {
    background-color: #ffffff52;
  }
`

export const NewItemFormContainer = styled.div`
  max-inline-size: 30rem;
  display: flex;
  flex-direction: column;
  inline-size:100%;
  align-items: flex-start;
`

export const NewItemButton = styled.button`
  background-color: #5aac44;
  border : none;
  border-radius: 0.3rem;
  box-shadow: none;
  color: #fff;
  padding-block: 0.6rem;
  padding-inline: 1.2rem;
  text-align: center;
`

export const NewItemInput = styled.input`
  border-radius: 0.3rem;
  border: none;
  box-shadow: #091e4240 0 1px 0 0;
  margin-block-end: 0.5rem;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  inline-size: 100%;
`
