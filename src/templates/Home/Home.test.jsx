import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import Home from './Home';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Deus é fiel',
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: theme.colors.backgroundSecond,
  });
  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background', 'blue');
});
