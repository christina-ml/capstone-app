import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';


describe('NavBar component', () => {
    it('renders CryptoTalk link', () => {
        render(<NavBar />);
        const linkElement = screen.getByText(/CryptoTalk/i);
        expect(linkElement).toBeInTheDocument();
      });
})

