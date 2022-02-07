/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e0cbe030345f753eacb064cc7f3b82b3"],["/about/index.html","3026148436e61a72df2b97f16920db14"],["/archives/2020/07/index.html","9956d763db908874e2e1313c67461a77"],["/archives/2020/08/index.html","31cd203a37fb8bb6b1ccbeeb7aa5b56a"],["/archives/2020/index.html","85e5f12b18df9d47dd4157830fec5f42"],["/archives/2021/02/index.html","05a40256d1b4b2f16d05ee5f9d77839d"],["/archives/2021/03/index.html","27d62bab005484ced859aa90e145de9e"],["/archives/2021/05/index.html","41b8f5de79569030a0a35da766dc8fcc"],["/archives/2021/11/index.html","129a01c72766b805b040342848e3e31f"],["/archives/2021/12/index.html","3c6fabad6c91f12bb5e71905ebfbbe6a"],["/archives/2021/12/page/2/index.html","a681ec5a9f14a60ab2937c7a085187b7"],["/archives/2021/index.html","57f7895f5d44991c8388aec2166f943d"],["/archives/2021/page/2/index.html","d1fc7fffc9ff365b32d1eb930d15e1e0"],["/archives/2021/page/3/index.html","a04a60ed9499866b59029738963c3ffa"],["/archives/2022/01/index.html","5daa8a8b3c42c82136e1fe4f9b913614"],["/archives/2022/01/page/2/index.html","c32d17d812bf8a51f5f1510689b64965"],["/archives/2022/02/index.html","340e8cfc09580f6e72e672c034b440cf"],["/archives/2022/index.html","477db410c60bfa90393929914c0bcc72"],["/archives/2022/page/2/index.html","3615e7d6a20e07f3b74776de498f1fce"],["/archives/index.html","1f6c7f5af078d21639450bb282c3df29"],["/archives/page/2/index.html","f55fadc2bedbb50a3da4997ee4f613c3"],["/archives/page/3/index.html","a063cda214d4cff144dd9166c56d3816"],["/archives/page/4/index.html","23e43848373f675f4b53779091b1d933"],["/archives/page/5/index.html","870bff1107e80bfe892ca774a7e7801b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","81ee875ef9924d34abb3fabf614948e7"],["/categories/Appium/index.html","73b66fd30ed8114055f8e6e5f3886759"],["/categories/Charles/index.html","2e13a8076513384f037066f19747cf26"],["/categories/Hexo/index.html","21c78a94c2cb841c6c33dfa65a8812ec"],["/categories/MySQL/index.html","3f7eb96ec46c7720b3294d789f1003a2"],["/categories/Python自动化/index.html","85745b469beec5fc89ddfe7289004a37"],["/categories/Shell脚本/index.html","afa870849c8630872b7c476510c4b07c"],["/categories/index.html","8a1879f743e805c0f5456aa0b7ec5e8d"],["/categories/postman/index.html","8a118ac21bdbb3c33b1a71cc71affae3"],["/categories/postman/page/2/index.html","8301f5832314426a1b06add0e9d1142f"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","ee1e75a4d04c23d11acf7a53618246cd"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","708a68dca193b988c8cf168b58b4d3b3"],["/index.html","e0ffb5c53c765c25e2865656c2ea5f32"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","5e66514e921ce0c8c3f0d3f02bb1b2a2"],["/music/index.html","5f852c5950863ade76215f3559dc22da"],["/page/2/index.html","31696719381426228b251998a6e8237e"],["/page/3/index.html","0be825876e9c85cc6b88046b6a7e5d07"],["/page/4/index.html","3e5f8cfd0e91c0bbfc96653f58264f88"],["/page/5/index.html","f2f557b9061c8666a230b7c858478aeb"],["/photo/index.html","bb500748dd76f6d3600b7798a07fada6"],["/posts/2173e2a4/index.html","43eb9a0805c0135d16ec557b703023ac"],["/posts/2ab40ef8/index.html","4dc37cf2374a99d035212be3a14b0baf"],["/posts/30fa304c/index.html","d49b9ee88c11a305a75512a43bf9ae34"],["/posts/3447541d/index.html","10f38ee41fac89271fea371cb404d05c"],["/posts/3447554d/index.html","7552b9383e104fe8f82527e8ac6bde7a"],["/posts/344e3c5b/index.html","8c8123fd2e8aa27eff77a46bff642e0f"],["/posts/3457ed69/index.html","f78c756de1bc3515a12b2be481af4785"],["/posts/39cb083c/index.html","93f371bc6d06162433196f94d77f4b9c"],["/posts/3ba53770/index.html","9efe51b61f4bbdf5f605cf936116b43f"],["/posts/3bd3916a/index.html","9236a1a880d28bd2b7c4b33c71bd68ef"],["/posts/3e4105ad/index.html","0fb0f5af067af11bd3d87b6be69c41c3"],["/posts/42f034cf/index.html","919851b510b221a50b94dc36828d96c2"],["/posts/50a2b841/index.html","84b3a6015c9444b8c6bee5f241aaacfa"],["/posts/54eecc7d/index.html","08b672d2da64419c1233fca5dba93465"],["/posts/5a17eb30/index.html","1917bc71096cbb0c257972e36d6a8fc8"],["/posts/66841aa6/index.html","5d06c1939e453408af8a4d8edb9cc2ea"],["/posts/689fc75c/index.html","c80fd8f867622670162020ede8f9b7bb"],["/posts/7de15477/index.html","db8c8ca97207db99fc6a99e08d36f09c"],["/posts/8a00d2ea/index.html","23429aad4b4559d64d3f0a75e1310f23"],["/posts/8aa14a73/index.html","7cfe026480909c11e2f50bb0cdb59c4d"],["/posts/96032b58/index.html","2a2f95bb96dc088540e0aa977c1eec06"],["/posts/9656df9f/index.html","e65296633a12b04f77ce836bbc87db67"],["/posts/a3886b70/index.html","9c4abd7406fd55c7c785622ba2ee23b2"],["/posts/a42e3f6d/index.html","eafa3096ec59f2bf359c9a4d457b735d"],["/posts/a9438874/index.html","c83c18d97681b44ec808bca3b0d7b05f"],["/posts/adb093cd/index.html","a182c162f6f28ce5bf1c52bd2e425264"],["/posts/b4b3bf4e/index.html","95575a2af24838b8c3b14d55860f72ea"],["/posts/b8685e49/index.html","a10b9539fa058f73335cd312e4803535"],["/posts/baaef441/index.html","01620e414a5095b8f79b0a3d431db778"],["/posts/bbd06fa5/index.html","d29de0d110f70088f143bd4f6e3f5b96"],["/posts/be476180/index.html","d325ac7185c816e820e3d095bf89aa84"],["/posts/c4b6dbb9/index.html","51b8e44e53714465f0c3fe026de58a76"],["/posts/c98d9940/index.html","e19b14172a8d73458a01967a97ed6a1a"],["/posts/d2331223/index.html","f422d19b3b1d021275a6aa5e9fe3bd04"],["/posts/d5268b29/index.html","a34088e51d6ba0d47c4d3fc5bbcb08ab"],["/posts/d7719dab/index.html","ad9fbc4b220e37fbe341a75846c85c7b"],["/posts/de4de369/index.html","41927d4ef1c8d44e9bdfaadbe7c62b07"],["/posts/ea42950b/index.html","3409c9601fdb1f131afd1e2c60313ee5"],["/posts/f3908263/index.html","edf23de10bcbecd52418d97b3e7d2998"],["/posts/f6c5d65f/index.html","17dbff94a743392dc54c71d612180f25"],["/posts/f84657b8/index.html","905321853d5b233e0819aa0036b42526"],["/posts/undefined/index.html","92bd482f39297ae8377b78f420717f95"],["/shuoshuo/index.html","bfe96b2d6d624f760104fa7c0eae636b"],["/sw-register.js","f5079c83f69d2838ea9fdfae29d3361e"],["/tags/API/index.html","812b857580029601bb5ffc75fea6fef1"],["/tags/Appium/index.html","8a10cf27f7676606f65123f401b5ed4c"],["/tags/Charles/index.html","935e93a6e8ba7b40f70f3431f82f1862"],["/tags/FLAG/index.html","f8654ed05e229b9bf5b7f8894506b7df"],["/tags/Hexo/index.html","14dfb431e0bb4f595605c65270467198"],["/tags/MQ/index.html","79b779d787b246f2fa28733819af4e0c"],["/tags/MySQL/index.html","ba3d2432091a724ed3831f255434a6e4"],["/tags/Python自动化/index.html","0de2d19ccd14575321e97edf65bc5e26"],["/tags/Shell脚本/index.html","f6d7ae95dd37b8696748f8c375ad908a"],["/tags/index.html","41c080fba977a4ffbaffca133ddf43b3"],["/tags/postman/index.html","da4b695a510cc540bf0b00db231baa84"],["/tags/postman/page/2/index.html","3aeeb5b46e31a8fcfecffa117e6be58a"],["/tags/博客/index.html","626f5c3a9b33f0742531fff4887a2d92"],["/tags/自动化测试/index.html","e2ffe5e62e000c43ac831f819d7c595e"],["/video/index.html","dafe1770dbae3f322c144188aa350296"],["/风景/index.html","229048a1be1136e8c23fc11d1cf28d80"]];
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
