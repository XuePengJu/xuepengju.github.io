/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","67a33805e26e95a4bcec53284d153042"],["/about/index.html","5a8e8f3ad157daed03fef67f30630204"],["/archives/2020/07/index.html","9f43a8897134209058bc8d6b7b062d62"],["/archives/2020/08/index.html","3a1711f31bac82f77cd3586e7ac17b82"],["/archives/2020/index.html","ab73d02c7e1ff78595a67a6696d2eba3"],["/archives/2021/02/index.html","bf1b54d6264e2c93fd26caf3eb42319b"],["/archives/2021/03/index.html","f17d721f880252950c9ec27ea79ba0fd"],["/archives/2021/05/index.html","cde2f00fd934fca4b4cb03eb6b332035"],["/archives/2021/11/index.html","d663cecaa6b8ce5616898701194c4454"],["/archives/2021/12/index.html","23d665744ab11674862b6f8f11abb6e6"],["/archives/2021/12/page/2/index.html","57dd69644b3e527ff238cc9b95d0ed5d"],["/archives/2021/index.html","888509b02f5dfffd61c551757f99cb1a"],["/archives/2021/page/2/index.html","925af5ee32e994d9328130c6a8468ef6"],["/archives/2021/page/3/index.html","2f707decbcdca33ada17e4279e5da407"],["/archives/2022/01/index.html","96a3e6a308cde9460268db78ae92792d"],["/archives/2022/index.html","0bc589682e76f7f6e39472446b0617da"],["/archives/index.html","352aa8ab23efb4aa126a17aa3cfc97dc"],["/archives/page/2/index.html","e0c500d36f86430587d8fba56d918c63"],["/archives/page/3/index.html","5688e1e0f7778fc327013ea32b7d80a3"],["/archives/page/4/index.html","df94a20e1bfcbcfa741a7f9893dcd76d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","acee604b485a0fe79dd5d8d8f0f8c01e"],["/categories/Appium/index.html","ab19830267b2525edd176663fffd9d24"],["/categories/Charles/index.html","985cd0766bac5bd21978dd6c1ac83bdd"],["/categories/Hexo/index.html","5b959b209a38c1489fbc6c261983cf77"],["/categories/MySQL/index.html","0225c4ec069d0072f4c4a5636cb7f857"],["/categories/Shell脚本/index.html","12b8d80306afa42cdedffc7bcb677f80"],["/categories/index.html","d2c8d59b7721059c56a7ca3cbd8a6346"],["/categories/postman/index.html","960277bda6416b697e2433d5a4b275cd"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","369a0a03e8bde22a168d6d7876c2d7ff"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","12155c2d2625b3e67740596f7b6d9e4e"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","409e133fd42db1b8fd39fbab8956381e"],["/index.html","9e4368d26bb33ea31d3ef448366efaba"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","f34d44fdc83ee05e81d6dd6b2652fc0e"],["/music/index.html","7af47862c6d46362a5e9a4c125bf877b"],["/page/2/index.html","1744c1f38249eed78dee4287048428f6"],["/page/3/index.html","f3de051a86521e6a88f393890d1c784d"],["/page/4/index.html","47f30f1d1ddb9e038d39e89e25cbbc6c"],["/photo/index.html","5d462e380c3607992062c2153da7f683"],["/posts/2173e2a4/index.html","37cfa03ad1f0371de1ce64f163bc7657"],["/posts/3447541d/index.html","75f425852c416261ac785efe0615dbc1"],["/posts/3447554d/index.html","42069df976e488e418a4ce31b3cebb27"],["/posts/3457ed69/index.html","4b42faef9feb618fe7d4f539ffbcf874"],["/posts/39cb083c/index.html","4b7b63bebe45d18bd1c6c7c3c1be2f55"],["/posts/3ba53770/index.html","9313de328f54b312048753fb7fe5e0f7"],["/posts/3bd3916a/index.html","e79653242957d115c35f54fe42459770"],["/posts/3e4105ad/index.html","82f078cdf7e047a04168fd5f96e237a5"],["/posts/42f034cf/index.html","8cd54eeeac2df1b91a326a860661fb97"],["/posts/50a2b841/index.html","c49307216310fb06a53b988d3af3632e"],["/posts/54eecc7d/index.html","0c9b517f27801e57da6a6aa62899838c"],["/posts/5a17eb30/index.html","72f58973bce3eb35a5c0bda56e2e88ea"],["/posts/66841aa6/index.html","4e03f4ef0ff052fa243de5a44b6e2897"],["/posts/7de15477/index.html","b2e9d932d53e71c5dd01f28d7c705312"],["/posts/8a00d2ea/index.html","75d69621bd94732d0109e545dd91497e"],["/posts/8aa14a73/index.html","dcfa014109e6f1ee9a9c3594ff47e974"],["/posts/96032b58/index.html","ff22cd8854b127e75c4cb7e59e15c03e"],["/posts/9656df9f/index.html","ef96ffb5ca6a3e8bf1cc66f0e4889f41"],["/posts/a3886b70/index.html","993881f46742672412153ce0f2c5954b"],["/posts/a42e3f6d/index.html","45d3692681b0e1086e354bb1f8ce5f90"],["/posts/a9438874/index.html","84312f6a0d2b7f301f90cdddaed26d20"],["/posts/b4b3bf4e/index.html","3cada8c70fcdac52679e96be79ea9d61"],["/posts/baaef441/index.html","8ea78ee6d64fec800b16b7b89db4a509"],["/posts/bbd06fa5/index.html","1abbbc50c870cde53b2d204cb3cd18e2"],["/posts/be476180/index.html","ae37ed6ee0e8ddbea92536ac77c2a044"],["/posts/d5268b29/index.html","9b587a1527946cc654599c1bb2b5a47d"],["/posts/d7719dab/index.html","c06d3bbb5e353a4c3f42631dceb2851d"],["/posts/de4de369/index.html","20e7c8470ba36ec23c245756e95164eb"],["/posts/ea42950b/index.html","eebcfc616c5b45599f8e240e7e9eaf02"],["/posts/f3908263/index.html","e5d0c55bbdcb4cf398d35fff8cb1a417"],["/posts/f6c5d65f/index.html","81399c29aa74a2e2c802cc31a419bc9f"],["/posts/f84657b8/index.html","7a0ef828fad9f1d94ae323b6cf59cdd3"],["/posts/undefined/index.html","0616fd14d10e0532d5b71a4a72edbbb7"],["/shuoshuo/index.html","07e30f08ba96e4468a2905dd85bec798"],["/sw-register.js","f03f1aa430f5cc40643064b67bc65ae5"],["/tags/Appium/index.html","1532c65069fd8299b45e2a797764127a"],["/tags/Charles/index.html","315a31165423f00384eb816e8886ca32"],["/tags/FLAG/index.html","0ba71080ad4562cc924a1b45468a7a59"],["/tags/Hexo/index.html","9357c2675ef7812949c835560e55503e"],["/tags/MQ/index.html","59a39a0f5b9f633b7b50e5a78eb034b1"],["/tags/MySQL/index.html","86d621cee8014c2d70775d0b91ce4c16"],["/tags/Shell脚本/index.html","cdeea08db9278f81b68948164e0caac1"],["/tags/index.html","11f9e8dc036ce632c96f7e5cd24a88f0"],["/tags/postman/index.html","98f1c7330a5da3ea875f65ee9a2ee635"],["/tags/博客/index.html","c0f277aa609909df6fe43e43ad1e587e"],["/tags/自动化测试/index.html","adc6b201dc0df288c45ecdf32eacee48"],["/video/index.html","f382df79ec789fe3f338e3d29b141432"],["/风景/index.html","592da43a8eafdb1bd27ba0d896ef879a"]];
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
