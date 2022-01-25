/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","920d521ee0b0be474fe04a9ea4389c07"],["/about/index.html","4c185ca7f1e3544fc59399fe351b58b6"],["/archives/2020/07/index.html","a83df03cde27c81eb76cfd223046de37"],["/archives/2020/08/index.html","0c64aeec5286e3e20edfa45ac9bba5b2"],["/archives/2020/index.html","4a6a6b2c10b5df872fe851856acd569c"],["/archives/2021/02/index.html","ecd5a0ea1d9f5ac5ae77f2e35ce02c0e"],["/archives/2021/03/index.html","cc08736017660f8b1b22d137c34ef0ad"],["/archives/2021/05/index.html","f3f0614512003a4f2a53546aef85ffc7"],["/archives/2021/11/index.html","90d42eaa0c51fb28e97b5cce3f80c117"],["/archives/2021/12/index.html","79a42274c96d1ddf035f930af00d792f"],["/archives/2021/12/page/2/index.html","a1cebcac3eeac62a3e49ddf0e982f775"],["/archives/2021/index.html","534e1b2ca6b8ce1e6855a3f1ee9eee20"],["/archives/2021/page/2/index.html","2851bef5fc1a4a481b9de3602af327a7"],["/archives/2021/page/3/index.html","a8c7cd19f2c3921bb8e9a7f0bb255a16"],["/archives/2022/01/index.html","3e6509248b9daac1ee6977df61495631"],["/archives/2022/01/page/2/index.html","f135f46024e852ef3fdf839390cebb7c"],["/archives/2022/index.html","d140794c7e5600ec9b63f894ee22e554"],["/archives/2022/page/2/index.html","1c688881f3a638f2916edfa4841bfa83"],["/archives/index.html","e1eda082756f67a39debc0228e44da63"],["/archives/page/2/index.html","67c879c4116190a2658666a29d28c21e"],["/archives/page/3/index.html","5e588a1f38eb7be1bed665dee88bce99"],["/archives/page/4/index.html","5e405ffdb5a7a70794c07a75abafc9f9"],["/archives/page/5/index.html","e661f232e8ac56f1242a0ff66e74209f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","2ed235872119d2bd22a28033e2dffd18"],["/categories/Appium/index.html","955991a11c7bff906329cf6412c0559f"],["/categories/Charles/index.html","73270d3e0ddff645598df3e6a8d65c65"],["/categories/Hexo/index.html","e45e010618ced2907c9200376af00d88"],["/categories/MySQL/index.html","26e9dfad5652d061d82b7a834282b9b6"],["/categories/Python自动化/index.html","976a178503c48f54cbe9647e3d45941b"],["/categories/Shell脚本/index.html","55a7172e40b2f3635be11ebc7ea331a9"],["/categories/index.html","67cac426078fa2d2c5d3dd4c139ca4ce"],["/categories/postman/index.html","b241844eff6a28a99cb88d2d8ff5bf64"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","369a0a03e8bde22a168d6d7876c2d7ff"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","12155c2d2625b3e67740596f7b6d9e4e"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","409e133fd42db1b8fd39fbab8956381e"],["/index.html","184f671e2b33b276e47573304e7ac27e"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","00ba138f3a5cd1930514c1b48c26503e"],["/music/index.html","5b4b2948f61f05db239fea662188e262"],["/page/2/index.html","95a565c0ca76adce2210df8723e08706"],["/page/3/index.html","ae52222cb2e1f9c3a0e9ffbc6e1a2d7c"],["/page/4/index.html","29fe56d2d859f12a684909f070eb4339"],["/page/5/index.html","38607f6fb034b4f13fcad0f3b3d604d5"],["/photo/index.html","7f81efa986954d676a469ebb6df9dd68"],["/posts/2173e2a4/index.html","08e32b48ac5d94ae7011522d50b02505"],["/posts/2ab40ef8/index.html","e2bf2bf78c2caf7868f814a14a3a7841"],["/posts/30fa304c/index.html","6069a976e8a8a03f8c5dbfd5966b43a9"],["/posts/3447541d/index.html","ff83dcc6092aefd495109b874ab8e29e"],["/posts/3447554d/index.html","bd45887cec76561554c46ba03a7fbe00"],["/posts/344e3c5b/index.html","04327adc3b94cf64fd04d60708659d3b"],["/posts/3457ed69/index.html","da6c9e15b3ba47ece8407f0806b73cc4"],["/posts/39cb083c/index.html","259b650d19a37f6cedc2f204d7cdcb8a"],["/posts/3ba53770/index.html","fabd66d3bb626afdfc430cdec86f8517"],["/posts/3bd3916a/index.html","32f21f0d9294804168f12c896c865e04"],["/posts/3e4105ad/index.html","41c4c813526f8652b80d90dd661fbe7c"],["/posts/42f034cf/index.html","8a1aeb42476ffbdf12809d9695f4b5f4"],["/posts/50a2b841/index.html","a6014ddc2b24e155d285541066613ec9"],["/posts/54eecc7d/index.html","b092c28207593af6d6a1e8bcff93e935"],["/posts/5a17eb30/index.html","7d17e17b3ad90ec3cc1e86aeb838305b"],["/posts/66841aa6/index.html","44bb2d5d1607d485d10c9d5184966a98"],["/posts/689fc75c/index.html","3451c18db13e81d05e0716b2619b6414"],["/posts/7de15477/index.html","17f5b5cef66a5d185d094c6a43f14353"],["/posts/8a00d2ea/index.html","96f7d1674d4c119ea09fc2faa48a7142"],["/posts/8aa14a73/index.html","09f3107b11a10c25b9777f52197257fa"],["/posts/96032b58/index.html","23c080d4921942b87658f87baea4b2ad"],["/posts/9656df9f/index.html","41bce0c9d893b695589fe7a1cd10de23"],["/posts/a3886b70/index.html","feec96e5a9e2467cdb2eeda2a0241b98"],["/posts/a42e3f6d/index.html","1da5e731c9915eace962b4ab55227099"],["/posts/a9438874/index.html","806cfac4f5990a86c1d5296db169b688"],["/posts/b4b3bf4e/index.html","1040be1692242702a3b4ad3e768a7b6b"],["/posts/b8685e49/index.html","becdacb3ab0ed0f93a98fb903ee139d2"],["/posts/baaef441/index.html","05c252395243bd2e6d4f13bc9b5b68e1"],["/posts/bbd06fa5/index.html","2fa88fdfdb502f7431bb811968ce05bb"],["/posts/be476180/index.html","87b3056e7614f23b3da4cb94dc40ac45"],["/posts/c4b6dbb9/index.html","63a33ec4682f913af96e33878ee60140"],["/posts/c98d9940/index.html","a98907f39a5f6f44f36f2ef6cf934619"],["/posts/d2331223/index.html","2c256a49e025d1ba2c57acee4bc161ad"],["/posts/d5268b29/index.html","73ff87fd24e401e7ded86d77d947e978"],["/posts/d7719dab/index.html","2e4256a5cfd545d267f45da924017d14"],["/posts/de4de369/index.html","e2b13a3b8a6bbd5ce221a4a95369aaca"],["/posts/ea42950b/index.html","f7cc6e0c19207d0fc4924250a8f75705"],["/posts/f3908263/index.html","646a87c31e4982e78897a4b54af6d493"],["/posts/f6c5d65f/index.html","e8ef9956c42e20e10e8a36880eb697b8"],["/posts/f84657b8/index.html","af1e20c896217cbeacf0bdcee082e4b5"],["/posts/undefined/index.html","2caabc36096759c9f0f8bb8dcc35801d"],["/shuoshuo/index.html","edf6677766996b95f7a4c3455488c14f"],["/sw-register.js","4d1d5002d74693bfeac86be8258ff1c2"],["/tags/API/index.html","0999024b59163188b8b4640a66fe875a"],["/tags/Appium/index.html","49f48cbae34315acd4abc16410d1990a"],["/tags/Charles/index.html","5a0577b83898d6c1585e8239fd4c40a5"],["/tags/FLAG/index.html","8af567f4e037cdd17ac327d5e5feaf64"],["/tags/Hexo/index.html","475eaa5f5c8765ae00a38d0c426b975b"],["/tags/MQ/index.html","40998844c2c1d2b89cd4a3d16f11eca9"],["/tags/MySQL/index.html","07631f60da117389b5c434f5d1d11e52"],["/tags/Python自动化/index.html","df674cd401d1e669b51f645f3c02b8a3"],["/tags/Shell脚本/index.html","1c0d6cd4a58fd3b5cb87f2b121933365"],["/tags/index.html","ac5a9dac683d49e1b063a25d7469c8d0"],["/tags/postman/index.html","8cd72d2e8c7fd519be39be3437ff3c8c"],["/tags/博客/index.html","3f924b947bf78b741bd09f510eb4a0ee"],["/tags/自动化测试/index.html","be551e49f838d8e96a6599c206373d87"],["/video/index.html","1362bcf2e0d6e79942b4bf6c5d240552"],["/风景/index.html","5e733c1defb0a33e0a55701104eb56dd"]];
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
