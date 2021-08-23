export default class Post {
    constructor(title, image) {
        this.title = title;
        this.image = image;
        this.date = Date.now();
    }

    toString() {
        return JSON.stringify(this, null, 2);
    }
}