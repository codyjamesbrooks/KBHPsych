import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = [ 'open' ]
  static values  = {
    closeMethods: Array
  }

  connect() {
    this.events    = [];
    this.listeners = [];
    this.defineCloseEventsAndListeners()

    if (this.isOpen()) {
      this.attachCloseEventsListeners()
    }
  }

  updateState(e) {
    e.preventDefault();
    if (this.isOpen()) {
      this.closeElement()
    } else {
      this.openElement()
    }
  }

  isOpen() {
    return [...this.element.classList].includes(this.openClass)
  }

  closeElement() {
    this.element.classList.remove(this.openClass)
    this.detachCloseEventListeners()
  }

  openElement() {
    this.element.classList.add(this.openClass)
    this.attachCloseEventsListeners()
  }

  attachCloseEventsListeners() {
    this.events.forEach((event, index) => {
      document.addEventListener(event, this.listeners[index]);
    })
  }

  defineCloseEventsAndListeners() {
    this.closeMethodsValue.forEach(closeMethod => {
      switch (closeMethod) {
        case "click":
          this.events.push("mousedown");
          this.listeners.push(this.closeOnOutsideClickListener());
          break;
        case "esc":
          this.events.push("keydown");
          this.listeners.push(this.closeOnEscKeyListener());
          break;
      }
    })
  }

  detachCloseEventListeners() {
    this.events.forEach((event, index) => {
      document.removeEventListener(event, this.listeners[index])
    })
  }

  closeOnOutsideClickListener() {
    const listener = e => {
      if (!this.element.contains(e.target) && this.isOpen()) {
        this.closeElement();
      }
    }
    return listener;
  }

  closeOnEscKeyListener() {
    const listener = e => {
      if (e.key === "Escape") {
        this.closeElement();
      }
    }
    return listener;
  }
}

