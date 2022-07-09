/* eslint-disable prefer-regex-literals */
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new workbox.strategies.StaleWhileRevalidate()
)

workbox.routing.registerRoute(
  new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),

  new workbox.strategies.CacheFirst()
)

workbox.routing.registerRoute(
  new RegExp(".*"),
  new workbox.strategies.NetworkFirst()
)
