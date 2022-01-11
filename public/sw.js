/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","55de5f87fcc449ad3bc1b2a60711716f"],["/about/index.html","37cd8cf5d24ceff71a725098fffe0bb6"],["/archives/2020/07/index.html","a38c409487d084d69b2739839f9ec7ac"],["/archives/2020/08/index.html","d35373852776676a12341f4a76eaa886"],["/archives/2020/index.html","93d87e71b7c06d428ab655d41b5f4bd4"],["/archives/2021/02/index.html","f508e7503bdd7840996c50ac3bc3428f"],["/archives/2021/03/index.html","4897f605d5a0e3bd5790bc013f91f98c"],["/archives/2021/05/index.html","b2bf4d6d8cbcb466f410e8f23909c301"],["/archives/2021/11/index.html","2379e60908fd66c47a92b9dfd6d59f60"],["/archives/2021/12/index.html","cb6cefb735cce2b3ee5b074c36ec4dbc"],["/archives/2021/12/page/2/index.html","e35d8e98d7179fd552937256ced364fd"],["/archives/2021/index.html","f24748907b0b97a19c3d5e37a9e35308"],["/archives/2021/page/2/index.html","170e9d966eddc3e916c5bd772e79c71c"],["/archives/2021/page/3/index.html","631874a8ce545439b9045a68ed712256"],["/archives/2022/01/index.html","113e353e82d523ac27848ceda5a8ffd2"],["/archives/2022/index.html","0d97e3feaa0992c04100e33ade9fe4cf"],["/archives/index.html","ad86899d36d6a5a4959f21f5541e7777"],["/archives/page/2/index.html","c639d433056802b797400c85936c6377"],["/archives/page/3/index.html","fc83f8157fff2f25f30c5ffbc6b9c553"],["/archives/page/4/index.html","ef293053b536cc761c2f72c19051f7e0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","a05a5ade298474cb97a7d6ea044ee13b"],["/categories/Appium/index.html","d4868c3a8accdf2683a53e593ef5d8ce"],["/categories/Charles/index.html","f5011f3ba62c9a15d9773d43c458641b"],["/categories/Hexo/index.html","2222cbe3cc990eb5438fb7f657108160"],["/categories/MySQL/index.html","396bcea3dfd88c91aa777ba75ee117e7"],["/categories/Shell脚本/index.html","25f354b722eeb84af6c17a6f1ededb99"],["/categories/index.html","d123c9417892246b12d4ff7ab79ef8dc"],["/categories/postman/index.html","2421ebbe68b8276b8cae92c63418bdd8"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","369a0a03e8bde22a168d6d7876c2d7ff"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","12155c2d2625b3e67740596f7b6d9e4e"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","409e133fd42db1b8fd39fbab8956381e"],["/index.html","e86be1a9e2ca68c7343afef108685963"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","1ec9596b3ddef31900b0855901bd54bc"],["/music/index.html","af4755a91ac178399eafe36e48136f86"],["/page/2/index.html","b71a9340638d2f8c2b8f8e64523e941f"],["/page/3/index.html","248b4c50c538d2f7a9d98abc5e696f8a"],["/page/4/index.html","e47e5d5bb643b5a728c17d7e40bd2b3c"],["/photo/index.html","8fe65dbeb54c3731d197f7b8a7b25908"],["/posts/2173e2a4/index.html","8d42b06a6b70a38333868f772c661d28"],["/posts/3447541d/index.html","cba7d613ce489b33715e6a83a30d92ed"],["/posts/3447554d/index.html","41aaa3c9214d2e41cc07692f64a3ea5d"],["/posts/3457ed69/index.html","fffabac8c7a9fd342d064bb0db20b5d6"],["/posts/39cb083c/index.html","42f01896cd195eb353d3e5461fa34c05"],["/posts/3ba53770/index.html","c8724a419816fe211ec41589ba4ec053"],["/posts/3bd3916a/index.html","9bb38f4c72107bb06ec23f6638c508cd"],["/posts/3e4105ad/index.html","3b14aea336a2b8c79a7a6e3d562f20bc"],["/posts/42f034cf/index.html","6222e59d4bf7799175c6bfb50d2699c3"],["/posts/50a2b841/index.html","314961ef04156733494c97d97bed15a6"],["/posts/54eecc7d/index.html","d6b83b35fb0ff15ae8e32c16e9b287da"],["/posts/5a17eb30/index.html","07553c38c594a3b212c1af5603fcddfc"],["/posts/66841aa6/index.html","3d60dffd2c37eabf162971e5338b830a"],["/posts/7de15477/index.html","039aa6663710e65e7f88c6130fea6da2"],["/posts/8a00d2ea/index.html","b63750eaef6e9507084b408c90edff36"],["/posts/8aa14a73/index.html","7ab2e02ad2347e30ff766c592a071007"],["/posts/96032b58/index.html","dd3e99612b227e61624a3c7012f53d98"],["/posts/9656df9f/index.html","2fe08a1153a1428864dc22f30b65513c"],["/posts/a3886b70/index.html","6c6501692637a343ed01a1b77aa00220"],["/posts/a42e3f6d/index.html","07bc037a8c84a351020dca0b0c3e199c"],["/posts/a9438874/index.html","1cd53a9e2abb9448a202cf2709d4ce1d"],["/posts/b4b3bf4e/index.html","6eca881cbd1fc9242e9365573eaf0c68"],["/posts/b8685e49/index.html","a78204d8f1b5a7eb2dc073ffaf169666"],["/posts/baaef441/index.html","cdf49c25c0602786babf43e090f40f30"],["/posts/bbd06fa5/index.html","5da47bbeca6c9a8a0df629de6ec785ea"],["/posts/be476180/index.html","85cdd1359afaf31a79ad37eafb7c3ef7"],["/posts/d5268b29/index.html","7ba0790a58a42da716b5b674fc931fcb"],["/posts/d7719dab/index.html","38d18350c0e106df9e23258dde0f6115"],["/posts/de4de369/index.html","d0326299ffa5b971ca6ab5ba5613adf5"],["/posts/ea42950b/index.html","aa88a21bf8d7afb52cc49bd5d1ba40aa"],["/posts/f3908263/index.html","8b1434d2c3b953d0bb1c636d7bec3cdd"],["/posts/f6c5d65f/index.html","800f03d7ed35e0b0978e02d605275600"],["/posts/f84657b8/index.html","fb762bd067d0df719f85d32641767cab"],["/posts/undefined/index.html","de79acbb60b07ba5b8ca58a5723e76e3"],["/shuoshuo/index.html","36f09054a4a0e20d8d168db6069082a2"],["/sw-register.js","929a58d05838dce96b3e1dc769423074"],["/tags/Appium/index.html","3c0896a95c8be54ef523ab7e5ffdd9a6"],["/tags/Charles/index.html","ee3d4cbd3763690d408b933458f7e6af"],["/tags/FLAG/index.html","c063782bec5ad2e982ada836e65af906"],["/tags/Hexo/index.html","9e562a4be603a800f41d143941d6ba0d"],["/tags/MQ/index.html","b255b7467fc4fcb126960dfe651c45f9"],["/tags/MySQL/index.html","9fdb8bdcc8503300f3809b2dd7bf04ff"],["/tags/Shell脚本/index.html","55cc27f5b1c8efdf7ed7a60370642a0a"],["/tags/index.html","f0b5582f626ecec78d741524a3a67405"],["/tags/postman/index.html","e8b0bb73a3144721e4a47ce5a31f4256"],["/tags/博客/index.html","4c17ba690c53b92dfe3da17e492d272a"],["/tags/自动化测试/index.html","8ec5d10f0a7bad0d880058087e5f4f3c"],["/video/index.html","1ab9c46f206e3cf667d1c980b2e41359"],["/风景/index.html","f98d054ad75938db3fef2fd935f5fa5d"]];
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
