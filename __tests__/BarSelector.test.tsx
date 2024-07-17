/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BarSelector from '../src/app/widgets/components/BarSelector';

test('renders BarSelector and allows bar selection', () => {
    render(<BarSelector />);
    const buttonElement = screen.getByText(/1/i);
});
