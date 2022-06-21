import React, { useEffect, useState } from 'react';
import { Bar} from 'react-chartjs-2';
import classes from './chart.module.css';

const UserDataBar = () => {
    const labels=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec']

	const bar = (
		<Bar
			data={ {
                labels: labels,
                datasets: [{
                  label: 'User',
                  data: [65, 59, 80, 81, 56, 55, 40,40,100,90,39,70],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                    'rgba(155, 205, 86, 0.2)',
                    'rgba(175, 192, 192, 0.2)',
                    'rgba(154, 162, 235, 0.2)',
                    'rgba(53, 102, 255, 0.2)',
                    'rgba(51, 203, 207, 0.2)'
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)',
                    'rgb(155, 205, 86)',
                    'rgb(175, 192, 192)',
                    'rgb(154, 162, 235)',
                    'rgb(53, 102, 255)',
                    'rgb(51, 203, 207)'
                  ],
                  borderWidth: 1
                },
                {
                  label: 'Producers',
                  data: [35, 49, 60, 41, 26, 15, 30,10,40,20,9,30],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                    'rgba(155, 205, 86, 0.2)',
                    'rgba(175, 192, 192, 0.2)',
                    'rgba(154, 162, 235, 0.2)',
                    'rgba(53, 102, 255, 0.2)',
                    'rgba(51, 203, 207, 0.2)'
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)',
                    'rgb(155, 205, 86)',
                    'rgb(175, 192, 192)',
                    'rgb(154, 162, 235)',
                    'rgb(53, 102, 255)',
                    'rgb(51, 203, 207)'
                  ],
                  borderWidth: 1
                } ]
              }} />
				
	);
	return <div className={classes.container}> {bar}</div>;
};

export default UserDataBar;