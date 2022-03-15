import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Results } from './Results';
import { Search } from './Search';

export const AllRoutes = () => {
	return (
		<div className='p-4'>
			<Routes>
				<Route exact path='/' element={<Navigate to='/search' />} />
				{
					['/search', '/images', '/news', '/videos'].map((path) => (
						<Route key={path} exact path={path} element={<Results />} />
					))
				}
			</Routes>
		</div>
	)
}