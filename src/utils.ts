/**
 * Mutate `arr` by moving the item at `startIndex` to `endIndex`.
 * 
 * @param startIndex - The index of the item to move
 * @param endIndex - The index to drop the item
 * @param arr - The array to mutate
 */
export function moveItem(startIndex: number, endIndex: number, arr: Array<any>) {
    const originalElement = arr.splice(startIndex, 1)[0]
    arr.splice(endIndex, 0, originalElement)
}