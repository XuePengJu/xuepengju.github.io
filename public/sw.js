/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f217b7cf8aa16d0f1eabd1aa06c9b5e7"],["/about/index.html","6d43c299e2f6ead2a101850059e697b4"],["/archives/2020/07/index.html","a2611b9bb0420a656e61de7f9c074e0f"],["/archives/2020/08/index.html","5ac06caae26bfb6d68588b4a5d1fe53a"],["/archives/2020/index.html","00213185cc365bda5c79ae247f51d504"],["/archives/2021/02/index.html","7609e0bc98df2b02e9862e030336b873"],["/archives/2021/03/index.html","f1946fac739ea668b3ca143e763f3bcc"],["/archives/2021/05/index.html","58d3bc8c3eac1b77ac31e8dd5c2f8a0a"],["/archives/2021/11/index.html","bc10c7743d006253edc3292d634af986"],["/archives/2021/12/index.html","69727a0cef86432769f6f06606135197"],["/archives/2021/12/page/2/index.html","033f6cb8991fea564f260a70c2bf7a96"],["/archives/2021/index.html","ca93c0afaef6e985e3a4bcade15f2484"],["/archives/2021/page/2/index.html","7749c023f5e99171ab2be26ebcc25f45"],["/archives/2021/page/3/index.html","0b7484f8aca63c28f76dbdd3f1cb7ccd"],["/archives/2022/01/index.html","32d29ef6157276583e7cce0a072af4dc"],["/archives/2022/index.html","df2b39ef20657f1096eedd55b64d595d"],["/archives/index.html","fc1d281c19896086304b65c0fd4a134d"],["/archives/page/2/index.html","35ceb3ed9e2de962a5e99e761e79c7da"],["/archives/page/3/index.html","5345abeb814da8d596df777b96b6644a"],["/archives/page/4/index.html","140e58aff122c622a8f67b73d480dcd5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","3b060974c8befbed21950da873b264b6"],["/categories/Appium/index.html","9a5b07e8fb74e43524648666734f02a0"],["/categories/Charles/index.html","e641372d11d2e27d9d227d66cf8c6f2c"],["/categories/Hexo/index.html","25cc680aa83f4b3df8cafd801788da46"],["/categories/MySQL/index.html","a1a0ed29bc8c00d27268e63aabad2c10"],["/categories/Shell脚本/index.html","47483d2480e858fa5f0769283a12b63d"],["/categories/index.html","6cb5ac9388bdfcb15cde9cbb0ea0a7bf"],["/categories/postman/index.html","33dd5d3a784109583ec08afd415b2c14"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","369a0a03e8bde22a168d6d7876c2d7ff"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","12155c2d2625b3e67740596f7b6d9e4e"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","409e133fd42db1b8fd39fbab8956381e"],["/index.html","4837392caf84a113806e20d19f6ee1e7"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","7892cd131e3bee68116a894c1c8386d0"],["/music/index.html","bd3292325b918ba68a12e72ca5a2f90d"],["/page/2/index.html","f88bb613d225fddae9e25689b40dd107"],["/page/3/index.html","bb786eef98c87fd9fe6ada81b4bd0aad"],["/page/4/index.html","5710815890ebe475cfc1ec091e2d0e0e"],["/photo/index.html","f693f05662b3b4d47922b5c9004e8aa2"],["/posts/2173e2a4/index.html","367f186d54548c866e62f822fec8c5cf"],["/posts/3447541d/index.html","ad4fec4e15686fa3f6046c9c35aa5716"],["/posts/3447554d/index.html","4092c0fbd1b1f6eca5fe24cabba207ed"],["/posts/3457ed69/index.html","40f76a4f733a7926e8d904b9f01c0d53"],["/posts/39cb083c/index.html","aeb74608861d63a93165e05b9b89c876"],["/posts/3ba53770/index.html","c6ab09eaa80b53a60eb4a94141941aa9"],["/posts/3bd3916a/index.html","bcf8fb7705b3fdfaa2dfd00c283ad9f8"],["/posts/3e4105ad/index.html","3f4269c36375fb55d676ee10ef9bf902"],["/posts/42f034cf/index.html","7a7de7496f0679c153e93e0d2d754683"],["/posts/50a2b841/index.html","dcc84f9d414b8f14aecb04896baf9f2c"],["/posts/54eecc7d/index.html","5aa22910f6734ebfef1bb93a38ec9ff4"],["/posts/5a17eb30/index.html","c67d07f36bdb82ad282534a01dc6be68"],["/posts/66841aa6/index.html","f286de16a79f993c5786fb8e76c5f2fa"],["/posts/7de15477/index.html","46978394747cb0613c64bc1eaa7d46a9"],["/posts/8a00d2ea/index.html","364b4cd49a73ae21a309f5576486c25b"],["/posts/8aa14a73/index.html","a732c06c2433658fbd397a31971996b7"],["/posts/96032b58/index.html","f5fc5caf305afbf9e359907e6a93c804"],["/posts/9656df9f/index.html","d36ceef094a26bdf98f4691e9dc10554"],["/posts/a3886b70/index.html","5233e9387afeea0f8ac2aa967109e3c8"],["/posts/a42e3f6d/index.html","45d3692681b0e1086e354bb1f8ce5f90"],["/posts/a9438874/index.html","02445ce79fd94ef7e3b0d4e7639ea28b"],["/posts/b4b3bf4e/index.html","de4754bcfd7dae384786e725f4e4387a"],["/posts/baaef441/index.html","c703e88e70a90462931ca0cd4588362e"],["/posts/bbd06fa5/index.html","506c8b4832abb4b35465565a01a18a7f"],["/posts/be476180/index.html","99524dd8b06c7c81bc906012deeba5db"],["/posts/d5268b29/index.html","19d3525351c7cf2128df8b5a2e7124bc"],["/posts/d7719dab/index.html","6a8daaba8395813b8f585c7b1dac324b"],["/posts/de4de369/index.html","5ad138577b25264d7aa27877f7264385"],["/posts/ea42950b/index.html","0856203de410a006febde50e2af25f6e"],["/posts/f3908263/index.html","4a99f7e8610ab3e6bcc4cfd94a2df296"],["/posts/f6c5d65f/index.html","81399c29aa74a2e2c802cc31a419bc9f"],["/posts/f84657b8/index.html","8b950123adec20bff609b9606e275bd2"],["/posts/undefined/index.html","c581c456e85cb6e5b1e69d1edfccc739"],["/shuoshuo/index.html","1064b9e9dc76febd31ddcff0d3d0debf"],["/sw-register.js","c79a2cd11386a2d3f24e52b2239272ca"],["/tags/Appium/index.html","b4e95cfa013e587660f3afb611fd5202"],["/tags/Charles/index.html","07b603bebd9acd8d9fa1544ac1a7f2b8"],["/tags/FLAG/index.html","af795dbe72997868d33191d7774aface"],["/tags/Hexo/index.html","a75254b9d5388b11b0ed9391c7688f35"],["/tags/MQ/index.html","919e52bab3f669f2287a3fbbaf39b6d2"],["/tags/MySQL/index.html","bc15d1b031e46c21b1c94eae3f3f1051"],["/tags/Shell脚本/index.html","50f25cef0fab9a218e76113a499016df"],["/tags/index.html","06d8a82d0d336ef39cfc14ddf237e5a5"],["/tags/postman/index.html","724b56732208dd037b50b7d03cc9adb9"],["/tags/博客/index.html","a56da06165743d36c89d9675c3f9d698"],["/tags/自动化测试/index.html","5d91ea6260390b40b5887fab7c4f3baa"],["/video/index.html","f382df79ec789fe3f338e3d29b141432"],["/风景/index.html","9236c584ce947e868e79457a5660b0f1"]];
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
