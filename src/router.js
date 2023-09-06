import * as el from "./elements.js"

export class Router {
  routes = {}
  pageImages = {}

  add(routeName, page, pageBg) {
    this.routes[routeName] = page
    this.pageImages[routeName] = pageBg
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname]

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        el.app.innerHTML = html
        el.body.style.backgroundImage = this.pageImages[pathname]
      })
  }
}
