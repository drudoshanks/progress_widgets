/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CircularSlider from '../src/app/widgets/components/CircularSlider';

test('renders CircularSlider', () => {
    render(<CircularSlider />); // ARRANGE
    const sliderElement = screen.getByRole('slider'); // ACTION
    expect(sliderElement).toBeInTheDocument(); // ASSERT
});
