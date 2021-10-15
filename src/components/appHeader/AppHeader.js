
import { useTranslation } from 'react-i18next';
import './appHeader.scss';

const AppHeader = () => {
	const { t, i18n } = useTranslation();

	const switchLang = (lang = 'en') => {
		i18n.changeLanguage(lang);
	}

	return (
		<header className="app__header">
			<button onClick={() => switchLang('en')} >EN</button>
			<button onClick={() => switchLang('fr')} >FR</button>
			<h1 className="app__title">
				<a href="#">
					<span>{t('appHeader.marvel')}</span> information portal
				</a>
			</h1>
			<nav className="app__menu">
				<ul>
					<li>
						<a href="#">
							Characters
						</a>
					</li>
						/
					<li>
						<a href="#">
							Comics
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default AppHeader;