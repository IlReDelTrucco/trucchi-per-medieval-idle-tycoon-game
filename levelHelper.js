/**
 * levelHelper - Simple Level Progression Utility
 * Author: IlReDelTrucco
 * License: Custom
 */

class levelHelper {
    /**
     * Initializes the level system.
     * @param {number} maxLevel - The maximum achievable level.
     */
    constructor(maxLevel = 10) {
        if (typeof maxLevel !== 'number' || maxLevel < 1) {
            throw new Error('[levelHelper] Invalid maximum level.');
        }
        this.currentLevel = 1;
        this.maxLevel = maxLevel;
    }

    /**
     * Advances to the next level, if possible.
     */
    next() {
        if (this.currentLevel < this.maxLevel) {
            this.currentLevel++;
            console.log(`[levelHelper] Advanced to level ${this.currentLevel}.`);
        } else {
            console.log('[levelHelper] Maximum level reached.');
        }
    }

    /**
     * Resets the level to 1.
     */
    reset() {
        this.currentLevel = 1;
        console.log('[levelHelper] Level reset to 1.');
    }

    /**
     * Gets the current level.
     * @returns {number}
     */
    getLevel() {
        return this.currentLevel;
    }
}

// Example usage:
// const levelSystem = new levelHelper(5);
// levelSystem.next();
// levelSystem.next();
// console.log(levelSystem.getLevel()); // Output: 3
// levelSystem.reset();

module.exports = levelHelper;
