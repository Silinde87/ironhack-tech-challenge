import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		maxWidth: 275,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function OutlinedCard(props) {
	const classes = useStyles();
	const { id, name, manufacturer, color, price } =
		props.phone;

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography variant="h5" component="h2">
					{name}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					Manufacturer: {manufacturer}
				</Typography>
                <Typography className={classes.pos} color="textSecondary">
					Color: {color}
				</Typography>
                <Typography className={classes.pos} color="textSecondary">
					Price: {price}
				</Typography>
			</CardContent>
			<CardActions>
				<Link to={"/" + id}>
					<Button size="small">Learn More</Button>
				</Link>
			</CardActions>
		</Card>
	);
}
