import React from 'react';
import Text from '../common/Text';

function Home() {
	return (
		<div
			id="home"
			className="flex flex-col justify-center w-full h-screen">
            <div className='absolute inset-0 -z-20 bg-cover bg-fixed bg-hero'></div>
            <div className='absolute inset-0 -z-10 bg-black/25'></div>
            <div className='flex flex-col gap-4 ml-16 text-white'>
                <Text className="text-5xl font-bold">
                    Maria Perez
                </Text>
                <div className='h-1 w-40 bg-white'></div>
                <Text className="text-2xl font-medium">
                    UX/UI Designer & Frontend developer
                </Text> 
            </div>
        </div>
	);
}

export default Home;
