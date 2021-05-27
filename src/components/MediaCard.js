import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		width: 345,
	},
	media: {
		height: 340,
	},
});

export default function MediaCard(props) {
	const classes = useStyles();

	const { name, manufacturer, description, color, price, imageFileName, screen, processor, ram, url } =
		props.phone[0];

	return (
		<Card id="phone-details" className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={url}
					title={imageFileName}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{name} by {manufacturer}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{description}
					</Typography>
                    <Typography gutterBottom variant="h6" component="h3">
						Price: {price}€
					</Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Color: {color} / Screen: {screen}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        CPU: {processor} / Ram: {ram}GB
                    </Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
