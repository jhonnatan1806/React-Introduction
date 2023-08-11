import React from 'react';

function Navitem({ children, href }) {
	return (
		<a
			href={href}
			className="flex flex-row items-center p-4 gap-4 text-lg text-white hover:text-blue-300 hover:bg-slate-800">
			{children}
		</a>
	);
}

export default Navitem;
