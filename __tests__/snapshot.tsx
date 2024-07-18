import { render } from "@testing-library/react";
import CircularSlider from '@/app/widgets/components/CircularSlider';
import BarSelector from '@/app/widgets/components/BarSelector';

test('renders CircularSlider', () => {
    const { container } = render(<CircularSlider />);
    expect(container).toMatchSnapshot();
});

test('renders BarSelector', () => {
    const { container } = render(<BarSelector />);
    expect(container).toMatchSnapshot();
});
