import { render } from '@testing-library/react'
import Poster from '../Components/Poster/Poster'

test('renders learn react link', () => {
  render(<Poster />)
  // const linkElement = screen.getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument()
})
