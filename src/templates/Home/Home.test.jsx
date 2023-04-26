import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Home from './Home';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
