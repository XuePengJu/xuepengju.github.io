/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1904972eacd37153602e13a6f8e9a7f1"],["/about/index.html","b54670e4fe8250c8c9ac9a45b2460083"],["/archives/2020/07/index.html","b6b6dc4829a2e15de3e48b9742ef3281"],["/archives/2020/08/index.html","2c68d569fa1ddd85e991bf9794237fa6"],["/archives/2020/index.html","223423d83542cd0912f3c8448a7a060e"],["/archives/2021/02/index.html","a5ef7f633a02f2e0b219bf659ebe1453"],["/archives/2021/03/index.html","b9ab868ea593007cdab3d484f4605e31"],["/archives/2021/05/index.html","119c2dd495753a40a33d49295a2d3e16"],["/archives/2021/11/index.html","03a63f059f6e8ac9368d014ece9cb99d"],["/archives/2021/12/index.html","9bd65f69d18379d7652d171b35c86e35"],["/archives/2021/12/page/2/index.html","dc1351d7f11053158766990bb8f6d929"],["/archives/2021/index.html","8cc81e45c435c9e1196728f3e56603d3"],["/archives/2021/page/2/index.html","7a8859521ff6424ab25bf2a7edb79544"],["/archives/2021/page/3/index.html","e07d9a1a88ede43889c8f8d3c2f3fbe7"],["/archives/2022/01/index.html","7baec579ced32c351b9590d86efa9b8f"],["/archives/2022/index.html","2b35f62d519c7f5e67dd098edc838b68"],["/archives/index.html","99ac6c605b9fbabe03bbf1df6ee9df49"],["/archives/page/2/index.html","5473be80aaa53bd4625ebda94b8d7295"],["/archives/page/3/index.html","a2b1cecbc77f9c9e710cd125cd056135"],["/archives/page/4/index.html","4406a0c5fbbe6540f45651733bbc4990"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","9971de77997323f729d23b2737ae0d50"],["/categories/Appium/index.html","a9dba676ac0bc908a7222371b8b8f99d"],["/categories/Charles/index.html","34a778c43f7590de164742e6980ba1a0"],["/categories/Hexo/index.html","6f0280bc54c87a6660ad9306699c73d8"],["/categories/MySQL/index.html","8852afef2198623d68f2405f17f513c9"],["/categories/Shell脚本/index.html","58ff2842389b74bf152285b3ad32aeba"],["/categories/index.html","59d319f8e55dd7879291c4b1a8d3a918"],["/categories/postman/index.html","5689cf0f85be3b04f86cd58af48071b7"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","369a0a03e8bde22a168d6d7876c2d7ff"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","12155c2d2625b3e67740596f7b6d9e4e"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","409e133fd42db1b8fd39fbab8956381e"],["/index.html","8fe093544d565a81b56b81dff9c77106"],["/js/VolantisTags.js","5a86412afe9ca26eafbfc395ad45ea80"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","dfae39310d1843b5de0234dbf992b289"],["/music/index.html","2d619fa4c832156a1c9d6743d74a18e6"],["/page/2/index.html","50d9190768310617ed7bf4b64ac68f4e"],["/page/3/index.html","f8283c7b1bcbf12bec336097bdd0e5da"],["/page/4/index.html","bac60050fda94e824b53f93fb31b6425"],["/photo/index.html","b692a1ef729716a1a4d19ab7b7f0f257"],["/posts/2173e2a4/index.html","cf34000dd067746575daf587057c455b"],["/posts/3447541d/index.html","bcc3e08de9ba92e447893407789d43e3"],["/posts/3447554d/index.html","6c25020a68310fdb858ce5f21390224b"],["/posts/3457ed69/index.html","f21f5e999a5e3e4b9be261ce0bbb694a"],["/posts/39cb083c/index.html","ee42c00c70f08f92e04714927edfbd23"],["/posts/3ba53770/index.html","c8ea9f414f073419500f3e8f3abf86fe"],["/posts/3bd3916a/index.html","338165c2d803403acc42a9a7980ec9b4"],["/posts/3e4105ad/index.html","27d573b57b59cdaec304670db11fa18d"],["/posts/42f034cf/index.html","e7b4f1115e246212e29b029609dd141c"],["/posts/50a2b841/index.html","9cc0154625e61ac23a48f6f9f40a15e5"],["/posts/54eecc7d/index.html","72758a6fd15d0c279601ce05c457ce58"],["/posts/5a17eb30/index.html","d5c23de706c1b9791f30a995bbd121b1"],["/posts/66841aa6/index.html","d639d99381f3845e61e9c9496fb32366"],["/posts/7de15477/index.html","61ae3b3418609d12a35c72cc2c4b52d2"],["/posts/8a00d2ea/index.html","1709d12e1c67b1949a3593cd6e8582ee"],["/posts/8aa14a73/index.html","48519c43b38feba181670ef94f3b5b27"],["/posts/96032b58/index.html","2ef4d7398920f802dfd7fef48c535c5c"],["/posts/a3886b70/index.html","b1a080d907a87c5636ae89c7e2fe5a16"],["/posts/a42e3f6d/index.html","b2b46c98c6c47a8fac6dd876628a4af1"],["/posts/a9438874/index.html","50339cdc333ecb28fd8f98e20d2990c1"],["/posts/b4b3bf4e/index.html","6946866d748a0d836b1c05f68f4f4563"],["/posts/baaef441/index.html","e691e8a0c6cc591b1b8e8854bda956e0"],["/posts/bbd06fa5/index.html","8120b9d12b825c9bc74016f7577d2af8"],["/posts/be476180/index.html","d6e77ae0e196a361fe79b3653ad874e8"],["/posts/d5268b29/index.html","1632ace4105a5cfce2769b86441969a5"],["/posts/d7719dab/index.html","def8b912e719c43420acce8d023717bf"],["/posts/de4de369/index.html","b0f9e93cb8fd9553dff9422877f9f3b7"],["/posts/ea42950b/index.html","7c23c52a2711f9f4a73a74a66a322d70"],["/posts/f3908263/index.html","78c117fd4b0316ac8bf94cbbbcd5d49f"],["/posts/f6c5d65f/index.html","d2532dc59784bfe1cb384b80e8101bc8"],["/posts/f84657b8/index.html","5b4b06fc296cc3ba077f99520dcfea81"],["/posts/undefined/index.html","db70b970f3650321018dcfade0c1e994"],["/shuoshuo/index.html","e016a7fce381758afd7ca45869dd9c48"],["/sw-register.js","73d69fb7705ddbd4cba653bfcb6b576b"],["/tags/Appium/index.html","2b5e9e2ac58b9d74868e956e14082077"],["/tags/Charles/index.html","8b9d3f8dab7002a6a7976026fa5e925e"],["/tags/FLAG/index.html","4e67e37f51d9b2627aa3922ffbd2c7a1"],["/tags/Hexo/index.html","32e129073c2de5eff97064bf0dcd493b"],["/tags/MQ/index.html","6872d3f57d37d14be52afe748c76beae"],["/tags/MySQL/index.html","13e48e19b29057b8409fd51a49964ecf"],["/tags/Shell脚本/index.html","57b1fd94568ecaac7e65b4b7a7ab41ae"],["/tags/index.html","56591a251fd6823368e132ecdd84e153"],["/tags/postman/index.html","1e48b564f2b96bc621f7a00998727295"],["/tags/博客/index.html","dec5ac44a120cb28c002cea0e94b48ed"],["/tags/自动化测试/index.html","64184965954d7170df0f388e45aa8511"],["/video/index.html","2f883467b13a4d2d26b7607041b1be19"],["/风景/index.html","fe6eb78af2065c674b394f37a5edd58a"]];
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
