class Drops {
    constructor(width, height, n_drops) {
        this.width = width
        this.height = height
        this.drops = []
        for (let i = 0; i < n_drops; i++) {
            this.drops.push(new Drop(this.width, this.height))
        }
    }
    update() {
        for (let drop of this.drops) {
            drop.fall()
        }
    }
    update_wh(width, height) {
        for (let drop of this.drops) {

            drop.update_wh(width, height)
        }
    }
    display() {
        for (let drop of this.drops) {
            drop.display()
        }
    }
}