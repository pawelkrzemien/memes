import React from 'react';
import { useSelector } from 'react-redux';
import { FormComponent } from '../component/FormComponent.jsx';

export function Form() {


	return (
		<section>
			<div className="hot-memes">
				<h2>Dodaj Mema</h2>
				<FormComponent />
			</div>
		</section>
	);
}