import { useState } from 'react';

export const useRenderFields = () => {
	const [render, setRender] = useState(false);

	const appRender = () => setRender(!render);

	return {
		appRender,
	};
};
