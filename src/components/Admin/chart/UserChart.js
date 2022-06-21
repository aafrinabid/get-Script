import React, { useEffect, useState } from 'react';
import { Doughnut,Pie } from 'react-chartjs-2';
import classes from './chart.module.css';
import { Card } from '@mui/material';
const UserChart = () => {
    const labels=['Producers','Script-Writters']

	const bar = (
		<Pie
			data={  {
                labels: [
                  'Script-Writters',
                  'Producers'
                ],
                datasets: [{
                  label: 'Users',
                  data: [8000,2000],
                  backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                  ],
                  hoverOffset: 4
                }]
              }} />
				
	);
	return <Card className='bg-black'> {bar}</Card>;
};

export default UserChart;