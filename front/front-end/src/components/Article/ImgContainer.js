import React from 'react';
class ImageContainer extends React.Component { 
	constructor(props) {  
	super(props);   
  }  
    render(){

 	  if(this.props.article.imageURL!=="http://localhost:3000/null"){
 	  	console.log(this.props.article.imageURL);
 		return(
 		
 			<img src={this.props.article.imageURL} alt="image.jpg"/>
 		
 		)

 	  }else{
 	  	return null;
 	  }
 	  
    }

};
export default ImageContainer;
