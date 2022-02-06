/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","02f29f117d2352567aef099e8675920c"],["/about/index.html","043e155cdb7df3b8cdf720e5bca36363"],["/archives/2020/07/index.html","a4c89586590c79191632833b9ac61d92"],["/archives/2020/08/index.html","c1025303421f8851dc5db8b61e8e88a3"],["/archives/2020/index.html","6817786cdbbe6a54e37f9f336976ea7d"],["/archives/2021/02/index.html","dd03eed31e84702394ec4fa70e711b88"],["/archives/2021/03/index.html","dd95fd31c79da18ccb515e75356adbec"],["/archives/2021/05/index.html","493ef42396ec27cf1c3ac6a6383861b8"],["/archives/2021/11/index.html","1ab6a691c2cd25bb45659c66384506d2"],["/archives/2021/12/index.html","3b01eb80b56bb16d225a0007fec5ddce"],["/archives/2021/12/page/2/index.html","9f11ed556d6439ba91a60597c7b44ea7"],["/archives/2021/index.html","28e6d205ef7ca9c89b1a6eeb3fdcfab8"],["/archives/2021/page/2/index.html","e927564b0aa1cf0e3a1c19d3e1f95ded"],["/archives/2021/page/3/index.html","cc92b3877031507f4590057a1db2d86d"],["/archives/2022/01/index.html","c5a90ad04826df1e3814b30ee94ba762"],["/archives/2022/01/page/2/index.html","a66c57f23e4c6ac4ffebf25e5adbcb45"],["/archives/2022/index.html","8061cfc068216ea77c15b5e888a62447"],["/archives/2022/page/2/index.html","8a9b5c6a378c850f020e838e6acc196f"],["/archives/index.html","b77829152ab09ff14d3ac7eda5381b27"],["/archives/page/2/index.html","3acc62842f2b43a5054e819cd3a3c5de"],["/archives/page/3/index.html","30f92c2e8db9b618c7183c50ee83d9b9"],["/archives/page/4/index.html","b3d5984443e81e24d736885aab578d6f"],["/archives/page/5/index.html","9bc4dc63e025d4736118f20bec71e0cc"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","2e277ead0178b10215dd98e10f7d4ffd"],["/categories/Appium/index.html","8a920c64c0d1a0dfcc0796e9e93f9462"],["/categories/Charles/index.html","1fbb61449fa97eae5e8a38271a4e2f8d"],["/categories/Hexo/index.html","c200ac9e28d3ce6da8844e6c9de54ccf"],["/categories/MySQL/index.html","211f96071b225c9a969008d8ef5ebea9"],["/categories/Python自动化/index.html","858d0882511968e626682be68ee2ce9e"],["/categories/Shell脚本/index.html","f8b7fc0415a6c21c8be99f3b04389655"],["/categories/index.html","950c035a5373201adc3a281aeb80c715"],["/categories/postman/index.html","3d0a8c21197b9420610aa95c9080050c"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","ee1e75a4d04c23d11acf7a53618246cd"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","708a68dca193b988c8cf168b58b4d3b3"],["/index.html","47ee551e72ec6303a9c003dbc20e7f74"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","d57839170ddd64b8fd645919d90a7dd7"],["/music/index.html","0ef9a211a9d1187022a33ac61aee5ac2"],["/page/2/index.html","62f9d57a5cdcae7a6490b099a88c20cd"],["/page/3/index.html","82ae3cde461b08fb6db81171dd0138b3"],["/page/4/index.html","d20dda98b55454c1d93e87d54338058b"],["/page/5/index.html","cc52a4e0cc09db3504a0622894bad065"],["/photo/index.html","bc0f7f987a477a38e823c2f50b2d3bab"],["/posts/2173e2a4/index.html","4e03d8d83c5497ff41811ca5b04e7e64"],["/posts/2ab40ef8/index.html","c3fba0a9f206cf85e581d9a10a2d3890"],["/posts/30fa304c/index.html","6069a976e8a8a03f8c5dbfd5966b43a9"],["/posts/3447541d/index.html","5c94cdb5bbde522ccf76d0f787bca7b8"],["/posts/3447554d/index.html","665bb120f82e64de5e0faed2e46fe8f3"],["/posts/344e3c5b/index.html","dc3c67ebd79108dcc094d2a3994eda81"],["/posts/3457ed69/index.html","dea50044aebbe74aa71671ecd2fae659"],["/posts/39cb083c/index.html","7e2df9dffd908dd8e03c0d98c9645391"],["/posts/3ba53770/index.html","238490e186fde1118da0828aac617d36"],["/posts/3bd3916a/index.html","ede89e65ad22a30df2ea1d985a222147"],["/posts/3e4105ad/index.html","cef8e847ca531b13417d591819f13e44"],["/posts/42f034cf/index.html","3a172659d53c175ffa0bbd33aea3dcbc"],["/posts/50a2b841/index.html","013dee86a97cf6aaf1fbebdfa7fee321"],["/posts/54eecc7d/index.html","4ec6bb9ccbabd4c2a7f154623a77d842"],["/posts/5a17eb30/index.html","05cc5a8ac7d73579055eb9c5ebfcfde0"],["/posts/66841aa6/index.html","29eb17ecf826f54bff0b188dc5889405"],["/posts/689fc75c/index.html","42d3aff099104eb4953f7482a2b811b4"],["/posts/7de15477/index.html","599835ca71b7d0b7abe55f1afa8c6d96"],["/posts/8a00d2ea/index.html","5e00b0cc9767ef27615a11bf38d83368"],["/posts/8aa14a73/index.html","1cbc94dd8098f9049a628503e805f9a2"],["/posts/96032b58/index.html","c1e25f1eff4a97047b2497a88f02fe46"],["/posts/9656df9f/index.html","9ea352a1845ef91304e3622b60600eff"],["/posts/a3886b70/index.html","bc7ce98925695c60304e268bfd92fc24"],["/posts/a42e3f6d/index.html","7e098d189b91745cd0fca6b9619e6896"],["/posts/a9438874/index.html","fd8dad1e477dd091eab0a73f4ee18be4"],["/posts/b4b3bf4e/index.html","1040be1692242702a3b4ad3e768a7b6b"],["/posts/b8685e49/index.html","c45a0852ae3c5b078d5f4e2a88afc86b"],["/posts/baaef441/index.html","3235a351e727371f263ed7dfdf981fae"],["/posts/bbd06fa5/index.html","2dfe959160d0ccae97c4e42202c7018a"],["/posts/be476180/index.html","e502696e36f262ecde6b061eaa9bc690"],["/posts/c4b6dbb9/index.html","532549a38bc91e8b816d25518fbbe0d1"],["/posts/c98d9940/index.html","3acc6cd9030dd8c4d5db18299b51c2b3"],["/posts/d2331223/index.html","74332f6708e75d4a474b267d0db2ed8e"],["/posts/d5268b29/index.html","b3e0a901f6bfa039a50a9c59824b9d62"],["/posts/d7719dab/index.html","d64393dcdf55d6468f63d26c4ed88415"],["/posts/de4de369/index.html","3994cad25b4f5dea566c552efd995510"],["/posts/ea42950b/index.html","b67a0e6c7384bf2cd21c85113adc00d1"],["/posts/f3908263/index.html","d1caba3f81cf036b21fa94c55718d6d0"],["/posts/f6c5d65f/index.html","d1c45e32b897d601b5d25b7094bb0f59"],["/posts/f84657b8/index.html","48db78546c59e1005b509852b1c602a4"],["/posts/undefined/index.html","850d4ddfebd20c02e9e61aae71f197ba"],["/shuoshuo/index.html","9379768fb61cb9b767e8efa3531d4da3"],["/sw-register.js","62edc75e042f4ed3dca31a3cfa6fe532"],["/tags/API/index.html","efeb6330731106ba527751282c4b4dd0"],["/tags/Appium/index.html","10986737074952b04d97aded11a7be3a"],["/tags/Charles/index.html","774c56b916dbd2433d455d24e877029a"],["/tags/FLAG/index.html","bf57d7681aeb85949dcefc40214bb04d"],["/tags/Hexo/index.html","ea34abc9c7ce8b5a07fd496859cddc30"],["/tags/MQ/index.html","879ffe6cd30aeb4a3eca72269ebcea4e"],["/tags/MySQL/index.html","aa4e3cdbd4ac339b4e85c76bc37dd20e"],["/tags/Python自动化/index.html","574e40eac3ddbc47cdad93bcbdcc666f"],["/tags/Shell脚本/index.html","7aecb8f0ad46bd0bde283917c721a545"],["/tags/index.html","e2cf47841601772421d559579baf13e2"],["/tags/postman/index.html","77c0abbbef99f932bfa7c0946407ffe3"],["/tags/博客/index.html","b5baad42e59bec9c615ef1432574fa85"],["/tags/自动化测试/index.html","98d8fe4b5d68424a635f604e1e5c48b5"],["/video/index.html","69a10865cc8211e6dbcd31695c751b6d"],["/风景/index.html","4f6410952aadfe7644683b1338c2608b"]];
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
