import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import  FiltresContext  from "../FiltresContext";

function valuetext(value) {
	return `${value}`;
}

const minDistance = 10;

export default function MinimumDistanceSlider(props) {
	const [value1, setValue1] = React.useState([props.min+400, props.max-400]);
	const { Filtre, setFiltre } = useContext(FiltresContext);

	const handleContexte = () => {
		
		if(props.Type ==="Superficie"){
			var fil =  Filtre;
         fil.Superficie = value1;
		setFiltre(fil);
		}else{
			if(props.Type ==="Prix"){
				var fil =  Filtre;
			 fil.prix = value1;
			setFiltre(fil);
			}
		}
		
		props.Etat.setuse(!props.Etat.use);
	}
	const handleChange1 = (event, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (activeThumb === 0) {
			setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
		} else {
			setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
		}
		handleContexte()
	};


	return (
		<Box sx={{ width: "80%", marginLeft:'auto', marginRight:'auto' }}>
			<Slider
				getAriaLabel={() => "Minimum distance"}
				value={value1}
				onChange={handleChange1}
				valueLabelDisplay="auto"
				getAriaValueText={valuetext}
                min={props.min}
                step={props.pas}
                max={props.max}
				
			/>
		</Box>
	);
}
