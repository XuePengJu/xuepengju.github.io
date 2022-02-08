/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f22f3f54724ef348e01247e3b17a7010"],["/about/index.html","19e88e963c237c6d22a04f09abdecf66"],["/archives/2020/07/index.html","79ea050c8ae56a0dc5fc68c418aec530"],["/archives/2020/08/index.html","18eb8dc32a68786d517f7927ab375d60"],["/archives/2020/index.html","094052b195eac6a5eb4f4bb846bf69c8"],["/archives/2021/02/index.html","ff80f46125bc12c74808fcd59b6f230c"],["/archives/2021/03/index.html","2d9dcdfa34ba944b3309fde06a338bbf"],["/archives/2021/05/index.html","3be4c1ce78da9e4bbac0d8e4b25e5ccc"],["/archives/2021/11/index.html","0cf43c2d2186ef6673bb3450d32fc5fb"],["/archives/2021/12/index.html","9aff6a5ff9a69d8934980b094149a8ae"],["/archives/2021/12/page/2/index.html","94f04d5740a425b8461dc8bbfd28ecff"],["/archives/2021/index.html","6d5cecbb1cac51b23ccd2f585b393597"],["/archives/2021/page/2/index.html","b72531700df81e8856e8d8568b4368b8"],["/archives/2021/page/3/index.html","2d0195017c81a0c8508a3eb5f9316b7b"],["/archives/2022/01/index.html","71eccc3191b809a1c7695ddd9236bea7"],["/archives/2022/01/page/2/index.html","039e04f7d8ec90f149bbb392700cd5eb"],["/archives/2022/02/index.html","6101628c52b0e1bbed9d68354559e7c5"],["/archives/2022/index.html","b9d05c26436eafcba081ad3f3fae0aa7"],["/archives/2022/page/2/index.html","766f6d3762d148f26576be9e4cf6a0de"],["/archives/index.html","1e7c0527dfd22a0aa86bc0c007737dda"],["/archives/page/2/index.html","879098a0c1e12a6c7d6944797f4b3b69"],["/archives/page/3/index.html","10b2bd011c9802be9c910a2e57224635"],["/archives/page/4/index.html","141ed7f3bb5784f2f7aef4ba226c3aa1"],["/archives/page/5/index.html","f7ff0711ba77b2d194d24c04b59968ad"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","db09cc16a078f8a54cdbc113ffcfcd86"],["/categories/Appium/index.html","9ac7daa43244b6a8238aa10a6f7bbe8a"],["/categories/Charles/index.html","fb0c11e104f5c420c06cec63cc6e1a98"],["/categories/Hexo/index.html","77c19e49337292b65d03e9dddcf35e6f"],["/categories/MySQL/index.html","1c17ebec3b3fe6a0e14fce1f5135872a"],["/categories/Python自动化/index.html","2ce67ed09c90f4d0e80a45330539ca74"],["/categories/Shell脚本/index.html","edd5cb2bc112c5e8f410dcd1cc714b2b"],["/categories/index.html","9e215ff024e4b574772f25feb953baeb"],["/categories/postman/index.html","2fa57011a4dc0eabdf42040c6e8df704"],["/categories/postman/page/2/index.html","126a9675dcff6a0893538bf04ed1b4d9"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","ee1e75a4d04c23d11acf7a53618246cd"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","708a68dca193b988c8cf168b58b4d3b3"],["/index.html","87843e4ba4dd6ada2fd1198ad09dffb9"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","9242e6ebe0eef33b39fba3d571a59ff8"],["/music/index.html","6b11d38a4ac19679a2ead01741e31c06"],["/page/2/index.html","2e90efe954422e587367cd860b9cc393"],["/page/3/index.html","988b2b84ba68a371ca9103cfef8f826c"],["/page/4/index.html","12a16488fc4e2c5ccf69b657e904c33e"],["/page/5/index.html","58cd4620eaf5f672882f140a457a1cbb"],["/photo/index.html","e79bfe2b9e49cd0d9fbd65d30aefd18b"],["/posts/2173e2a4/index.html","7ecb755edc5ebc510e00688dc1ca15ca"],["/posts/2ab40ef8/index.html","a1bdb77f1f9f393b8466d8cc04f14a27"],["/posts/30fa304c/index.html","e32622780d91c8c1591cf2920d00d437"],["/posts/3447541d/index.html","d123c575585892382cc7cd33d0ea3b5b"],["/posts/3447554d/index.html","a03a88f110e06ad06e8b4c067d39fa07"],["/posts/344e3c5b/index.html","ab2c7b80e79fadfe597726187452f8fa"],["/posts/3457ed69/index.html","173d5c986f762c609a44b56c790b2ae2"],["/posts/39cb083c/index.html","11aae2950627ed5c5eebb9cc456dd7bf"],["/posts/3ba53770/index.html","27ac78ddf062dc01f650f29d24aa594d"],["/posts/3bd3916a/index.html","00765b1abc6760317baaff93402daa90"],["/posts/3e4105ad/index.html","dc07cc3b1cd3c1672a092830cff2420d"],["/posts/42f034cf/index.html","3bc86cb9ab3380edd49d9a59f0307f4b"],["/posts/50a2b841/index.html","a0cf22e6b01381a1589c127c873b7033"],["/posts/54eecc7d/index.html","514738c6b14c6ab7931836d27211d29f"],["/posts/5a17eb30/index.html","3c16b8d07ae3ab593464ee90ed5c5ff4"],["/posts/66841aa6/index.html","46d370dd151d6ea9392603f1382e1cbe"],["/posts/689fc75c/index.html","5105e8bbc5f923301754809fe3e623fc"],["/posts/7de15477/index.html","f999377b4266cea2d2fa5dc5bb33b93c"],["/posts/8a00d2ea/index.html","b22a9f7b07147ea1c2a2b6f3eb5f3c68"],["/posts/8aa14a73/index.html","bda674eb74c0745b742b646b8e59ac86"],["/posts/96032b58/index.html","d6dfc1ce9e4dfc69397068f4f9dfcf2a"],["/posts/9656df9f/index.html","6c506a2ff838701dce3c97963cbf355b"],["/posts/99817e93/index.html","cfb78d8f6d947e2d4e5f6f41d990bb3c"],["/posts/a3886b70/index.html","7b68e6ffb5c848d1edfab168cfc28478"],["/posts/a42e3f6d/index.html","ea9a4c09dec7ce42d60c8157f6d6e42f"],["/posts/a9438874/index.html","0595f059bed29c65a8dfcad072271586"],["/posts/adb093cd/index.html","efdd27e945c98c6d4d86e7e2ae6ef52e"],["/posts/b4b3bf4e/index.html","8311e0d6f331004b04c65ed6a446f367"],["/posts/b8685e49/index.html","fe9addf23e0b9b3bcc0420154ab1b87e"],["/posts/baaef441/index.html","6ef77114bda7cbf840b4e7992bc580e2"],["/posts/bbd06fa5/index.html","ce59d3f6e24b34e4981af9645820906c"],["/posts/be476180/index.html","62ee8b46173de3cf028904bb80d11ee0"],["/posts/c4b6dbb9/index.html","c9e2196c7b71264ad4bf697a2f3c18de"],["/posts/c98d9940/index.html","4fbf73285f7dd08181e9f4b7de0d163b"],["/posts/d2331223/index.html","1579ce41afdcc151c2115c0457883063"],["/posts/d5268b29/index.html","89749d1b1eba39eb4845a7c3260fb247"],["/posts/d7719dab/index.html","a5f2d9cefa319ca9721d5292715e3ba2"],["/posts/de4de369/index.html","d5a860c1e8b4621d9cd45ddc55596b32"],["/posts/ea42950b/index.html","a36db74e048c8b5cfad9233eb3ea6fb8"],["/posts/f3908263/index.html","fccf3a097481d0ec8d5bf68486a4f6db"],["/posts/f6c5d65f/index.html","98c7eb2082d54ab92c2fca1a32e5f901"],["/posts/f84657b8/index.html","672abf7e5aa8ba74dde667cfc7080103"],["/posts/undefined/index.html","7821044c7acca02c0c090a8d8399e03f"],["/shuoshuo/index.html","202b8931a41c114194930b8db6ce779b"],["/sw-register.js","3d613c928cd081f835c529a514208911"],["/tags/API/index.html","cfbd6752b0cd15a30e3e218d5f05b546"],["/tags/Appium/index.html","9c9ecf2f9052359f1d268b71d0bef4c3"],["/tags/Charles/index.html","86977d85fe4808c525d3d51e32278a7d"],["/tags/FLAG/index.html","b2508707268c3312e6d8b5d53ddbfbfa"],["/tags/Hexo/index.html","42bd9dc33256fe95d2a1deeeb72e1d48"],["/tags/MQ/index.html","2e12ea8f1659533645f6fddad003558b"],["/tags/MySQL/index.html","76782e94e47b7b0c7f66662a14fd05b6"],["/tags/Python自动化/index.html","b99548cbb779d97d46fd2a35efbf6119"],["/tags/Shell脚本/index.html","7bdccd91f67ba2547245e5217f6c3683"],["/tags/index.html","a87cd9690dc41e3b8d48f2b52a530361"],["/tags/postman/index.html","fd59e3f7fdfdb769fe6b8d3caa395c57"],["/tags/postman/page/2/index.html","a30c02d3354ecd3ace24a837465021d2"],["/tags/博客/index.html","92539ee2488153994fc1c95f214eb242"],["/tags/自动化测试/index.html","d78303a219b0fb293300b765adcabee0"],["/video/index.html","5d5bf21b6e44cbeb42a0cb6188773a72"],["/风景/index.html","26a33e6252b4cfbf7669da4b14e9c57a"]];
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
