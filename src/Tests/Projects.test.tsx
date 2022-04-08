import { render } from '@testing-library/react'
import Projects from '../Components/ProjectsPage/Projects'

test('renders learn react link', () => {
  render(<Projects />)
  // const linkElement = screen.getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument()
})
