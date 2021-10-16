import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';

const items = [
	{
		imgSrc: uw,
		name: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB',
		price: '9.99$',
	},
	{
		imgSrc: xMen,
		name: 'X-Men: Days of Future Past',
		price: 'NOT AVAILABLE',
	},
];

const ComicsList = () => {
	return (
		<div className="comics__list">
			<ul className="comics__grid">
				{
					items.map((item) => (
						<a href="#">
							<img src={item.imgSrc} alt="ultimate war" className="comics__item-img" />
							<div className="comics__item-name">{item.name}</div>
							<div className="comics__item-price">{item.price}</div>
						</a>
					))
				}
			</ul>
			<button className="button button__main button__long">
				<div className="inner">load more</div>
			</button>
		</div>
	)
}

export default ComicsList;



				{/* <li className="comics__item">
					<a href="#">
						<img src={uw} alt="ultimate war" className="comics__item-img" />
						<div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
						<div className="comics__item-price">9.99$</div>
					</a>
				</li>
				<li className="comics__item">
					<a href="#">
						<img src={xMen} alt="x-men" className="comics__item-img" />
						<div className="comics__item-name">X-Men: Days of Future Past</div>
						<div className="comics__item-price">NOT AVAILABLE</div>
					</a>
				</li>
				<li className="comics__item">
					<a href="#">
						<img src={uw} alt="ultimate war" className="comics__item-img" />
						<div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
						<div className="comics__item-price">9.99$</div>
					</a>
				</li>
				<li className="comics__item">
					<a href="#">
						<img src={xMen} alt="x-men" className="comics__item-img" />
						<div className="comics__item-name">X-Men: Days of Future Past</div>
						<div className="comics__item-price">NOT AVAILABLE</div>
					</a>
				</li>
				<li className="comics__item">
					<a href="#">
						<img src={uw} alt="ultimate war" className="comics__item-img" />
						<div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
						<div className="comics__item-price">9.99$</div>
					</a>
				</li>
				<li className="comics__item">
					<a href="#">
						<img src={xMen} alt="x-men" className="comics__item-img" />
						<div className="comics__item-name">X-Men: Days of Future Past</div>
						<div className="comics__item-price">NOT AVAILABLE</div>
					</a>
				</li>
				<li className="comics__item">
					<a href="#">
						<img src={uw} alt="ultimate war" className="comics__item-img" />
						<div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
						<div className="comics__item-price">9.99$</div>
					</a>
				</li>
				<li className="comics__item">
					<a href="#">
						<img src={xMen} alt="x-men" className="comics__item-img" />
						<div className="comics__item-name">X-Men: Days of Future Past</div>
						<div className="comics__item-price">NOT AVAILABLE</div>
					</a>
				</li> */}