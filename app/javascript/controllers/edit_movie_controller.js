import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-movie"
export default class extends Controller {
  static targets = ["infos", "form"]

  connect() {

  }

  displayForm() {
    this.infosTarget.classList.add("d-none")
    this.formTarget.classList.remove("d-none")
  }

  update(event) {
    event.preventDefault() // stops from refreshing the page

    const url = this.formTarget.action
    fetch(url, {
      headers: { "Accept": "text/plain" },
      method: "PATCH",
      body: new FormData(this.formTarget)
    })
      .then(response => response.text())
      .then(data => {
        console.log(data)
      })
  }
}
