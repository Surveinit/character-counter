import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="character-count"
export default class extends Controller {
  static targets = ["input", "counter"];
  static values = { max: Number };
  connect() {
  }

  updateCounter() {
    const remaining = this.maxValue - this.inputTarget.value.length;
    this.counterTarget.textContent = '${remaining} characters remaining';

    if (remaining < 0) {
      this.counterTarget.classList.add("text-red-500");
    } else {
      this.counterTarget.classList.remove("text-red-500");
    }
  }
}
