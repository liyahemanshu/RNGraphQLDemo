import React from "react"
import Example from "../Example"
import { fireEvent, render } from "@testing-library/react-native"

test('examples of some things', async () => {
    const expectedUsername = 'Ada Lovelace'

    const screen = render(<Example />)
    // console.log(screen);
    fireEvent.changeText(screen.getByTestId('input'), expectedUsername)
    fireEvent.press(screen.getByText('Print Username'))

    // Using `findBy` query to wait for asynchronous operation to finish
    const usernameOutput = await screen.findByTestId('printed-username')

    // Using `toHaveTextContent` matcher from `@testing-library/jest-native` package.
    // expect(usernameOutput).toHaveBeenCalledWith(expectedUsername)

    expect(screen.toJSON()).toMatchSnapshot()
});

