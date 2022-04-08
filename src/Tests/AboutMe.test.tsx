import { render } from '@testing-library/react'
import AboutMe from '../Components/AboutMePage/AboutMe'

test('renders learn react link', () => {
  render(<AboutMe />)
  // const linkElement = screen.getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument()
})
