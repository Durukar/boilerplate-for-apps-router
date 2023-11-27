import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // Renderiza o component
    const { container } = render(<Main />)

    // Busca o elemento e verifica a existência
    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument()

    // Gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    // Renderiza o component
    const { container } = render(<Main />)

    // Verifica se a cor do background está correta
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
