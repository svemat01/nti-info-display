/**
 * @file site/client-websocket.js
 */
(() => {
	const socketUrl = 'ws://localhost:3000/live-reload';
	let socket = new WebSocket(socketUrl);
	socket.addEventListener('close', () => {
		// Then the server has been turned off,
		// either due to file-change-triggered reboot,
		// or to truly being turned off.

		// Attempt to re-establish a connection until it works,
		// failing after a few seconds (at that point things are likely
		// turned off/permanantly broken instead of rebooting)
		const timeBetweenAttemptsMilliseconds = 200;
		const maxFastAttempts = 10;
		const maxAttempts = 50;

		let attempts = 0;
		const reloadIfCanConnect = () => {
			attempts++;
			if (attempts > maxAttempts) {
				console.error('Could not reconnect to dev server.');
				return;
			}
			socket = new WebSocket(socketUrl);
			socket.addEventListener('error', () => {

				setTimeout(reloadIfCanConnect, attempts > maxFastAttempts ? timeBetweenAttemptsMilliseconds * 10 : timeBetweenAttemptsMilliseconds);
			});
			socket.addEventListener('open', () => {
				location.reload();
			});
		};
		reloadIfCanConnect();
	});
})();