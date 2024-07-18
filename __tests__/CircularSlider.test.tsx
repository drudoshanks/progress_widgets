/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import CircularSlider from '@/app/widgets/components/CircularSlider';


describe("CircularSlider", () => {
    it("renders CircularSlider", () => {
        render(<CircularSlider />);
        const sliderElement = screen.getByRole("slider");
        expect(sliderElement).toBeInTheDocument();
    });
});
