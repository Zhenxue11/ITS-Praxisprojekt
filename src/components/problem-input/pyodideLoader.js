import { loadPyodide } from "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.mjs";
let pyodideInstance = null;

export const loadPyodideOnce = async () => {
    if (pyodideInstance) {
        return pyodideInstance; // Return the already loaded instance
    }

    try {
        pyodideInstance = await loadPyodide();
        console.log("Pyodide loaded!");
        return pyodideInstance; // Return the loaded instance
    } catch (err) {
        console.error("Failed to load Pyodide:", err);
        throw err; // Rethrow if loading fails
    }
};
