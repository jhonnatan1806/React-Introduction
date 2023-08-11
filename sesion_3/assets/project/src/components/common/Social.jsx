import React from 'react';

function Social({ children, href }) {
	return <a href={href} target='_blank' rel='noreferrer' className='flex items-center w-fit rounded-full p-2 bg-slate-600 hover:bg-slate-700'>{children}</a>;
}

export default Social;
