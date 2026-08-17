self.addEventListener("install", function(event) {
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    self.clients.claim()
  );
});

self.addEventListener("message", function(event) {

  if (event.data && event.data.type === "TEST_NOTIFICATION") {

    self.registration.showNotification(
      "🧠 OTAKKU AI",
      {
        body: "🧪 TEST BERJAYA! Notification OTAKKU berfungsi.",
        icon: "https://afifafize89.github.io/Otakku-ai/icon-192.png"
      }
    );

  }

});
