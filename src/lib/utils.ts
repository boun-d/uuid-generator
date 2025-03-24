import { v1 as uuidV1, v4 as uuidV4, v7 as uuidV7 } from 'uuid';
import { UUID_VERSIONS } from './constants';

export const decideVersionFromUrl = (url: URL) => {
	const version = parseInt(url.searchParams.get('version') ?? '');
	return UUID_VERSIONS.includes(version) ? version : 4;
};

export const generateNewUUID = (version: number) => {
	if (version === 1) return uuidV1();
	if (version === 4) return uuidV4();
	if (version === 7) return uuidV7();
	return uuidV4();
};

export const generateUUIDs = (version: number, count: number) => {
	return Array.from({ length: count }, () => generateNewUUID(version));
};

export const downloadAsJSON = (data: any, filename: string = 'uuids.json') => {
	const jsonString = JSON.stringify(data, null, 2);
	const blob = new Blob([jsonString], { type: 'application/json' });
	const url = URL.createObjectURL(blob);

	const a = document.createElement('a');
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();

	// Clean up
	setTimeout(() => {
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}, 100);
};
