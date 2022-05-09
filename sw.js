/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","1a59226cd876f44ccb0efedd45b878ca"],["/archives/2020/08/index.html","848d154c2450e4a361df018393ddbd99"],["/archives/2020/index.html","c037e887a5a22eb5387b5499ff13926f"],["/archives/2021/02/index.html","021788feed469a0541fe5a3c95b2642a"],["/archives/2021/03/index.html","04df236f450f72155fef20eb4d049c94"],["/archives/2021/05/index.html","8a5fe872d5ebfeabce84098bac24eb9e"],["/archives/2021/11/index.html","c9fc3268d901a843e953a7afec8154b0"],["/archives/2021/12/index.html","6797b27f6514be4dca16bed9fce493b1"],["/archives/2021/12/page/2/index.html","0f1f540c49d9dba15e76a20aaaea0b13"],["/archives/2021/index.html","eba963633e798290ab0c470ea36a5bfd"],["/archives/2021/page/2/index.html","b4d62694fde937caba01937b6403452c"],["/archives/2021/page/3/index.html","beed5c60da3e7fd13441c318a325c11b"],["/archives/2022/01/index.html","599407ac1cd1e291f5f87e78ff864d7e"],["/archives/2022/01/page/2/index.html","92ef05ff2d864caaceb18a96f4e42399"],["/archives/2022/02/index.html","1e1133bd9d64497df0487ea1539b6496"],["/archives/2022/02/page/2/index.html","e7d26789f9ae7f977e626bbfabc60071"],["/archives/2022/05/index.html","25bc12ccb183d4bb3f397c6a48f899e5"],["/archives/2022/index.html","74bc873bb7f420aec1dc3fac3937499a"],["/archives/2022/page/2/index.html","676764e863f5702207bef75fb5a41d4d"],["/archives/2022/page/3/index.html","773c2991f3717182f9afe0bb8d25795d"],["/archives/index.html","088a125b0165b6a40446af223abbb201"],["/archives/page/2/index.html","c3d15cbe1b9d03e1d842c2255ef4d162"],["/archives/page/3/index.html","a7733520f02289725e63d0dedd1429e3"],["/archives/page/4/index.html","18a11ba169e9f55fd9f467925b929fb2"],["/archives/page/5/index.html","a8354eb372eed9e111b26ce6743dc87b"],["/archives/page/6/index.html","af01c3ea76f870d74d50ca6fc920ba36"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","c63cfae00033106dd375ec245bf44207"],["/categories/Charles/index.html","cf22101d64238959a4e0f6f5bb589e82"],["/categories/Hexo/index.html","c92deb7379fc4e4a8db626bdc29e81d2"],["/categories/MySQL/index.html","9ea99e9a06cda4bad3ab97643c96bb67"],["/categories/Python接口自动化测试/index.html","ae4b91513af5859d58d2d258b3e8328f"],["/categories/Python自动化/index.html","b5374eeb077ce59f392cf158e01d75e6"],["/categories/Shell脚本/index.html","9722662970a4090ca437c61a58e4b25d"],["/categories/index.html","fea0d46da464fa363d16dde4644175a1"],["/categories/postman/index.html","f208787994bf3e753a5bc4977899d06f"],["/categories/postman/page/2/index.html","240c9c14e1ed6786e3dea4d69add53ad"],["/categories/postman/page/3/index.html","e8751184aac89237ca6e0052077f260b"],["/categories/技术积累/index.html","6feb93f69599942bcfb071a477fd289f"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/NFC/OpenWrt_Wifi.jpg","9d035bf94dd2fa32db6e0bff2e0fe2b5"],["/img/NFC/WeChat.jpg","f539b664e33e7fdb78efb1129a9d137e"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","c678a6a378e91ed1710238cce99b2214"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","ff58ac0dde35b6ab822b380e67c4eb52"],["/page/3/index.html","9ec54fc960b4d4e1817994a26afa3dce"],["/page/4/index.html","a7a1b5b2102fa740896c2376f3611d8d"],["/page/5/index.html","ab589ff401dc2ebcc30aaa2ba5cff435"],["/page/6/index.html","b65b173026e9d808d650033c17b529b3"],["/posts/2173e2a4/index.html","76a25186b553dca71a90216fa55a2869"],["/posts/22131793/index.html","201f54c59876a78295a74690e83f6463"],["/posts/2ab40ef8/index.html","83a7d7be7bc33b3ae4c8b9c67ff43011"],["/posts/30fa304c/index.html","18aad323974766408fddd377ba36e13b"],["/posts/3447541d/index.html","03a3d2d10ba66eb8e295e51cbfd98c78"],["/posts/3447554d/index.html","0bcfef03c61f9c979fd46648a5f484fa"],["/posts/344e3c5b/index.html","0b1daccf5a32713d18960e2d2e17994d"],["/posts/3457ed69/index.html","a4b9301e6268d698c19b1635bbbef6fe"],["/posts/39cb083c/index.html","6f857774ee3e913c99f2bfd3d85db3d8"],["/posts/3ba53770/index.html","a5cda25bf7ca30beae20f09a151ef5af"],["/posts/3bd3916a/index.html","c6d1dd938902be54f9360ac5bf47ebb1"],["/posts/3e4105ad/index.html","32822e30351888baaad2b878b3efe456"],["/posts/42f034cf/index.html","ba70b93f98d7b7b9f6f0f26378b8dcb4"],["/posts/43b8c324/index.html","7b3fb6c1896e7b0471ca4f1c4f3d4e04"],["/posts/54eecc7d/index.html","14f324d38083e5d5a6f565d72f044360"],["/posts/6172e27e/index.html","2256cdb7467e24eb2695bb3b8097ac05"],["/posts/6556c33b/index.html","804a1f70f99a08d90e7ec8473fd73e83"],["/posts/66841aa6/index.html","d847e07eff4cec434ab671e91a3480ed"],["/posts/689fc75c/index.html","742f29d8cdd5fb71ac8ea09dd65ea8b0"],["/posts/69423a58/index.html","dd425cee9a2c1943bb14755569f7448c"],["/posts/69ae7450/index.html","49e4468bc5e709c6d6ae1808d3deec42"],["/posts/7de15477/index.html","ba642032444c767e6baee6b0302d5d69"],["/posts/8a00d2ea/index.html","e1d4617baaa8b24644f8ed2a410544fb"],["/posts/8aa14a73/index.html","fdbbad6d087407448c573545a9e8f07d"],["/posts/96032b58/index.html","190f9f17c516315dfe991139434198ec"],["/posts/9656df9f/index.html","f42e9006d4f951d8f9ac90143cd3d715"],["/posts/99817e93/index.html","cdac475d87a4270b2cf260038d95013a"],["/posts/9d1414ba/index.html","ec8ece788c5947b9ee6156ddcd301925"],["/posts/a3886b70/index.html","2d5dc396c568c53ef52dd5db3840dae4"],["/posts/a42e3f6d/index.html","8cc8fa47aa951becc6eff8c7e2be9366"],["/posts/a9438874/index.html","6ac0cee47e2c80b1eb364a401290c788"],["/posts/ab3b7c7/index.html","58e7a9c45ed3ae3dcb1636975000c6f6"],["/posts/adb093cd/index.html","c8e3d9011e23481b87a3128171dfc377"],["/posts/b4b3bf4e/index.html","692daf407cedb400e2714a7e564e3d52"],["/posts/b8685e49/index.html","b69b6c5c6da6b61f563cb9e464be425c"],["/posts/baaef441/index.html","4c047cd9568dfabf79384362c4e6b91f"],["/posts/bbd06fa5/index.html","4a883cb3f7986baaeb066554b0b5a95c"],["/posts/be476180/index.html","819f777a0acf75658fef5db9300f47c7"],["/posts/c4b6dbb9/index.html","eb4f0ea0d58b8bb71cbd6316af5dfdd6"],["/posts/c98d9940/index.html","e7f369ceca2af19bfa685fe8725ffbbd"],["/posts/d2331223/index.html","de5c17be84de2570c5f856d5a6193f50"],["/posts/d5268b29/index.html","2b016d0081d4fa1c6fa741bb813e8d85"],["/posts/d7719dab/index.html","08ed7b3518f359046e2b801afc619ce0"],["/posts/dcc42dc3/index.html","dbb4e9b2c0bedfea076b49229f8e6ea3"],["/posts/de4de369/index.html","f63bb5c25c414eb70661c83c58ef66d4"],["/posts/ea42950b/index.html","17d25bbb149ffcf6408e32c58b4eccf2"],["/posts/f3908263/index.html","05ce53388d929f4955007884f504207a"],["/posts/f46b70d8/index.html","8a099a51926118ce5c3c973caa1058c1"],["/posts/f5e730b6/index.html","1ee3972bfd7750df85a40c063f7f8a31"],["/posts/f6c5d65f/index.html","7201eca8b2f3892a42a2af510d66a777"],["/posts/undefined/index.html","92d22b7c6638e572cfc2647f602e30c5"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","d56bc61372bf5785faade980f3a61051"],["/tags/API/index.html","529a98660b30dd39ee103674f29230b7"],["/tags/Appium/index.html","d7a22c61ed7646a7b6e88909b43bc456"],["/tags/Charles/index.html","460eee9b7236e514938f6fbcbb3ffd71"],["/tags/Hexo/index.html","059addbdc4c94074e98a4f0858c6807d"],["/tags/MQ/index.html","177d2e167ee19b88638c8dc73d7fd91d"],["/tags/MySQL/index.html","7d5f42ac99e584a6bf6afb9dc533c85c"],["/tags/Python接口自动化测试/index.html","55ffa1d815687e89c7cdd6e46cecdfd7"],["/tags/Python自动化/index.html","ebdd903f130a143b4072e19a8e365c78"],["/tags/Shell脚本/index.html","844d7dd95170645a1d810e327d70f3be"],["/tags/index.html","1b51180f92240c78fb3b96263410ba2f"],["/tags/postman/index.html","fa57aa2ecc0f1d811bbff8686392d1d1"],["/tags/postman/page/2/index.html","de58feaad92503993159bbd1f5b4dc0c"],["/tags/postman/page/3/index.html","a8924fc04a735954b1f1a34737acda52"],["/tags/博客/index.html","04633fabee0d42631a905ad870a66fc6"],["/tags/自动化测试/index.html","082508cbcdc17a78744784116121fc94"]];
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
