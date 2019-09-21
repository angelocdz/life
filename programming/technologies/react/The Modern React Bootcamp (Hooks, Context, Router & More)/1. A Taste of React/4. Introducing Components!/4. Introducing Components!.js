class Dog {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    render() {
        return `<p>${this.name}</p>`
    }
}