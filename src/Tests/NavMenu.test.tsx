import { render } from '@testing-library/react'
import NavMenu from '../Components/NavMenu/NavMenu'
import { BrowserRouter } from 'react-router-dom'

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <NavMenu />
    </BrowserRouter>
  )
})
