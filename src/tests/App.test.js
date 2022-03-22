import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import renderWithRouter from '../renderWithRouter'

describe("Teste App.js", () => {
    test("dasdasd", () => {
        renderWithRouter(<App />)
    })
})