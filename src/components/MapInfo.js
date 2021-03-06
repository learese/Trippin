import React from "react";
import { connect }  from 'react-redux';
import AddLocationButton from './AddLocationButton';
//import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import "./InfoPhotos.css"
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



class MapInfo extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            mapLocation: this.props.mapLocation,
            info: this.props.mapLocation.Info,
            phone: this.props.mapLocation.Info.placePhoneNumber,
            website: this.props.mapLocation.Info.placeWebsite,
            status: this.props.mapLocation.Info.placeStatus,
            rating: this.props.mapLocation.Info.placeRating,
            reviews: this.props.mapLocation.Info.placeReviews,
            photos: this.props.mapLocation.Info.placePhotos
        };
    }



    componentDidUpdate(prevProps) {
        if (prevProps.mapLocation !== this.props.mapLocation) {
            this.setState({
                mapLocation: this.props.mapLocation,
                info: this.props.mapLocation.Info,
                phone: this.props.mapLocation.Info.placePhoneNumber,
                website: this.props.mapLocation.Info.placeWebsite,
                status: this.props.mapLocation.Info.placeStatus,
                rating: this.props.mapLocation.Info.placeRating,
                reviews: this.props.mapLocation.Info.placeReviews,
                photos: this.props.mapLocation.Info.placePhotos
            })
        }
    }

    phoneDisplay = () => {
        if (this.state.phone !== undefined && this.state.phone !== ''){
            return (
                <Box fontWeight="fontWeightLight" p={2} borderColor="transparent">
                <Typography variant="h5" >Phone Number</Typography>
                <Typography variant="subtitle1"> {this.state.phone}</Typography>
               </Box>
            )
    } else return null;
}

    websiteDisplay = () => {
        if (this.state.website !== undefined && this.state.website !== ''){
            return (
                <Box fontWeight="fontWeightLight" p={2} borderColor="transparent">
                <Typography variant="h5" >Website</Typography>
                <Typography variant="subtitle1">{this.state.website}</Typography>
               </Box>
            )
    } else return null;
    }

    ratingDisplay = () => {
        
        let ratingValue = 0;
        if (this.state.rating) { ratingValue = parseFloat(this.state.rating.toString()); };
        
        if (this.state.rating !== undefined && this.state.rating !== ''){
            return (
                <Box borderColor="transparent" mb={2} p={1} fontWeight="fontWeightLight">
                <Typography variant="h5">Rating</Typography>
                <Rating name="half-rating-read" defaultValue={0} value={ratingValue} precision={0.1} readOnly />
                </Box>
            )
    } else return null;
    }

    photoDisplay = () => {
        let photos = this.state.photos;
        if (this.state.photos !== undefined && this.state.photos !== ''){
        return (
            <div className="photos">
            <div className="photos-display">
            <Paper elevation={2} style={{maxWidth: 400, maxHeight: 200, overflow: 'auto'}}>

        <GridList className="gridList" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: 600, height:200, spacing: "0"}} cols={5}>
          {photos.map((photo) => (
            <GridListTile style={{width: "100px", spacing: "0"}} key={photo.getUrl({'maxWidth': 200, 'maxHeight': 200})} cols={5}>

              <img src={photo.getUrl({'maxWidth': 200, 'maxHeight': 200})}  />
            </GridListTile>
          ))}
        </GridList>
        </Paper>

            </div>
            </div>
        );
    } else return null;
}

    reviewDisplay = () => {

        // reviews is an array of reviews
        let reviews = this.state.reviews;
        if ( reviews !== undefined) {
            if (reviews.length > 0) {
            return (
                <Box borderColor="transparent" mb={2} p={1} fontWeight="fontWeightLight">
                <Typography variant="h5">Reviews</Typography>
                {this.reviewRender(reviews)}
                </Box>
                
            )
                 }
        }
    }

    reviewRender = (reviews) => {
        return (
            <Paper elevation={2} style={{maxWidth: 600, maxHeight: 300, overflow: 'auto', margin: "1rem 2rem 1rem 3rem"}}>
            <List>
            {reviews.map((review, key) => (
            <ListItem key={`item-${key}-${key}`}>
            {this.reviewCardRender(review)}
          </ListItem>
        ))}
            </List>
          </Paper>
        )
    }

    reviewCardRender = (review) => {
        let author = review.author_name;
        let authorInitial = author.charAt(0);
        let text = review.text;
        let date = review.relative_time_description;
        let rating = review.rating;
        return (

        <Card style={{maxWidth: "500px", padding: "1rem 1rem"}} layout="vertical">

        <CardHeader
          avatar={
            <Avatar aria-label="Review" style={{backgroundColor: red[500]}}>
              {authorInitial}
            </Avatar>
          }
          title={author}
          subheader={date}
        />
        <Rating name="half-rating-read" defaultValue={0} value={rating || 0} precision={0.1} readOnly />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>

      </Card>
        )
    }







    render() {
       return(

            <div className="mainInfo">
            <Box borderColor="transparent" p={2}>
            <Box  borderColor="transparent"  fontWeight="fontWeightBold" borderBottom={1} p={1} mb={2}>
            <Typography>LOCATION INFORMATION</Typography>
            </Box>

           {this.phoneDisplay()}

           {this.websiteDisplay()}

           {this.ratingDisplay()}

           <Box fontWeight="fontWeightLight"  borderColor="transparent">
                <Typography variant="h5" >Website</Typography>
                {this.photoDisplay()}
               </Box>


           {this.reviewDisplay()}

           <div className="addButton">
                <AddLocationButton />
            </div>

               
                </Box>
            </div> 
        )
    }
}

/* const styles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        font: '30px Roboto'
      },
    },
  })); */

const mapStateToProps = (state) => {
    console.log('State',state);
    return { 
        mapLocation: state.mapLocation
    }
}

export default connect(mapStateToProps)(MapInfo); 



