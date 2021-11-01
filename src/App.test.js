import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App, { calcularNovoSaldo } from './App';

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
  describe('Quando uma transação é feita', () => {
    it('a qual é um saque, o valor irá diminuir', () => {
      const valores = {
        transacao: 'saque',
        valor: 50,
      };
      const novoSaldo = calcularNovoSaldo(valores, 150);
      expect(novoSaldo).toBe(100);
    });
    it('que é um saque, a transação deve ser realizada', () => {
      const { getByText, getByLabelText, getByTestId } = render(<App />);
      const saldo = getByText('R$ 1000');
      const transacao = getByLabelText('Saque');
      const valor = getByTestId('valor');
      const botaoTransacao = getByText('Realizar operação');

      expect(saldo.textContent).toBe('R$ 1000');
      fireEvent.click(transacao, { target: { value: 'saque' } });
      fireEvent.change(valor, { target: { value: 10 } });
      fireEvent.click(botaoTransacao);

      expect(saldo.textContent).toBe('R$ 990');
    });
  });
});
