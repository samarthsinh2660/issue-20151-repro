import { __ as i18n } from "./i18n";

function unused() {
	// In the fix state, 'i18n' remains in the code, but it is declared 
	// as 'undefined' at the module level via 'var i18n = ... undefined;'.
	// This prevents global variable clashes while keeping the code readable.
	return i18n("wtf");
}

const __ = "local";

console.log("Local __ value:", __);

// We export 'unused' but don't use it in an entry point to trigger the optimization
export { unused };
