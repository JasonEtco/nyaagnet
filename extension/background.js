'use strict';

chrome.webRequest.onBeforeRequest.addListener(details => {
	if (details.method !== 'GET') {
		return;
	}

	const url = new URL(details.url);

	if (!(/\?page=download/).test(url.search)) {
		return;
	}

	url.search += '&magnet=1';

	return {
		redirectUrl: url.href
	};
}, {
	urls: [
		'https://*.nyaa.se/*'
	],
	types: [
		'main_frame'
	]
}, [
	'blocking'
]);
