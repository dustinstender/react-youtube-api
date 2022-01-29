import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onInputChange = (event) => {
		this.setState({ term: event.target.value });
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form" action="">
					<div className="field">
						<label htmlFor="">Search Video</label>
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
