import React, { Component } from 'react';
import $ from 'jquery'

class SingleImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentImage:''
		}
	}
	componentDidMount() {
		console.log(this.props.router.params)
		$.getJSON('http://jsonplaceholder.typicode.com/photos', (imageData)=>{
				// console.log(imageData)
			var images = [];
			imageData.map((image, index)=>{
				// console.log(image)
				
				if((this.props.router.params.id[0] == image.albumId)&&(this.props.router.params.id[1] == image.id)){
					// console.log('added image')
					images.push(
						<img src={image.url} />
					)
				}
			})
			this.setState({
				thisAlbumsImages : images
			})
		})		
	}	
  render() {
    return (
      <div>
      	    {this.state.thisAlbumsImages}
      </div>
    );
  }
}

export default SingleImage;

