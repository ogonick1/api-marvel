import { Component } from 'react';
import Spinner from '../spiner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelServise';
import './charList.scss';

class CharList extends Component {
	state = {
		charList: [],
		loading: true,
		error: false,
		newItemLoading: false,
		offset: 210,
		charEnded: false
	}

	componentDidMount() {
		this.onRequest();
	}

	onRequest = (offset) => {
		this.onCharListLoading();
		MarvelService.getAllCharacters(offset)
			.then(this.onCharListLoaded)
			.catch(this.onError)
	}
	onCharListLoading = () => {
		this.setState({
			newItemLoading: true
		})
	}

	onCharListLoaded = (newCharList) => {
		let charEnded = false;
		if (newCharList.length < 9) {
			charEnded = true;
		}
		this.setState(({ offset, charList }) => ({
			charList: [...charList, ...newCharList],
			loading: false,
			newItemLoading: false,
			offset: offset + 9,
			charEnded,
		}))
	}

	onError = () => {
		this.setState({
			error: true,
			loading: false
		})
	}

	itemRefs = [];

	setRef = (ref) => {
		this.itemRefs.push(ref);
	}

	focusOnItem = (id) => {
		this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));
		this.itemRefs[id].classList.add('char__item_selected');
		this.itemRefs[id].focus();
	}

	onKeyPress = (e, id, index) => {
		if (e.key === ' ' || e.key === "Enter") {
			this.props.onCharSelected(id);
			this.focusOnItem(index);
		}
	}



	// Этот метод создан для оптимизации,
	// чтобы не помещать такую конструкцию в метод render
	renderItems(arr) {
		const items = arr.map((item, i) => {
			let imgStyle = { 'objectFit': 'cover' };
			if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
				imgStyle = { 'objectFit': 'unset' };
			}

			return (
				<li
					className="char__item"
					tabIndex={0}
					ref={this.setRef}
					key={item.id}
					onClick={() => {
						this.props.onCharSelected(item.id);
						this.focusOnItem(i);
					}}
					onKeyPress={(e) => {
						this.onKeyPress(e, item.id, i);
					}}
				>
					<img src={item.thumbnail} alt={item.name} style={imgStyle} />
					<div className="char__name">{item.name}</div>
				</li>
			)
		});

		return (
			<ul className="char__grid">
				{items}
			</ul>
		)
	}

	render() {
		const { charList, loading, error, offset, newItemLoading, charEnded } = this.state;

		const items = this.renderItems(charList);

		const errorMessage = error ? <ErrorMessage /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = !(loading || error) ? items : null;

		return (
			<div className="char__list">
				{errorMessage}
				{spinner}
				{content}
				<button
					className="button button__main button__long"
					disabled={newItemLoading}
					style={{ 'display': charEnded ? 'none' : 'block' }}
					onClick={() => this.onRequest(offset)}>
					<div className="inner">load more</div>
				</button>
			</div>
		)
	}
}

export default CharList;
