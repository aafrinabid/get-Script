import React, { useEffect, useState } from 'react';
import { Doughnut,Pie } from 'react-chartjs-2';
import classes from './chart.module.css';
import { Card } from '@mui/material';
const UserChart = () => {
    const labels=['Producers','Script-Writters']

	const bar = (
		<Doughnut
			data={  {
                labels: [
                  'Script-Writters',
                  'Producers'
                ],
                datasets: [{
                  label: 'Users',
                  data: [8000,2000],
                  backgroundColor: [
                    'rgb(70,131,218)',
                    'rgb(255,153,1)',
                  ], borderColor:[
                    'rgb(70,131,218,0.4)',
                    'rgba(255,153,1,0.4)',

                  ],
                  hoverOffset: 4,
                  // cutoutPercentage: 80
                 
                }]
              }} options={{
                cutoutPercentage: 80,
              }} />
				
	);
	return <Card className='h-full'style={{backgroundColor:'#162533'}}> {bar}</Card>;
};

export default UserChart;