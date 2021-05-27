import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
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
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={url}
					title={imageFileName}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{name}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
