/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","05ce60952c2ba4fca2fe98ce5ce35502"],["/about/index.html","8b80c228b598a744ea58c8fef3341ac5"],["/archives/2020/07/index.html","ed19f8661180bdcec3d02a9f92cf46ee"],["/archives/2020/08/index.html","4153a12a444ef5ef9fa74f89cc17f58f"],["/archives/2020/index.html","a871c241ea256b9fd3ca28c602d847d2"],["/archives/2021/02/index.html","482f21f3f8fa2ec663e07c7ebd45e7d6"],["/archives/2021/03/index.html","80464a9c3a08adfe4c0fb43e08e8f327"],["/archives/2021/05/index.html","2df6dcfa17fe032b50d9c11c2f75324b"],["/archives/2021/11/index.html","fd8b4a8aa689a02f1220220ef8d78dca"],["/archives/2021/12/index.html","c78392a91a280dd4d432a9885b2babfd"],["/archives/2021/12/page/2/index.html","535528c1929f90ba664926278d710ade"],["/archives/2021/index.html","f11b77c2dc5fc502d04b3a3755e42c03"],["/archives/2021/page/2/index.html","0ee06456ceba7508a3a7e42f42819e98"],["/archives/2021/page/3/index.html","c7374e4feb60f53861f8815e3997b120"],["/archives/2022/01/index.html","2e8f8b90ef7271169802b5d7654e91e4"],["/archives/2022/index.html","c3729b97c9953b5acae1e4b5ef859ae0"],["/archives/index.html","f8f73006642d5404cc7b0981d6253367"],["/archives/page/2/index.html","8049d1e964890884de05c6a1773f553d"],["/archives/page/3/index.html","76e3f97e494e7692dbc8d39c59d7338a"],["/archives/page/4/index.html","403ba67b6f682701a4216fae4af88b1b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","cc52f4bede6b56b95b24a729d752bb98"],["/categories/Appium/index.html","077142424b90364ccfa59210d27c9d98"],["/categories/Charles/index.html","74dc3d3f9c02bb99d6e3e5711a4a8f77"],["/categories/Hexo/index.html","f799c6917e10550e48c8a1bc9ae24670"],["/categories/MySQL/index.html","df615a37a32f660b892cff9d0c6408c8"],["/categories/Shell脚本/index.html","b3809df77af0d7642a4c0ef770255179"],["/categories/index.html","7dad8af1c34c1382ad36a378e28ae802"],["/categories/postman/index.html","f4464fb757631d13fac6f8d06f99437e"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","369a0a03e8bde22a168d6d7876c2d7ff"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","12155c2d2625b3e67740596f7b6d9e4e"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","409e133fd42db1b8fd39fbab8956381e"],["/index.html","b85c9e0732c6b4f1c545430d867471dc"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","5ff19407a03e0abe66cb1a25573af7e3"],["/music/index.html","bd96494ba9e929075ce5060e065351e3"],["/page/2/index.html","bd1db50783eccb79f06db2876ca872a4"],["/page/3/index.html","ff166651cb72187ee9e15b07e8dca325"],["/page/4/index.html","eb48b7ea938cc5af46710504dfe30669"],["/photo/index.html","017ad840e728f7c095e1f611e277b5ca"],["/posts/2173e2a4/index.html","e1cd0db06254f262d509397e19122967"],["/posts/2ab40ef8/index.html","056073dcb886c28ea6546494e20c8223"],["/posts/3447541d/index.html","73c18ab55b68fbd847b832c56611facf"],["/posts/3447554d/index.html","289ab903e5d9471d907afa1c5540ddf2"],["/posts/3457ed69/index.html","2e911e29c2542c58e2c3cd532e406994"],["/posts/39cb083c/index.html","c4acf8843c33ac43cbcc8bd2c882fa17"],["/posts/3ba53770/index.html","f592d9012149d0b1287cdf89bcde8d16"],["/posts/3bd3916a/index.html","9433eaa6bde23c238c8c1a1dcbe707ec"],["/posts/3e4105ad/index.html","3a1a2191942318908e8219e65089682f"],["/posts/42f034cf/index.html","89b82a3dad84b0ba8ccd1dc96253568d"],["/posts/50a2b841/index.html","45d746834881a378d55fe6e458c3bd11"],["/posts/54eecc7d/index.html","4c7eaec4a45a75c2fc18f68f8fd3f535"],["/posts/5a17eb30/index.html","c8ce257a4b89821f79d3eef62cb40289"],["/posts/66841aa6/index.html","3ff736c97c6cd40fc3d91a3d6cdeafe2"],["/posts/7de15477/index.html","94659ff4f168d2f814f2910a41d5ea75"],["/posts/8a00d2ea/index.html","476e8801701d9f3e007e0d40bf85486b"],["/posts/8aa14a73/index.html","ab975506b6f35b655173ac378b0191f9"],["/posts/96032b58/index.html","4717cf9c410e0a47f9a2c0b1197bdb35"],["/posts/9656df9f/index.html","2bb5f45c4bc7b3bcb6b9fb93d68174a6"],["/posts/a3886b70/index.html","dbe8d3bab3120d1c859a374e98a6e2c5"],["/posts/a42e3f6d/index.html","2bacac1a82ba7091962ec42e78efbad7"],["/posts/a9438874/index.html","af61d917778dbe417c955b775393c98e"],["/posts/b4b3bf4e/index.html","af54b66cee1d924c8db612106cf044b6"],["/posts/b8685e49/index.html","0d2a758361fed6245831171e5ea22de4"],["/posts/baaef441/index.html","da5a3a95a546dd7a50848ede18c7ee9d"],["/posts/bbd06fa5/index.html","d3aaf26e0eb8e88cd384f67caade7cf6"],["/posts/be476180/index.html","3bfc57892f1f73f8e57817a903eb2ab8"],["/posts/c4b6dbb9/index.html","6f49df21d462150e408443ba10bf0c82"],["/posts/d5268b29/index.html","da20ba5182a716fe6fc95d1d22131c12"],["/posts/d7719dab/index.html","03ade3dc44f502e12efa43445c65f857"],["/posts/de4de369/index.html","602010e30d3fc7fcbeb4bf179973fb74"],["/posts/ea42950b/index.html","c5c4c240ada9ef9bbba54d875018f0d2"],["/posts/f3908263/index.html","13d0691cf545ee2b12393cbce16e65ef"],["/posts/f6c5d65f/index.html","684193b97b560203a5aa25c01dd75973"],["/posts/f84657b8/index.html","ab412f3508c32cd91088200ca7f65a1b"],["/posts/undefined/index.html","c7210cc0d8a9e2970d416eb14084e472"],["/shuoshuo/index.html","3279ca84a7bfb005ba99eca71da1deef"],["/sw-register.js","51892b2fb0e4c3bf0fc80180ee3f6bf5"],["/tags/Appium/index.html","80ac171ce5a9118008f3100215bd09b5"],["/tags/Charles/index.html","71fc8e259a58e0566ac8d6cd9548beea"],["/tags/FLAG/index.html","1a999db3382956211a5ceb5412940ec8"],["/tags/Hexo/index.html","fe998d799fb939a1dc68fcef3c517e2d"],["/tags/MQ/index.html","f4217179ca69bbf9716e6748b3182f9d"],["/tags/MySQL/index.html","0222add8d767cc0bbdad876fc9539657"],["/tags/Shell脚本/index.html","53cf9e1a229b6864d4321d85fc991fbe"],["/tags/index.html","c1d351487d4326bab71131017141173f"],["/tags/postman/index.html","8a93d5c0f0bbe721732d14a435fd6b6c"],["/tags/博客/index.html","7d1e499ecaefcbb14a0d70077bd1ea28"],["/tags/自动化测试/index.html","51d4ca6b744a4d8c85969cd2f2984215"],["/video/index.html","c3ab06820f4bc5b5842d03372fac2ecf"],["/风景/index.html","d9e48a6f0b2471ae836a6a4f16d3fa8f"]];
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
