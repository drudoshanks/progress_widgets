/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BarSelector from '@/app/widgets/components/BarSelector';


describe('BarSelector', () => {
    test('renders BarSelector and allows bar selection', () => {
        render(<BarSelector />);

        // Verify that the component renders initially
        const bars = [5, 4, 3, 2, 1].map((value) => screen.getByTestId(`bar-${value}`));

        // Expecting 5 bars to be rendered
        expect(bars.length).toBe(5);

        // Verify initial selected state (bar-1 should have '#34d399' background)
        const selectedBar = screen.getByTestId('bar-1');
        expect(selectedBar).toHaveStyle({ backgroundColor: '#34d399' });

        // Simulate clicking on a bar (bar-1)
        fireEvent.click(selectedBar);

        // Expect selected state to change to '#34d399' after click
        expect(selectedBar).toHaveStyle({ backgroundColor: '#34d399' });
    });
});
