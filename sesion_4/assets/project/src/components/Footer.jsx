import React from 'react'

function Footer() {
	return (
		<footer className="flex justify-center items-center h-12 max-w-screen-lg mx-auto">
			<h1 className="text-center">
				&copy; Copyright {new Date().getFullYear()}
			</h1>
		</footer>
	)
}

export default Footer
