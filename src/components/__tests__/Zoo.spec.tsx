import { render, screen } from '@testing-library/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Header from "../Header/Header";
import Main from '../../pages/Main/Main';
import Form from '../../pages/Form/Form';
import { fireEvent } from '@testing-library/react';

describe('Zoo management', () => {
    it('Header - renders the content and icon props correctly', () => {
        const { container } = render(
            <Header data-testid="orgHeader" content="Zoo Management" icon="fa-brands fa-d-and-d" />
        );
        const orgContent = screen.getByText('Zoo Management', { exact: true });
        const orgIcon = screen.getByTestId('orgHeader');

        expect(orgContent).toBeInTheDocument();
        expect(orgIcon).toHaveClass('fa-brands fa-d-and-d');
    });

    it('Click Event - triggers addAnimal event on add button click', () => {
        const addAnimal = jest.fn();
        const { container } = render(
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Routes>
                    <Route path='/' element={<Main addAnimals={addAnimal} />} />
                    <Route path='/form' element={<Form />} />
                </Routes>
            </Router>
        );

        const addButton = screen.getByRole('button', { name: /add/i });
        fireEvent.click(addButton);

        expect(addAnimal).toHaveBeenCalledTimes(1);
    });

    it('Scroll Event - handleScroll function is triggered on scroll', () => {
        const addAnimal = jest.fn();
        const handleScroll = jest.fn();
        const { container } = render(
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Routes>
                    {/* <Route path='/' element={<Main addAnimals={addAnimal} />} /> */}
                    <Route path='/' element={<Form handleScroll={handleScroll} />} />
                </Routes>
            </Router>
        );

        // const addButton = screen.getByRole('button', { name: /add/i });
        // fireEvent.click(addButton);
        fireEvent.scroll(window, { target: { scrollY: 100 } });

        expect(handleScroll).toHaveBeenCalled();
    });
});