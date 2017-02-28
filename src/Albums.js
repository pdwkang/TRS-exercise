import React, { Component } from 'react';
import $ from 'jquery'

class EachAlbum extends Component{
	constructor(props) {
		super(props);
		this.state = {
			eachAlbum: ''
		}	
		this.albumRoute = this.albumRoute.bind(this)
	}
    albumRoute(){
    	this.props.router.push('/user/' + this.props.album.userId + '/album/' + this.props.album.id)
    }	
	render(){
		return(
			<div onClick={this.albumRoute}>
				<h3>{this.props.album.title}</h3>
				<h5>{this.props.album.id}</h5>			
			</div>
		)
	}
}
class Albums extends Component {
	constructor(props) {
		super(props);
		this.state = {
			thisUsersAlbums:[]
		}
	}
	componentDidMount() {
		$.getJSON('http://jsonplaceholder.typicode.com/albums', (albumData)=>{
				// console.log(albumData)
			var albums = [];
			albumData.map((album, index)=>{
				if(this.props.router.params.id == album.userId){
					albums.push(
						<div key={index} style={{marginTop:60}}>
							<EachAlbum router={this.props.router} album={album}/>
						</div>
					)
				}
			})
			this.setState({
				thisUsersAlbums : albums
			})
		})		
	}	
  render() {
    return (
      <div>
      	      	{this.state.thisUsersAlbums}
      </div>
    );
  }
}

export default Albums;

