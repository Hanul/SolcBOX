SolcSample.MAIN = METHOD({

	run : () => {
		
		Solc.Compile({
			'lib.sol' : 'library L { function f() returns (uint) { return 7; } }',
			'cont.sol' : 'import "lib.sol"; contract x { function g() { L.f(); } }'
		}, {
			error : (errorMsg) => {
				console.log(errorMsg);
			},
			success : (contracts) => {
				console.log(contracts);
			}
		});
	}
});
