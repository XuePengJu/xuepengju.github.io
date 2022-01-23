/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","03a10f45cafe0959273705615c939af4"],["/about/index.html","307ed3eb42469e6388abee2367d8d63f"],["/archives/2020/07/index.html","73e85b45560959c5c8d18b8d35300de1"],["/archives/2020/08/index.html","08d7169e9ee76cdbd04494aacc42b4e8"],["/archives/2020/index.html","2bf8c390a3f8030b13cf0285fe631a45"],["/archives/2021/02/index.html","32ddc67d337f9dd237ba8399ba637bb0"],["/archives/2021/03/index.html","2402b40caf17a6093d9e4921761748aa"],["/archives/2021/05/index.html","ab68b03610f3df231ca2c98fe4b16617"],["/archives/2021/11/index.html","915d7b0149f7b5d0cc68f40ebabd0247"],["/archives/2021/12/index.html","417b0aadad5913ef879fcdb478d8ff01"],["/archives/2021/12/page/2/index.html","a1a3e19cf7cf9bdcd00723af55e4c6ba"],["/archives/2021/index.html","8b65d1528739deb6de33ed6d708e5f44"],["/archives/2021/page/2/index.html","03a416145a0489769763f850f773a384"],["/archives/2021/page/3/index.html","888df0ad611dacb0f273a439c4fedb9a"],["/archives/2022/01/index.html","c90a45e466c15fd86872074f9e8da43f"],["/archives/2022/01/page/2/index.html","977907e48abe3efade223945b88e1269"],["/archives/2022/index.html","b55f6a2d23afe2f89b7b61e54c8fed9a"],["/archives/2022/page/2/index.html","32c6302f8f1a69f11e6a31ae1fae0d0a"],["/archives/index.html","dd59f71a58b79f008ead9919dcf5a71c"],["/archives/page/2/index.html","683c2a9fa11579021eb71f4f95da9ef7"],["/archives/page/3/index.html","ca462d1b6a2755ded691ee2aba07605e"],["/archives/page/4/index.html","afcf576f671410383cc1d8c9f5617e4a"],["/archives/page/5/index.html","5882295719695705f4042be672102da0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","de9f81fda2aed0494f92d2f2ccb5d835"],["/categories/Appium/index.html","d8eb918c475e4af033449fafc9cbadc7"],["/categories/Charles/index.html","5c062b3cb72bd3c588b119f351f15e87"],["/categories/Hexo/index.html","a915cc64faec74a8dc79651383fecd73"],["/categories/MySQL/index.html","c5e8b21813898f682c45a0543743b21e"],["/categories/Python自动化/index.html","ac0f9227aae37f980b7772c9a4223d29"],["/categories/Shell脚本/index.html","4dfd892cc692ec8a857f2e905fe5561d"],["/categories/index.html","131419598b9615e3ddae54076a9196da"],["/categories/postman/index.html","9277036941ff252771e6ef434fd965c7"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","369a0a03e8bde22a168d6d7876c2d7ff"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","12155c2d2625b3e67740596f7b6d9e4e"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","409e133fd42db1b8fd39fbab8956381e"],["/index.html","f51b423ec932e3b17607f5509f802b30"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","97da41fb804f65bf5c417187ce28ce06"],["/music/index.html","38b27a4764f8a766b73f5c85da1055a9"],["/page/2/index.html","d55e240caeeb4a247d1bd4ee0e861bef"],["/page/3/index.html","3bb2aafc33f28eeb12f6fc11b9ec863c"],["/page/4/index.html","36f96f9d60fed1183402a184f536d13f"],["/page/5/index.html","6e4b0c0e7e233fc919c9f0b262299ff9"],["/photo/index.html","49016cf250be030c262b4318821d137f"],["/posts/2173e2a4/index.html","172c0077867076b8e765727927b198ff"],["/posts/2ab40ef8/index.html","d455dc32f8a3d201acccd30f568e97c9"],["/posts/30fa304c/index.html","9d21a4a2c3d3c95f43229021c855b66c"],["/posts/3447541d/index.html","0c67ce7cb15ca588c73fcaa77318fc05"],["/posts/3447554d/index.html","ac5457e60ab4395a31fd1c136876a672"],["/posts/344e3c5b/index.html","33490af3670b3487da61697a5b635941"],["/posts/3457ed69/index.html","f8c7bfbef7b308d9d9ea563b346089c9"],["/posts/39cb083c/index.html","688dad598ee47de7d67bd514b71a512e"],["/posts/3ba53770/index.html","2d5daf55aa1e1b0b0090016e45875b75"],["/posts/3bd3916a/index.html","09010278adfa4f6e6f46e148927f2f77"],["/posts/3e4105ad/index.html","bf2ee8ce4163aeb8f5119a9757eb42a2"],["/posts/42f034cf/index.html","a5fdbf21b518b7f21d89e2a3e47a1b4e"],["/posts/50a2b841/index.html","7f8d5b21ae733c35e316dbff11dd9ccb"],["/posts/54eecc7d/index.html","61413f9d94d8ce191b653f3e0af81002"],["/posts/5a17eb30/index.html","d1f0a306b573b86bb65b39f725586585"],["/posts/66841aa6/index.html","f96248763f15ac889cac083c26801f52"],["/posts/689fc75c/index.html","636e123744d426fdaebccdfaff184e6f"],["/posts/7de15477/index.html","4cabda8d4b2db4f298d4b0ed3942607c"],["/posts/8a00d2ea/index.html","c89c41c7c301d9b1c52c1f221f6172d8"],["/posts/8aa14a73/index.html","7b4fb608597f7481c75fe310030ef39e"],["/posts/96032b58/index.html","044840906733898ab701a3ec1bc0dbc9"],["/posts/9656df9f/index.html","f66857d42943dfc7cf19a2f00be78cc4"],["/posts/a3886b70/index.html","5ceda7f88f09a27af7ed6b362435fab6"],["/posts/a42e3f6d/index.html","1da5e731c9915eace962b4ab55227099"],["/posts/a9438874/index.html","2808335ea464c3e31c2d02e8f5ff7aa4"],["/posts/b4b3bf4e/index.html","415cc3e4b754497aab5519a0c77d5b1f"],["/posts/b8685e49/index.html","a3d7cce5dd2b18bf578a248a44665619"],["/posts/baaef441/index.html","994d74590dac7a1df09c44a4c4a9122e"],["/posts/bbd06fa5/index.html","82ce98734c02a8e28e36efca19ee0a46"],["/posts/be476180/index.html","acf78c5c09794437e2bcddcb8ca485a9"],["/posts/c4b6dbb9/index.html","39022e60365d01e68375191d241536b7"],["/posts/c98d9940/index.html","018c0d0e6efc7744435928c126602cf1"],["/posts/d2331223/index.html","78a72a51c2b7b51497423de0421dc43c"],["/posts/d5268b29/index.html","27b5617892f8eced32d4d106aabe4f26"],["/posts/d7719dab/index.html","903e537cb89b51abca406bfdeccb8889"],["/posts/de4de369/index.html","b27ac5a493166c4035d82c7202a3bed4"],["/posts/ea42950b/index.html","3a97c4045afc76386bc5a42eff19e82d"],["/posts/f3908263/index.html","0f3bbc9621de3537e3737d43b6691e41"],["/posts/f6c5d65f/index.html","ef9e6fd95e42d08797800ce3d914dc74"],["/posts/f84657b8/index.html","af3ab9309a19d74ab0e71a5117dff1d8"],["/posts/undefined/index.html","bc3037df2c10bea3499b1e53bb79b0da"],["/shuoshuo/index.html","8ab333fb69702b7ebf29a5b7b0fe0733"],["/sw-register.js","86683b64b7db43ea214ac7560b1695bf"],["/tags/API/index.html","f27b66e1847a55d7e3d9f99bd0a859eb"],["/tags/Appium/index.html","8cb9ef1c128151b2d66f011f8c5bfae3"],["/tags/Charles/index.html","a90111eecee953e903d54cd4e954a19f"],["/tags/FLAG/index.html","e4bbb5ff22131dff9f799dd2542c5a5c"],["/tags/Hexo/index.html","d2278d2bf5d853b8e0ae45f7d84ee4d2"],["/tags/MQ/index.html","1e1585e6781d1d49e679490238a68404"],["/tags/MySQL/index.html","c8df290d8c10eb02c48330d51968dc5b"],["/tags/Python自动化/index.html","fb0a72f8507ddebfd6de1287a778a40c"],["/tags/Shell脚本/index.html","046fbf6bd70f867caf2fd2169c1bddaa"],["/tags/index.html","776d15f1cb105646e0da891b50d089f0"],["/tags/postman/index.html","8e74111a64bea603dec09d2869aa8937"],["/tags/博客/index.html","a4891e9b46ddfc2e7bbfe58c95da3770"],["/tags/自动化测试/index.html","dd7b66e346fee38a204b807d23a2a57d"],["/video/index.html","9849d63b076b2098166ec7b93a9352c8"],["/风景/index.html","8bb149d26f1cd5d802cfa03dde6b0a75"]];
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
