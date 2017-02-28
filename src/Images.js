import React, { Component } from 'react';
import $ from 'jquery'

class EachImage extends Component{
	constructor(props) {
		super(props);
		this.state = {
			eachImage: ''
		}	
		this.imageRoute = this.imageRoute.bind(this)
	}
	// noticed api for photos does not give user id of each album, 
	// changing routes in index.js for images to album/:id/image/:id
    imageRoute(){
    	this.props.router.push('/album/' + this.props.image.albumId + '/image/' + this.props.image.id)
    }	
	render(){
		// console.log(this.props.image)
		return(
			<div onClick={this.imageRoute}>
				<h5>{this.props.image.title}</h5>
				<img style={{width:'10%', height:'10%'}} src={this.props.image.url}/>		
				
			</div>
		)
	}
}
class Images extends Component {
	constructor(props) {
		super(props);
		this.state = {
			thisAlbumsImages:[]
		}
	}
	componentDidMount() {
		// console.log(this.props.router.params)
		$.getJSON('http://jsonplaceholder.typicode.com/photos', (imageData)=>{
				// console.log(imageData)
			var images = [];
			imageData.map((image, index)=>{
				// console.log(image)
				
				if(this.props.router.params.id[1] == image.albumId){
					// console.log('added image')
					images.push(
						<div key={index} style={{marginTop:60}}>
							<EachImage router={this.props.router} image={image}/>
						</div>
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

export default Images;

