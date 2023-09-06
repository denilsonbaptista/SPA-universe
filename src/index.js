import * as el from "./elements.js"
import { Router } from "./router.js"

const router = new Router()
router.add("/", 
  "/pages/home.html", 
  "url(./assets/mountains-universe-1.png)")
router.add(
  "/universe",
  "/pages//universe.html",
  "url(./assets/mountains-universe-2.png)"
)
router.add(
  "/exploration",
  "/pages/exploration.html",
  "url(./assets/mountains-universe-3.png)"
)

router.handle()

el.home.addEventListener("click", () => router.route())
el.universe.addEventListener("click", () => router.route())
el.exploration.addEventListener("click", () => router.route())

window.onpopstate = () => router.handle()
