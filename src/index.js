import { __ as i18n } from "./i18n";

function unused() {
	// This reference to 'i18n' should be transformed to 'undefined' (or similar)
	// when 'unused' is not used, but webpack marks it as inactive.
	// In the bug state, it remains as 'i18n', which might conflict with globals.
	return i18n("wtf");
}

const __ = "local";

console.log("Local __ value:", __);

// We export 'unused' but don't use it in an entry point to trigger the optimization
export { unused };
