import { Card } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import classes from './chart.module.css';

const Chart = () => {

	const line = (
		<Line
			data={ {
				labels: ['jan','feb','mar','apr','may','june','july'],
				datasets: [{
				  label: 'Script-Writer',
				  data: [65, 59, 80, 81, 56, 55, 40],
				  fill: false,
				  borderColor: 'rgb(75, 192, 192)',
				  tension: 0.1
				},
				{
				  label: 'Producer',
				  data: [105, 29, 83, 3, 36, 95, 4],
				  fill: false,
				  borderColor: 'rgb(175, 102, 192)',
				  tension: 0.1
				}]
			  }} />
				
	);
	return <Card className={classes.chartcards}> {line}</Card>;
};

export default Chart;
