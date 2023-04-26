import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Text } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Text />', () => {
  it('should render a text', () => {
    renderTheme(
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
        quam tenetur alias animi in atque dolorem! Hic voluptatibus inventore
        quas reiciendis accusantium facere, similique nobis impedit.Excepturi
        itaque doloribus facere!
      </Text>,
    );
    expect(
      screen.getByText(`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
        quam tenetur alias animi in atque dolorem! Hic voluptatibus inventore
        quas reiciendis accusantium facere, similique nobis impedit.Excepturi
        itaque doloribus facere!`),
    ).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
        quam tenetur alias animi in atque dolorem! Hic voluptatibus inventore
        quas reiciendis accusantium facere, similique nobis impedit.Excepturi
        itaque doloribus facere!
      </Text>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
