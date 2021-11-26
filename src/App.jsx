import Main from 'src/components/main'
import {BrowserRouter} from 'react-router-dom'

export default function App () {
  return (
    <BrowserRouter>
      <div className="fixed left-0 right-0 top-0 bottom-0 w-full h-full flex flex-col">
        <Main />
      </div>
    </BrowserRouter>
  )
}