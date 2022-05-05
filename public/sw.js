/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","b2cdcfb5ab0cb8b0edc8c4f5cbb22f47"],["/archives/2020/08/index.html","b6b8abedfb0cc047b4507e65d70f3374"],["/archives/2020/index.html","ae78ebd11c847bae5364aac9698cf8c5"],["/archives/2021/02/index.html","f9a20f5bf645abbd97fa5aef68691f2b"],["/archives/2021/03/index.html","d247f8f1353a8f1bb0aa4ac90d0fb27c"],["/archives/2021/05/index.html","57560a0181ba37652334753a8bcc7bd7"],["/archives/2021/11/index.html","9c685719502e9fce95f518c7a5a00984"],["/archives/2021/12/index.html","890252a857f9af0966ce50ee4612df64"],["/archives/2021/12/page/2/index.html","7220653e9344ff0022852ad0734a390a"],["/archives/2021/index.html","7cbbcff61cc6decfe88d2ed44a05d5d5"],["/archives/2021/page/2/index.html","6c70eac98d9f21d5191b3e101fa96e3f"],["/archives/2021/page/3/index.html","3ab65fc582f83675b3364f0df68d9189"],["/archives/2022/01/index.html","59b1d6740b623dbcaad5a69660a3bb47"],["/archives/2022/01/page/2/index.html","5185226e8c93a3699bcf1198d0faef06"],["/archives/2022/02/index.html","c564f81e632804d55d7948cd139e956e"],["/archives/2022/02/page/2/index.html","7f209bdcca2a332f6a1fda3fec8b1790"],["/archives/2022/05/index.html","73816ffd00546fc8be4ce87997062ce5"],["/archives/2022/index.html","487fd42ef8d23c911aa63c20eb2495d4"],["/archives/2022/page/2/index.html","e0629cfd16b58dfa99c3055d0219ef1a"],["/archives/2022/page/3/index.html","02f2d2e3f5fb414cd9cbf47443f029a7"],["/archives/index.html","62a8a11f39390bad1df6bc0c8d6c40e5"],["/archives/page/2/index.html","beaa21885587b6f85f74feba9fa64338"],["/archives/page/3/index.html","7ae3ff7450fba5c3d733065e63f6eaf1"],["/archives/page/4/index.html","8d004a3eb078b75b2811607d4cbb2804"],["/archives/page/5/index.html","e65a510947201d3181ee2009a3f15727"],["/archives/page/6/index.html","bb550c23cd07ad8c35367ec97fd61879"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","d790986d4867215ac48b0d151f14d6e2"],["/categories/Charles/index.html","1eeb7f4ec4d2e4174ff9dc39140ac83c"],["/categories/Hexo/index.html","1092d33155bc0c0e2a4864dc552d73fb"],["/categories/MySQL/index.html","e9ce94b53f0f04533b2c41d9d5fb4abd"],["/categories/Python接口自动化测试/index.html","bc11436c6eac7aad9897707c2e9e1b1b"],["/categories/Python自动化/index.html","e8d2460207446f07830cb45b46d3b495"],["/categories/Shell脚本/index.html","6de93e04a13f5bd50203f6fc35d421cc"],["/categories/index.html","c57667a111c98704e1811e376040ea89"],["/categories/postman/index.html","9a42c3b5ac43c534daa99dff35a470f3"],["/categories/postman/page/2/index.html","5c54cc809869659da5d50ee07764a149"],["/categories/postman/page/3/index.html","c845c796612ee64125c9d74a0e49448f"],["/categories/技术积累/index.html","c60f6b695aabd71e42d24ff2918d84d6"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","fdd2c7f545faa4b9002ec3ba235ff88b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","d66d98e63eaec4456564c673746df2e9"],["/page/3/index.html","73bf187fd14490e48a78037f3f33f544"],["/page/4/index.html","fd08373c7147b80ca341113fdd5345b6"],["/page/5/index.html","512139250ee74a22d297d9b7b5ebefe2"],["/page/6/index.html","f02607ed6c68f23015a244eddd94ba0b"],["/posts/2173e2a4/index.html","67b2b2550743c55f01ebb81d96433ba0"],["/posts/22131793/index.html","8171204bae30559de5fa79925b6ab795"],["/posts/2ab40ef8/index.html","2a74982c69452258b34c85145718edb6"],["/posts/30fa304c/index.html","e4d72af8a42d87b41a61b52b622ea481"],["/posts/3447541d/index.html","615909ad708f68521ecbc604e5a04261"],["/posts/3447554d/index.html","169738dc903873ea67e2450ce8d81ca6"],["/posts/344e3c5b/index.html","28d6dfea8bd11bcc9014cc430ff8ed0d"],["/posts/3457ed69/index.html","6ccc8fabdc6136c6008d875ccbb66cef"],["/posts/39cb083c/index.html","c417a61eba71f6d8c01b440959c1aff5"],["/posts/3ba53770/index.html","826d08fc2e421901cf1e72d15cb5fd03"],["/posts/3bd3916a/index.html","b01a83bb37ef8290fbc7559ecb3af95d"],["/posts/3e4105ad/index.html","5a5aac69f66b3f712fdae34bbb4fe7a6"],["/posts/42f034cf/index.html","7d6c45b0c1636eaec17b9ae7971af85e"],["/posts/43b8c324/index.html","7a55167c77cf14aa9f0d3ceeab75bcd3"],["/posts/54eecc7d/index.html","a67d822bff2b03b9f80b5be6d88e6e6d"],["/posts/6172e27e/index.html","ebc7c4d267e0558e85a59148afb31c2a"],["/posts/6556c33b/index.html","c7e85109c5381670d700993fad3ef2c4"],["/posts/66841aa6/index.html","ac2fa93a8b57bec4e034ebba5ba7ee92"],["/posts/689fc75c/index.html","98bd4363c83244d7be01e6dcff1e0a84"],["/posts/69423a58/index.html","4b0f61ab9896b2cc5a622cdcd00e25b0"],["/posts/69ae7450/index.html","3348e5e074f753501fb00ec9afdedc47"],["/posts/7de15477/index.html","745335498389c804599f14bc2897e7a1"],["/posts/8a00d2ea/index.html","a53956a5cc1d44610e92f40ec9078047"],["/posts/8aa14a73/index.html","c6146ce2bf03c6546c7b05c9a120b4a6"],["/posts/96032b58/index.html","032b939c6ec5900ef7932e85c0aa70db"],["/posts/9656df9f/index.html","5f94dba8929727692be124387ac5e1d4"],["/posts/99817e93/index.html","f435611d2f7ab46af4e5dd3c92ed48c1"],["/posts/9d1414ba/index.html","4d3c49610fbe5fb6b4aa579faa0c4f47"],["/posts/a3886b70/index.html","a0f4d812c702789f3ed0889952b65ad4"],["/posts/a42e3f6d/index.html","4bfcd4e2b2f5efd01474bf2655b8ed60"],["/posts/a9438874/index.html","baba8033ad15e51d5a57201d30e0af5d"],["/posts/ab3b7c7/index.html","fb00926ecbf859a72cab1e7a8a84cd5b"],["/posts/adb093cd/index.html","2d39b96ef0f71d52eef47bf22b9b50d6"],["/posts/b4b3bf4e/index.html","b8596eb5f82dc95f650092e127192230"],["/posts/b8685e49/index.html","08478e3367cf0cc1ff3966aa36378b1b"],["/posts/baaef441/index.html","37475ed964e97807cd43908ab55cbfe7"],["/posts/bbd06fa5/index.html","4d2a7e38283cd757cf4b239560400430"],["/posts/be476180/index.html","170e873c1d7e842a93f16921b44ad3f5"],["/posts/c4b6dbb9/index.html","0d109a724b1d50ede2297fd74de0c511"],["/posts/c98d9940/index.html","30579d39e614c944f48b842eedf18438"],["/posts/d2331223/index.html","a79b94aa8b4e2e43b7a0541885ec653b"],["/posts/d5268b29/index.html","ce6581b6560514c348b831fc626f2302"],["/posts/d7719dab/index.html","35c00dd20984478c1a53f74a4bf9daec"],["/posts/dcc42dc3/index.html","2cb92c964ab2d1c6a1478fdc9c362683"],["/posts/de4de369/index.html","3f6bd4487857dff8d6a9e4abefb44783"],["/posts/ea42950b/index.html","f4d99889071a62281850d6f92b322002"],["/posts/f3908263/index.html","4fd1cc86d12545f7e296f50ae8299f44"],["/posts/f46b70d8/index.html","7df28c83c1d1f5f038ffe91564a0e070"],["/posts/f5e730b6/index.html","b9b1a43ffc74efa16499dad359d87a77"],["/posts/f6c5d65f/index.html","1f332a55c53488dd3eda128caadc7696"],["/posts/undefined/index.html","b3c923e07fa2889ecb2aa46797dba3e5"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","e9758b67933b9b75c17c68cfb586df56"],["/tags/API/index.html","3b46f192f195927f86beb22a2508a5cc"],["/tags/Appium/index.html","d0091b509dcb5f1d927d9aa9d7279cc1"],["/tags/Charles/index.html","efd0d709dbc26b3f086635925b6405dd"],["/tags/Hexo/index.html","b1063675a0ae75b695a33aab61c7e12f"],["/tags/MQ/index.html","205986fffff0ccaf8893bc9356b5b7ea"],["/tags/MySQL/index.html","d0220d457a618b87874bcd553740ac3f"],["/tags/Python接口自动化测试/index.html","f2286672f129a5a5a3d49efdc47e3704"],["/tags/Python自动化/index.html","02113b5be5de7297dd3a4a24e574525d"],["/tags/Shell脚本/index.html","b9a2ddf847138277081944d78f6872be"],["/tags/index.html","902667fa35335d25842f3c9975d5f388"],["/tags/postman/index.html","0b4727c8cea293c8f61da9593dac4b97"],["/tags/postman/page/2/index.html","beb3181a8909dc99b9d322bd5737091d"],["/tags/postman/page/3/index.html","49885159c811d773058f84ccd9b66cb8"],["/tags/博客/index.html","2450a711582cf33baf93decb4197c9a1"],["/tags/自动化测试/index.html","66b2f5c2516754f8194e26de92bf5674"]];
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
