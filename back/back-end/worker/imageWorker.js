const im=require('imagemagick');
im.readMetadata("../public/001.jpg",function(readMetadata){
		console.log('shot at '+metadata)
})
