import React from 'react'
import { render, screen } from '@testing-library/react'
import { CompanyName } from './CompanyName'

test('renders Dashboard Analytics Logo', () => {
  render(<CompanyName />)
  const linkElement = screen.getByText(/Dashboard Analytics/i)
  expect(linkElement).toBeInTheDocument()
})
