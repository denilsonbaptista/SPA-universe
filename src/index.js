import * as el from "./elements.js"
import { Router } from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages//universe.html")
router.add("/exploration", "/pages/exploration.html")

router.handle()

el.home.addEventListener("click", () => router.route())
el.universe.addEventListener("click", () => router.route())
el.exploration.addEventListener("click", () => router.route())

window.onpopstate = () => router.handle()