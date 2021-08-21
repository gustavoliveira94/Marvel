import { render } from '@testing-library/react';

import Entities from '../Entities';

const mock = [
  {
    name: 'Gustavo',
    role: 'Front End',
  },
  {
    name: 'Hulk',
  },
];

describe('Testing Component <Entities />', () => {
  it('Check render props', () => {
    const { getByText, getByTestId } = render(
      <Entities title="Personagens" entity={mock} />,
    );

    expect(getByTestId('entities')).toBeInTheDocument();
    expect(getByText('Gustavo')).toBeInTheDocument();
    expect(getByText('Front End')).toBeInTheDocument();
    expect(getByText('Hulk')).toBeInTheDocument();
  });

  it('Check no entities', () => {
    const { queryByTestId } = render(
      <Entities title="Personagens" entity={[]} />,
    );

    expect(queryByTestId('entities')).not.toBeInTheDocument();
  });
});
