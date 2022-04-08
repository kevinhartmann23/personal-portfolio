import { render } from '@testing-library/react'
import Experience from '../Components/ExperiencePage/Experience'

test('renders learn react link', () => {
  render(<Experience />)
  // const linkElement = screen.getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument()
})
