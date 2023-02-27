import sun from '../../assets/images/theme/Sun.svg'
import moon from '../../assets/images/theme/Moon.svg'
import { useTheme } from '../../hooks/useTheme'

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className={`themeToggler ${theme === 'dark' && 'themeTogglerDarkMode'}`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <img src={sun} />
      <img src={moon} />
    </div>
  )
}

export default ThemeToggler
