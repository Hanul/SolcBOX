/*
 * Solidity 코드를 컴파일합니다.
 */
Solc.Compile = METHOD((m) => {
	
	let solcWorker;
	
	return {
		
		run : (codes, handlers) => {
			//REQUIRED: codes
			//REQUIRED: handlers
			//REQUIRED: handlers.error
			//REQUIRED: handlers.success
			
			let errorHandler = handlers.error;
			let callback = handlers.success;
			
			if (solcWorker === undefined) {
				solcWorker = WORKER(Solc.R('solc-worker.js'));
			}
			
			solcWorker.send({
				methodName : 'compile',
				data : codes
			}, (result) => {
				if (result.contracts === undefined) {
					errorHandler(result.errors[0]);
				} else {
					callback(result.contracts);
				}
			});
		}
	};
});
