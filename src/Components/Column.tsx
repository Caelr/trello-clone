import { ColumnContainer, ColumnTitle } from '../styles/styles'
import { AddNewItem } from './AddNewItem'
import { Card } from './Card'
type ColumnProps = {
  text: string
}

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Learn react.js and next.js" />
      <Card text="Learn react-three/fiber" />
      <AddNewItem toggleButtonText='+ Add a new task' onAdd={() => console.log('new task added')} dark/>
    </ColumnContainer>
  )
}
