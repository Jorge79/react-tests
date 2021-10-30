import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Componente Principal', () => {
  describe('Quando o app do banco é aberto', () => {
    it('o nome é exibido', () => {
      render(<App />);
      expect(screen.getByText('ByteBank')).toBeInTheDocument();
    });

    it('o saldo é exibido', () => {
      render(<App />);
      expect(screen.getByText('Saldo:')).toBeInTheDocument();
    });

    it('o botão é exibido', () => {
      render(<App />);
      expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    });
  });
});
