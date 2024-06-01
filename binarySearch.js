/**
 * Diese Funktion implementiert einen Binary Search
 * @param {Array} arr        // Array was durchsucht werden soll
 * @param {Number} item      // zu suchendes Item
 * @returns
 */
function binary_search(arr, item) {

    // erste Stelle im Array
    let low = 0;
    // höchste Stelle im Array
    let high = arr.length - 1;
    

    while (low <= high) {
        // Der Wert in der Mitte des Array
        let mid = Math.floor((low + high) / 2);

        // Schätzung des richtigen Items (Mitte)
        let guess = arr[mid];

        // Wenn Schätzung = gesuchtes Item ist, dann gebe stelle im Array back
        if (guess == item) { 
            return mid; 
        }

        // wenn schätzung größer ist als gesuchte item, dann
        // bekommt high den Wert von mid - 1, um so alle Zahlen zu eliminieren,
        // die größer sind als guess
        if (guess > item) {
            high = mid - 1;
        }
        // Ansonsten wird low auf den Wert mid + 1 gesetzt,
        // und eliminiere alle zahlen die kleiner sind als Schätzung.
        else{
            low = mid + 1;
        }
    }

    // Wenn nichts gefunden wird dann gib den String zurück
    return "nicht vorhanden!";
}

// Test-Array
let A = [1,4,6,7,8,9,10];

// gibt dann die Stelle des Arrays zurück an dem der Wert zu finden ist
// mögliche Probleme : was wenn Wert doppelt vorkommt ?
console.log(binary_search(A, 4)); // Ergebnis: 1
console.log(binary_search(A, 0)); // Ergbnis: "nicht vorhanden"
