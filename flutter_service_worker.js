'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "96d05d5e4c1a13fccc484ea45bcf7852",
"assets/assets/fonts/CanelaBark_PERSONAL.ttf": "1be8cd88805e654a1dc13337f7da1255",
"assets/assets/fonts/Metropolis-Regular.otf": "f7b5e589f88206b4bd5cb1408c5362e6",
"assets/assets/fonts/metropolis.light.otf": "c82170e08b76657553ab939bd28e8515",
"assets/assets/fonts/OpenSans-Regular.ttf": "629a55a7e793da068dc580d184cc0e31",
"assets/assets/images/a.svg": "0cb9722c4787c30903144152c1e1c898",
"assets/assets/images/add.png": "d8791790f1c51240ea82dc82087e245b",
"assets/assets/images/addIcon.svg": "997c8f0d2b9cacc9eb5b27494b820f30",
"assets/assets/images/addUserIcon.svg": "1f6b616880ac77202403d4bbba61c137",
"assets/assets/images/air-conditioner%2520(1).png": "e85edf45b60eb68e02b838855c60bea3",
"assets/assets/images/air-conditioner.png": "4b517ed2ccea0b599620f7e717f9dcfc",
"assets/assets/images/arrow.svg": "8e7cd0f1be0258091b2766d0e75734c0",
"assets/assets/images/arrow2.png": "87b8f4345bfd1b5d84e12b4ae3a0d22d",
"assets/assets/images/attendant-list.png": "d29404ec1737df174cd13c25bb52061e",
"assets/assets/images/authorized-dealer.png": "f535cbb819423d5bf7e1f1e72a9adc1f",
"assets/assets/images/BlurBack.jpeg": "06b2e408d934e0aa679209ccf56f2ba6",
"assets/assets/images/boxes.png": "fa5fa0e9f17793143727ec308694eec2",
"assets/assets/images/bristol.png": "b3f587848022dbe4ad67583296581825",
"assets/assets/images/bussiness-man.png": "bc841a07000852731a734fd46efbce97",
"assets/assets/images/calendar.svg": "2b04082e69e7f231854a7ee05ee41939",
"assets/assets/images/cancelIcon.svg": "cc4c0e0068d1b5f50ffd758a6aba4861",
"assets/assets/images/clean.png": "5f319bfa837d200bfe28fc903e230309",
"assets/assets/images/consult.png": "506058b30c14f6b91e5e6dca3c96bda3",
"assets/assets/images/customer-support.png": "3b19be958fb4a4bd5352a99ef850ec92",
"assets/assets/images/customer.png": "b460a7f6f86f6f16f2cf0fb6c8d74aa0",
"assets/assets/images/deleteIcon.svg": "300236032345677f7bedf306f275cc34",
"assets/assets/images/diary.png": "225780d816d0232a957a14f50528a7f2",
"assets/assets/images/editIcon.svg": "88a26d78534436de26e97e7cb5a98d54",
"assets/assets/images/error.png": "0fb26488e2774360eee6bffe2309d2b0",
"assets/assets/images/errorImage.jpg": "f4135c1728998fd82502ad1df51c303c",
"assets/assets/images/errorImage2.jpg": "dad0590540a4254b364bee3df2fd7bd1",
"assets/assets/images/feedback.svg": "f2f62aa48e52d863620e393a306c7bbb",
"assets/assets/images/feedbackicons.png": "6b563a5872b24f6937e51793506d9a6b",
"assets/assets/images/gas.png": "4116c39c793990ebf24646a1bf914d47",
"assets/assets/images/group.png": "4c0876ab887b8e2ffd331ce1de7023e3",
"assets/assets/images/home.png": "b3e762853f2b949f1be0f3bdfda56ef3",
"assets/assets/images/immigration.png": "2e3ab311be558f26c927c0c1b96b38a3",
"assets/assets/images/j-k-logo1.png": "c316c51c42c788cc3ac58988bfb96151",
"assets/assets/images/j-k-logo2.png": "a451d107e5b4ab13c3704cad86e14ecf",
"assets/assets/images/jkrlogo.png": "2d3526bfa7fd3d70309411f79c4b1e2d",
"assets/assets/images/jkrLogo.svg": "3f6e13fa2d03bec3158832b064a24d2b",
"assets/assets/images/likeIcon.svg": "93b9ec5bccb3bcb67727c99e6c3ecbff",
"assets/assets/images/list.png": "6eea5bcfcced40786cddfc34b73911aa",
"assets/assets/images/liter.png": "71a82a9134a57a1d25b4929af84ed62f",
"assets/assets/images/logout.png": "3b704aed559f5e98d2174d240cae343d",
"assets/assets/images/man.png": "47305402a5e102588c9946a65939438a",
"assets/assets/images/noCompletedServiceImage.svg": "1b6030916ebab26d002d5d7b0f0f1bf5",
"assets/assets/images/noDataAvailableImage.svg": "7434df1241d6ce3f1e769586b7dc980f",
"assets/assets/images/noExtraServiceImage.svg": "a14ebdb1babee867ca755824631a194a",
"assets/assets/images/notificationIcon.svg": "cb3e38c3e625a4a73ea56b57948bdc0d",
"assets/assets/images/no_internet.png": "188cd5185d153fd89f344cb5c09ef055",
"assets/assets/images/office.png": "1622de5f01fc1057c6b84038a918fc4b",
"assets/assets/images/p.svg": "8b253ec36189428527eef040c0dd78f1",
"assets/assets/images/packages.png": "1b07c73fe737bd2de3e8a780826e5dc0",
"assets/assets/images/raw-materials.png": "9e0abc1bed8bfd94f65a2c88af777669",
"assets/assets/images/reloadIcon.svg": "909646eddecabd453bb39a7e8b09cd71",
"assets/assets/images/searchIcon.svg": "d0e7643d26835b32a47cddbc6661e393",
"assets/assets/images/sellIcon.svg": "0e77c59bfa03d701c9b0c65a867523f2",
"assets/assets/images/selling.png": "d1cf04cad5d2b43a4031d3cc7a435427",
"assets/assets/images/service.png": "5541d57e37ef9e8bc06af0b2468b6b3b",
"assets/assets/images/settingIcon.svg": "f603f10b21af558f5e53927308b7464d",
"assets/assets/images/sorting.svg": "95eed09d9bbb04f4e0172774565c542c",
"assets/assets/images/stock.png": "cb097432348d4272e6184588e0f618f2",
"assets/assets/images/trade.png": "1c9aede826c849a45061aad8561e9221",
"assets/assets/images/trash.svg": "1651e0eaa0dd78dc09a3ad0371f26827",
"assets/assets/images/viewIcon.svg": "a3f22fee2df671a477b337895a91fead",
"assets/assets/images/water-hose.png": "18a6d4d6a223f438b14887248235f3fb",
"assets/assets/images/write.svg": "6d3817cc8b201ed754865c5c634d7841",
"assets/FontManifest.json": "0d6aa010ac3fb2613743973dcdb62b02",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "43e93f01695d8d01d26715a89a19507f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8c7006fc9a4975ca7a5e8efd755c3f83",
"/": "8c7006fc9a4975ca7a5e8efd755c3f83",
"main.dart.js": "8cf56aae4f4986248ede70cc09b6120f",
"manifest.json": "47d1c9f16f2093b9b8f660922e274443",
"version.json": "7f358a298adc3d5329a7f650672cb59b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
