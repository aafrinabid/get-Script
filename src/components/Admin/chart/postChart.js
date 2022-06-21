import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import classes from './chart.module.css';

const PostChart = () => {

	const line = (
		<Line
			data={ {
				labels: ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'],
				datasets: [{
				  label: 'posts',
				  data: [100, 30, 180, 81, 96, 85, 200],
				  fill: false,
				  borderColor: 'rgb(75, 92, 192)',
				  tension: 0.1
				}]
			  }} />
				
	);
	return <div className={classes.container}> {line}</div>;
};

export default PostChart;
