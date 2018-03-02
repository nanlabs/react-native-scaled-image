import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';


class ScaledImage extends Component {

	constructor(props){
		super(props);
	}

	componentWillMount(){
		if (this.props.source.uri){
			Image.getSize(this.props.source.uri, (width, height) => {
				this.setImageSize(width, height);
			});
		} else {
			let {width, height} = resolveAssetSource(this.props.source);
			this.setImageSize(width, height);
		}
	}

	setImageSize(width, height){
		if (this.props.width && !this.props.height) {
			this.setState({
				width: this.props.width, 
				height: height * (this.props.width / width)
			});
		} else if (!this.props.width && this.props.height) {
			this.setState({
				width: width * (this.props.height / height),
				height: this.props.height
			});
		} else {
			this.setState({
				width: width,
				height: height
			});
		}
	}

	getStyles(){
		let styles = [{
			height: this.state.height, 
			width: this.state.width
		}];

		if (this.props.style) {
			styles.push(this.props.style);
		}

		return styles;
	}

	render() {
		if (this.state){
			return (
				<Image 
					source={this.props.source}
					style={this.getStyles()}
				/>
			)
		} else {
			return null
		}
	}

}

ScaledImage.propTypes = {
    source: PropTypes.any.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.any
};

export default ScaledImage;
