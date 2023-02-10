import React from 'react'
import "./Product.css"
import { Star } from '@mui/icons-material'
import { Rating } from '@mui/material'

function Product({item}) {
  return (
        <div className="product">
            <div className="product__info">
                <p>{item.title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{item.price}</strong>
                </p>
                <div className="product__rating">
                    <Rating readOnly value={item.rating.rate} precision={0.5}  />
                </div>
            </div>
            <img src={item.image} alt={item.title} className="product__image" />
            <button className="product__button">Add to basket</button>
        </div>
        // <Card sx={{display: 'flex'}}>
        //     <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        //         <CardContent sx={{ flex: '1 0 auto'}}>
        //         <Typography component="div" variant='h5'>
        //             Alienware x17 R2 Gaming Laptop
        //         </Typography>
        //         <Typography variant='subtitle1' component='div'>
        //             Description
        //         </Typography>
        //         <Box sx={{display: 'flex'}}>
        //             <Rating value={4} readOnly/>
        //             <Typography>(160)</Typography>
        //         </Box>  
        //     </CardContent>
        //     <CardActions>
        //         <Button variant='contained'>Add to Cart</Button>
        //     </CardActions>
        //     </Box>
        //     <CardMedia
        //         component="img"
        //         sx={{ width: 250, height: 250}}
        //         image="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-x17-r2/media-gallery/laptop-alienware-x17-r2-nonlit-touchpad-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full"
        //         alt='Test'
        //     />
            
        // </Card>
  )
}

export default Product