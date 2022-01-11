/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cffb80e5d789b52a0f70c0981e2980d0"],["/about/index.html","a7262334f50701a56ca36890dcc0fad0"],["/archives/2020/07/index.html","ab3a0f1386953050d68fb3bcb5b78cb3"],["/archives/2020/08/index.html","6fad6343559cc83918ad5f94feaa7845"],["/archives/2020/index.html","229b693f0550dcabd60d053b7e3f93ba"],["/archives/2021/02/index.html","8617028f0bb8255272e45aea125e20bb"],["/archives/2021/03/index.html","43757e0e48b0e06b63e30cca41d80f41"],["/archives/2021/05/index.html","2d90ab5998f75a7f585d3eb44b4f9537"],["/archives/2021/11/index.html","b6dcb39cdf3ab51363cd3cc8ae6043d6"],["/archives/2021/12/index.html","b0c34314cb4c84ffe1cb2d4d6a35a5b3"],["/archives/2021/12/page/2/index.html","a248ae391f0f87e35aa168ea9e23c551"],["/archives/2021/index.html","da50fcb122429847f56fec8b0578898b"],["/archives/2021/page/2/index.html","e1f3c059cc39a67b2c13eb50107cdd0d"],["/archives/2021/page/3/index.html","f9b351b6495df2ea7b83922b8de5348f"],["/archives/2022/01/index.html","b69edbe2755a7c0a049189bc939ed2f0"],["/archives/2022/index.html","3f343f385bda70ee0a88a61bdcca4a92"],["/archives/index.html","9ce8a0cafd3d8be34989867839473780"],["/archives/page/2/index.html","599933f8b14da3b8fa82186ec351c420"],["/archives/page/3/index.html","7cd5ea893a9dcc9b810b1b23addb933d"],["/archives/page/4/index.html","c22f5a076ae6a7f2bba087fbaff9359f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","e0763ce76e9ac93d19583c78f69fb8b3"],["/categories/Appium/index.html","181a6da261f75d2e2eed6f96b34e8f33"],["/categories/Charles/index.html","d3b55e02155d8f50cfd6404d5325207d"],["/categories/Hexo/index.html","64221e06c2a870429b5f1d2d148e9c91"],["/categories/MySQL/index.html","1b137a44c21e3110b784dabb52609ed0"],["/categories/Shell脚本/index.html","21ea4d4bed4693763ed34baf903a2282"],["/categories/index.html","1e5cca729b7407ed36b8019d935ce865"],["/categories/postman/index.html","b9e0a2af28af0adeb64c944181b2d2c2"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","369a0a03e8bde22a168d6d7876c2d7ff"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","12155c2d2625b3e67740596f7b6d9e4e"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","409e133fd42db1b8fd39fbab8956381e"],["/index.html","9426fdcac6b7c222e675fc2a464dbaa2"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","44fb49297621e4233c07e399e9a1b14a"],["/music/index.html","c02e8c3cc34c4b9727de3b0c3f95cb59"],["/page/2/index.html","c23402c707610cd88affec86faa039ac"],["/page/3/index.html","cd9d90d2611a60b765f402d22157acd4"],["/page/4/index.html","e4b5dc3953d7cea86f91363d1bbd7be5"],["/photo/index.html","9dde3511a139405e9b7a502ba1c2c6ac"],["/posts/2173e2a4/index.html","5fcaab1347755d629a98f3da273b5362"],["/posts/3447541d/index.html","d3dc58eaf7d03663438f7b07cc46248a"],["/posts/3447554d/index.html","41f6f84997e0f509ae4b9ea50d361ecb"],["/posts/3457ed69/index.html","c896d558940d7be87aee4b4390e294f2"],["/posts/39cb083c/index.html","85ac8e2eb4849966506efe6ecf02b0bd"],["/posts/3ba53770/index.html","417b6c1b35f052302ecb3a6349ffa42d"],["/posts/3bd3916a/index.html","0846df341d35a11b3d0d3b77f0a4df0e"],["/posts/3e4105ad/index.html","d64c7cb54a9610b07133aeebb0296764"],["/posts/42f034cf/index.html","eb4d56d30a3607b08c1212d856a2d3bf"],["/posts/50a2b841/index.html","c6166b65d42f05728396d216e1f84098"],["/posts/54eecc7d/index.html","085bdfb4836a6138926e534383df8b43"],["/posts/5a17eb30/index.html","ed865f6859c388749d6c3d8253bb9b87"],["/posts/66841aa6/index.html","824a367070e4df799c0a6be3f159718f"],["/posts/7de15477/index.html","4922f73ced0992a0f84c73075a05e3ca"],["/posts/8a00d2ea/index.html","32a719f3a48de486a173d68ed4d70646"],["/posts/8aa14a73/index.html","eb3bae4415d8e8424e4c3347c42ee748"],["/posts/96032b58/index.html","7302220c446a919d6a5419598c7575e4"],["/posts/9656df9f/index.html","9e109de36c019658790723a8183440d5"],["/posts/a3886b70/index.html","f786bf8d9a2c3969387e64f22729da8b"],["/posts/a42e3f6d/index.html","ceb71df8f212b265a3cc085180f14a21"],["/posts/a9438874/index.html","c09b2a5b94051d99757374afd89754ba"],["/posts/b4b3bf4e/index.html","4c13731a1a1d02a90c66a6f73b30526d"],["/posts/b8685e49/index.html","cdf7efe086a38a2771a7c2b000a74e6e"],["/posts/baaef441/index.html","6e22ca5ab67fb59f76eccc49e57c0908"],["/posts/bbd06fa5/index.html","0555ae5d19ab78a834d3af85d1c15f51"],["/posts/be476180/index.html","e671ba569c6bcc9f1ad5aeb85d2afe61"],["/posts/d5268b29/index.html","9a5cef0ea162e0f4b29a088a554e3464"],["/posts/d7719dab/index.html","2bdb07563c93d8308498e4021df333c5"],["/posts/de4de369/index.html","7d8fb2f6725d239074880a5cdc593813"],["/posts/ea42950b/index.html","f014e7bcbb7b622921af9d70be92f6ab"],["/posts/f3908263/index.html","8b1434d2c3b953d0bb1c636d7bec3cdd"],["/posts/f6c5d65f/index.html","cf8585a3bb3452ec6654f6ce280a44f0"],["/posts/f84657b8/index.html","e4a97e1b0ae1efb937923fe8eb498330"],["/posts/undefined/index.html","a65183b30dbf0783f879b03339e9573f"],["/shuoshuo/index.html","a36807d6eb468e8457c32a212b9e545a"],["/sw-register.js","a6d174e38d901883ebf45bcd155d4b48"],["/tags/Appium/index.html","ad92f4f8d738cefab9d3257652b096d3"],["/tags/Charles/index.html","4c3c48c6e74698e7001cf655176bd2f4"],["/tags/FLAG/index.html","35a814330aa5e66965050bb2e7292115"],["/tags/Hexo/index.html","1e538cf25c3634bd39364217ffd5dc25"],["/tags/MQ/index.html","7a67c9749df2b71fb70774e4fc50f7ad"],["/tags/MySQL/index.html","2cc796062487bb4b79153da7d14438b6"],["/tags/Shell脚本/index.html","c0f2ffc0fe9ce17ff0fe9c0f3eb95a17"],["/tags/index.html","133e35a64c56287021d4f76cb1e50e84"],["/tags/postman/index.html","6187b173ce8fa7915f2489e3682d5409"],["/tags/博客/index.html","0bfedc3a2071ca3998060387337ea6e4"],["/tags/自动化测试/index.html","fcdf70f5c06e3d0cc40e6428baf7ed2a"],["/video/index.html","1b69c78fecca4f2184cb5c373f8fbde5"],["/风景/index.html","158446bac37476f3d5d3f3e99f1a6f04"]];
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
