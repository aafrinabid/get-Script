import { Card } from '@material-ui/core';
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
                  label: 'Script Writter',
                  data: [65, 59, 80, 81, 56, 55, 40,40,100,90,39,70],
                  backgroundColor: [
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                     'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',

                  ],
                  borderColor: [
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                  ],
                  borderWidth: 1
                },
                {
                  label: 'Producers',
                  data: [35, 49, 60, 41, 26, 15, 30,10,40,20,9,30],
                  backgroundColor: [
                    'rgba(70,131,218,0.2)',
                    'rgba(70,131,218,0.2)',
                    'rgba(70,131,218,0.2)',
                    'rgba(70,131,218,0.2)',
                    'rgba(70,131,218,0.2)',
                    'rgba(70,131,218,0.2)',
                    'rgba(70,131,218,0.2)',
                    'rgba(70,131,218,0.2)',
                    'rgba(70,131,218,0.2)',
                    'rgba(70,131,218,0.2)',
                    'rgba(70,131,218,0.2)',
                    'rgba(70,131,218,0.2)',

                  ],
                  borderColor: [
                    'rgb(70,131,218)',
                    'rgb(70,131,218)',
                     'rgb(70,131,218)',
                      'rgb(70,131,218)',
                       'rgb(70,131,218)',
                        'rgb(70,131,218)',
                         'rgb(70,131,218)',
                          'rgb(70,131,218)',
                           'rgb(70,131,218)',
                            'rgb(70,131,218)',
                             'rgb(70,131,218)',
                              'rgb(70,131,218)',
                  ],
                  borderWidth: 1
                } ]
              }} />
				
	);
	return <Card className='h-full' style={{backgroundColor:'#162533'}}> {bar}</Card>;
};

export default UserDataBar;