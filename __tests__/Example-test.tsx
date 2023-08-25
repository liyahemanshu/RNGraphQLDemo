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

//board

// import React from 'react';
// import { render, fireEvent } from '@testing-library/react-native';
// import board from './board'; // Adjust the import path
// import { useDispatch } from 'react-redux';
// import { useQuery } from '@apollo/client';

// // Mock react-redux useDispatch hook
// jest.mock('react-redux', () => ({
//     ...jest.requireActual('react-redux'),
//     useDispatch: jest.fn(),
// }));

// // Mock @apollo/client useQuery hook
// jest.mock('@apollo/client', () => ({
//     ...jest.requireActual('@apollo/client'),
//     useQuery: jest.fn(),
// }));

// describe('board Component', () => {
//     test('renders correctly', () => {
//         // ... (previous mock setup)

//         // Mock useQuery for 
//         useQuery.mockReturnValue({
//             data: {
//                 getUserById: {
//                     usertatistics: {
//                         followingCount: 5,
//                         // ... other userStatistics properties
//                     },
//                 },
//             },
//             refetch: jest.fn(),
//         });

//         // Mock useQuery for GET_APPLICATION_FLAGS
//         useQuery.mockReturnValueOnce({
//             data: {
//                 getAonFlags: {
//                     flags: {
//                         disabledEvent: false,
//                         // ... other flags
//                     },
//                 },
//             },
//         });

//         const { getByTestId, getByText, queryByTestId } = render(<board />);

//         // Test the event icon visibility
//         const eventIcon = queryByTestId('eventIcon');
//         if (eventIcon) {
//             // If the event icon is rendered, simulate a click
//             fireEvent.press(eventIcon);

//             // Assert that navigation.navigate was called with the expected screen name
//             expect(navigation.navigate).toHaveBeenCalledWith('EventListingScreen');

//             // Assert that the useDispatch was called when the event icon was clicked
//             expect(mockDispatch).toHaveBeenCalledWith(
//                 expect.objectContaining({
//                     eventName: 'networkOpenConnections',
//                 })
//             );
//         }

//         // Test other assertions based on the component's behavior
//         // ...

//         // Clean up any subscriptions or mocks
//         jest.clearAllMocks();
//     });
// });

//MockProvider

// import React from 'react';
// import { render, fireEvent } from '@testing-library/react-native';
// import { MockedProvider } from '@apollo/client/testing';
// import { NavigationContainer } from '@react-navigation/native';
// import Board from './Board'; // Adjust the import path
// import { useDispatch } from 'react-redux';

// // ... (mock imports and setup)

// const mocks = [
//     // ... Apollo Client mocks for APIs  queries
// ];

// describe('Board Component', () => {
//     test('renders correctly', async () => {
//         // Mock the useDispatch hook
//         const mockDispatch = jest.fn();
//         useDispatch.mockReturnValue(mockDispatch);

//         // Render the Board component with Apollo MockedProvider and NavigationContainer
//         const { getByTestId, getByText, queryByTestId } = render(
//             <MockedProvider mocks={mocks} addTypename={false}>
//                 <NavigationContainer>
//                     <Board />
//                 </NavigationContainer>
//             </MockedProvider>
//         );

//         // ... (test assertions and interactions)

//         // Clean up any subscriptions or mocks
//         jest.clearAllMocks();
//     });
// });

// useAuthActions.mock.js (or useAuthActions.mock.ts)

// export default function useAuthActionsMock() {
//     return {
//         signIn: jest.fn(),
//         autoSignIn: jest.fn(),
//         socialSignIn: jest.fn(),
//         signOut: jest.fn(),
//         deleteAccount: jest.fn(),
//         unAuthorized: jest.fn(),
//         saveLogin: jest.fn(),
//         finishLogin: jest.fn(),
//         initMixpanel: jest.fn(),
//         setMixpanelUser: jest.fn(),
//         resetMixpanelUser: jest.fn(),
//         updateUser: jest.fn(),
//         trackEvent: jest.fn(),
//         setApplicationData: jest.fn(),
//     };
// }

// import useAuthActionsMock from './path-to-useAuthActions.mock'; // Adjust the path accordingly

// jest.mock('./path-to-useAuthActions', () => {
//     return useAuthActionsMock;
// });

// // Now you can write your test cases

// import useAuthActions from './path-to-useAuthActions'; // This will now import the mock

// describe('Authentication Tests', () => {
//     it('should simulate sign-in', () => {
//         useAuthActions.signIn.mockImplementationOnce(({ setIsLoading }) => {
//             setIsLoading(false);
//             // Additional test-specific behavior or assertions
//         });

//         // Your test code that uses useAuthActions.signIn
//     });

//     // More test cases...
// });
