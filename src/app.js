import React, {Fragment} from "react";
import drag from './images/dragon.png';
import classes from './styles/style.module.css';



export const App = () => {


	return(
		<Fragment>
			<div className={classes.head}><h1>Дракон</h1></div>
			<div className={classes.body}><img src = {drag} alt={"красный дракон"}/></div>
			<div className={classes.foot}><h2>картинка</h2></div>
		</Fragment>
	)
}