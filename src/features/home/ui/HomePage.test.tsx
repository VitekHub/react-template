import { render, screen } from '@/test/utils'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  it('renders the translated app name', () => {
    render(<HomePage />)

    expect(screen.getByRole('heading', { name: 'React Template' })).toBeInTheDocument()
  })
})
