import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // Renderiza o component
    const { container } = render(<Main />)

    // Busca o elemento e verifica a existência
    expect(
      screen.getByRole('heading', { name: /casa da mae sylvannas/i })
    ).toBeInTheDocument()

    // Gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
