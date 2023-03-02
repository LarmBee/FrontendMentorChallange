import "./App.css";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import QR from "./images/image-qr-code.png";

function App() {
	return (
		<div className="App">
			<Card className="main-card" sx={{ maxWidth: 300, borderRadius: 4 }}>
				<CardActionArea>
					<CardMedia
            className="barcode-image"
						component="img"
						height="240"
						image={QR}
						alt="Barcode image"
					/>
				</CardActionArea>
				<CardContent>
					<Typography gutterBottom variant="h6" component="div" fontWeight="bold">
						Improve your front-end skills by building projects
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Scan the QR code to visit Frontend Mentor and take your coding
						skills to the next level
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}

export default App;
