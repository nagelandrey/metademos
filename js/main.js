"use strict";

class Wrapper {
    constructor(element) {
        if (!element) {
            return;
        }
        this.element = element;
        this.burger = this.element.querySelector(".burger");
        this.newMenu = this.element.querySelector(".burger-menu");
        this.element.addEventListener("click", this.onBurgerClick.bind(this));
    }

    onBurgerClick(event) {
        if (event.target !== this.burger) {
            this.newMenu.classList.remove("opened");
        }
        else {
            this.newMenu.classList.toggle("opened");
        }
    }
}

new Wrapper(document.querySelector(".wrapper"));