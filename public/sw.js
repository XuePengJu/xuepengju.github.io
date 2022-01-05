/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","914503ec8cfa75e09d11325e07f51319"],["/about/index.html","6f24ab640bbf5d3ffd27f5f342b22810"],["/archives/2020/07/index.html","6efe6d20e3791a39dd863a07025bbaef"],["/archives/2020/08/index.html","f43c6d7ef2b20e26ebe1448bb12cac7a"],["/archives/2020/index.html","dbb09b22356411ba4ef2a9800d593259"],["/archives/2021/02/index.html","178933316cb46cb6c056bc31fddabc97"],["/archives/2021/03/index.html","cf9a0ee7f9a73deade1da94eb0507fd4"],["/archives/2021/05/index.html","31823921098083422e360eedd163a42c"],["/archives/2021/11/index.html","f2c37c722ed204d8f2ec3582ba323e69"],["/archives/2021/12/index.html","59969287deac3d8bcba8750e27078fe1"],["/archives/2021/12/page/2/index.html","e8a79af0ee5243efcb6862b98db52916"],["/archives/2021/index.html","1bf3eb26ed19ff41cc9296a9c6819d76"],["/archives/2021/page/2/index.html","1d0823e294332255a86c32bfb9be1255"],["/archives/2021/page/3/index.html","3258084b0fad050fcf741b058e7b7df8"],["/archives/2022/01/index.html","ab9bf451ac46e2e31f5064eef028b0f7"],["/archives/2022/index.html","7346dc8382eb86441db118450a237830"],["/archives/index.html","b4d6c3dbf1a408d54cd9a072e936e617"],["/archives/page/2/index.html","d18bcf4cf8654a859075c34d505d88e1"],["/archives/page/3/index.html","686edad19642d0976d03953467ff0205"],["/archives/page/4/index.html","2ea5533b57a2ae141fe3e4058167620a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","2eabe8125abaea8f466a97a9c724a2f4"],["/categories/Appium/index.html","afc5b32e887804023dafaea233fa6d16"],["/categories/Charles/index.html","037bc71a02e5b43bd3217b7b84807331"],["/categories/Hexo/index.html","f9ef2333a062991aa96d916df5740c5d"],["/categories/MySQL/index.html","ca185db90530d81a17ab68e069fb6e92"],["/categories/index.html","6b0e014659ebc9944acc76b98f01b542"],["/categories/postman/index.html","9851cb76f73d5ada20abfe996f361d48"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","369a0a03e8bde22a168d6d7876c2d7ff"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","12155c2d2625b3e67740596f7b6d9e4e"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","409e133fd42db1b8fd39fbab8956381e"],["/index.html","f6d34f81bd1f58f1f443fbbb9ec338a0"],["/js/VolantisTags.js","5a86412afe9ca26eafbfc395ad45ea80"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","429f66de31eaae079eb61e823af71b6d"],["/music/index.html","119451c85956e52e9b8de4fa9c94fc48"],["/page/2/index.html","ff9203aac11fce1df94031028c52476e"],["/page/3/index.html","e2570fb5363fe9d5e16b19facfd57120"],["/photo/index.html","10b2aa62e9a90fa15b142fc7d96888a7"],["/shuoshuo/index.html","2565de738535797ae6ace864bb018d3a"],["/sw-register.js","c18f3da9914c1d6a186bc5bb8f4aba0b"],["/tags/Appium/index.html","c8ef06ec3ea57eba0dfd94d9c91f5a18"],["/tags/Charles/index.html","caab441c9fe4cd098b3afffbe2b51e7b"],["/tags/FLAG/index.html","c3162f9157fab6a962f0a07e8af1f79f"],["/tags/Hexo/index.html","910781f2706b17386e924f2c12e6a691"],["/tags/MQ/index.html","97e33feba1f14dbad42e05be166af689"],["/tags/MySQL/index.html","34d1097ab7a19d027a73ee548aedfb03"],["/tags/index.html","bd9f975c1223d07b5cbe0597baa0aabe"],["/tags/postman/index.html","8315a593e47095493b6bb809518f6fbe"],["/tags/博客/index.html","7e56705bc2dbc50fc77c5ab0e442d809"],["/tags/自动化测试/index.html","81857079f2984345849e9430e8c22d0c"],["/video/index.html","5c25f6693834e0703e2edf01715807b0"],["/风景/index.html","b0d32073d301293e5bf11f6ac5bd4a81"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
