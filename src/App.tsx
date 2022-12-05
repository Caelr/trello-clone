import { AddNewItem } from './Components/AddNewItem'
import { Column } from './Components/Column'
import { AppContainer } from './styles/styles'

export const App = () => {
  return (
    <AppContainer>
      <Column text="Hello" />
      <AddNewItem
        toggleButtonText="+ Add another a new task list"
        onAdd={() => console.log('item created')}
      />
    </AppContainer>
  )
}
