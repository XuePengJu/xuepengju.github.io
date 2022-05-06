/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","51057cfb490f0c0036883b7087942a69"],["/archives/2020/08/index.html","8d305dd71e4c7ad0cf60c27ecb244404"],["/archives/2020/index.html","75c2f1299d6fb5d23a2d8cdb44d5e082"],["/archives/2021/02/index.html","9d969a5fb520e43be4ac37eeadf239e9"],["/archives/2021/03/index.html","393e0b7c4d815567e282688629c019eb"],["/archives/2021/05/index.html","ae0de0fc575845c22f499c8c465a9681"],["/archives/2021/11/index.html","f22ae05f0d93a1fc816c487491a7bd8a"],["/archives/2021/12/index.html","f9228f98aa301dbd8352c6cca0dd4667"],["/archives/2021/12/page/2/index.html","848f1e3b343396b9327cdcacdaa6e718"],["/archives/2021/index.html","e96fdff6b36545bb3fbfb37f468fa9f9"],["/archives/2021/page/2/index.html","72485b035cf6987bd18a740ce598987e"],["/archives/2021/page/3/index.html","603e2f0d64570cd560eed6d893e1a7e7"],["/archives/2022/01/index.html","de216719d339c3023cb6d620761f1b41"],["/archives/2022/01/page/2/index.html","a6f17e8c48f83eab742e9532db451f28"],["/archives/2022/02/index.html","382bd85ebdca471d86fc5723b23a197c"],["/archives/2022/02/page/2/index.html","70b1905a96c7dcd40f0e8da01143f092"],["/archives/2022/05/index.html","409d14daeb237237325b2483483b29e5"],["/archives/2022/index.html","e7c33f63c20902f315526264422bd7d3"],["/archives/2022/page/2/index.html","a34cc859fcf3d7c7977bafd7ffe1c73c"],["/archives/2022/page/3/index.html","504c4217ba30cededba114fe5f459570"],["/archives/index.html","9e4a32e6074b75cffe639fcc2918491a"],["/archives/page/2/index.html","c3827d73becb062783a382e0b16f3329"],["/archives/page/3/index.html","317aab0a42e288a7b8f2e646f58c716b"],["/archives/page/4/index.html","f95ab0442383267d0440fa911c2b36d9"],["/archives/page/5/index.html","1db01c19e264458eb1c21312a9cd16f1"],["/archives/page/6/index.html","668850e2bdcd44b2c17b8eeccc42d657"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","92ea3ae465a89f448f403d9a1cfbffe6"],["/categories/Charles/index.html","5e62b4b36e2567f49134739c61754143"],["/categories/Hexo/index.html","4f499845adaaf1ecbda99feb7eba16f1"],["/categories/MySQL/index.html","17ee3c10c8fc63e67b8aa2a0e5511dd2"],["/categories/Python接口自动化测试/index.html","cc84aba7921620b3297db2979caaeea4"],["/categories/Python自动化/index.html","8a64f689c94ef93635fc8d42e127ca94"],["/categories/Shell脚本/index.html","3e1d37766dc3f3113e45cc3afb4c28b4"],["/categories/index.html","2aa7a74ec560701f845854a4a8497191"],["/categories/postman/index.html","998535e8c1ed073b2f6f3153aa0e00d6"],["/categories/postman/page/2/index.html","3ebec7f286beabcc35b9f5222e2b3b84"],["/categories/postman/page/3/index.html","63b2fc39b8f2dc91f011c7b0576b6951"],["/categories/技术积累/index.html","b612ab74f1a078c58bf76a93fecc5e06"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","641f0b3c9ed662e2a99e687e805f7f89"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","511bc325ebfe98bd30f7213b8986cf22"],["/page/3/index.html","c02bd18a69b2e910a475039c4424eccc"],["/page/4/index.html","73d6d22646b6729dbf4426a96a85c473"],["/page/5/index.html","97ddef5d43d14223eb254fecfc984be6"],["/page/6/index.html","8cd9cb5eff250494e3bf32b51ada46d4"],["/posts/2173e2a4/index.html","3bf215b1cd84aac1bc1785ba65464267"],["/posts/22131793/index.html","28917bfb645404aebd99c673bb1c09f2"],["/posts/2ab40ef8/index.html","7cb6e1e02485418914f4d6363243ce27"],["/posts/30fa304c/index.html","9daa610624774eb45f32a542252e90bc"],["/posts/3447541d/index.html","51918b1cd75a4355ecab860d14f95ae7"],["/posts/3447554d/index.html","d00c71d91222dfe0f17e5eca3104ea8c"],["/posts/344e3c5b/index.html","027027482bd4cdbae5f369f641c5eab5"],["/posts/3457ed69/index.html","df6cef84f19de670eb3fcc67ee151cb5"],["/posts/39cb083c/index.html","ca24d60f6c9fca83f8c3fb980254214f"],["/posts/3ba53770/index.html","ade52500b699a32133ea0723e732d36b"],["/posts/3bd3916a/index.html","7ef024f0957bc493aa4cbe381a77a5aa"],["/posts/3e4105ad/index.html","93b8541a734ee9d09c4ddbc299500352"],["/posts/42f034cf/index.html","54dcc5e4c9199e763688d6076fc8305b"],["/posts/43b8c324/index.html","f1c1a796e541a67b26bd446764db83b3"],["/posts/54eecc7d/index.html","3f5b3e4fe46adbb3ff058b9aac0f696c"],["/posts/6172e27e/index.html","4a080ae894f68a0362698803772fc799"],["/posts/6556c33b/index.html","8dfb155d209e5706e454aeb56551c5f1"],["/posts/66841aa6/index.html","9f06675c4c5ddd9f7a448bc2b01aa32a"],["/posts/689fc75c/index.html","f8df7f907a77d5782979dec68af0a083"],["/posts/69423a58/index.html","45b384dc1a2863cc624d56dc530e4795"],["/posts/69ae7450/index.html","1ca8f5cb325d87517962c7c60bd9b95f"],["/posts/7de15477/index.html","8955c9af4baf67375463871094b3c877"],["/posts/8a00d2ea/index.html","e6a069517bf522a0c1a84f5ca863a13c"],["/posts/8aa14a73/index.html","33345fc0cb84fa9fbf3dcfa5fb965258"],["/posts/96032b58/index.html","b9879bfc930ad674f433cd343a24ff73"],["/posts/9656df9f/index.html","06a25adc75c0394b5761d0d837573046"],["/posts/99817e93/index.html","ce9348ee9a78ec6771d312661532a71c"],["/posts/9d1414ba/index.html","407da9d4fd5fc6037aac2d5d8b9ea6a7"],["/posts/a3886b70/index.html","8c2d218f325af58085ea48ab07c6d8e8"],["/posts/a42e3f6d/index.html","3065eb6752aa19c896872814b8502904"],["/posts/a9438874/index.html","449719534491d32e7e9805d9db7ca251"],["/posts/ab3b7c7/index.html","101c1ec687d07353c39a3d6ea8d3890d"],["/posts/adb093cd/index.html","ce743bb48491ac7a8ae46d3787489970"],["/posts/b4b3bf4e/index.html","2a78712d2eff1f081d2f9321981c120c"],["/posts/b8685e49/index.html","35efc0ca74a47e8d058249120e3b5001"],["/posts/baaef441/index.html","59789b2441957b3a26f45f8ecdd89db5"],["/posts/bbd06fa5/index.html","77f09d7b16cdfb4944c5421c4de21cfe"],["/posts/be476180/index.html","9e445c60bd24418f21c91647906d646b"],["/posts/c4b6dbb9/index.html","bfe48de5c26cffda484898392b5c71b8"],["/posts/c98d9940/index.html","83fe01301c462219cf4ec7c99a02a00f"],["/posts/d2331223/index.html","16692b20ea1c70f19fd7b8923c21cc52"],["/posts/d5268b29/index.html","01bddad3a0a35c7e5e5c3d4c6e144aef"],["/posts/d7719dab/index.html","2a46c32a0ed557b749bf0640b602290c"],["/posts/dcc42dc3/index.html","f4a68a15e2e948ab6be5ed736714ab88"],["/posts/de4de369/index.html","74df87808d24c3279aab1ac6b4bacb1e"],["/posts/ea42950b/index.html","e2ef9cc050a1036283efc716036333d7"],["/posts/f3908263/index.html","a54e886cd227b1ad570d8008a2249a10"],["/posts/f46b70d8/index.html","89d8af28195d2ced19a710256459ca78"],["/posts/f5e730b6/index.html","c21b9651a688c938a4d27696209218fe"],["/posts/f6c5d65f/index.html","082aee7850fa8629691325d710e5612b"],["/posts/undefined/index.html","4a49a812b1e6fa2b99c04489212650ad"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","ff942c86ac40d8d8c100f0bebe7680eb"],["/tags/API/index.html","165a23a3d867ac1cab267acb37d6b0b8"],["/tags/Appium/index.html","e393b7747e556313bb184738f162ab82"],["/tags/Charles/index.html","5d968592bd6ec9d4d9682cfa773bac14"],["/tags/Hexo/index.html","1d6d443800c772986e354e12ebd26250"],["/tags/MQ/index.html","ad072746ec0f072b7e7d3441c1eabef0"],["/tags/MySQL/index.html","7f56893de5cf64bcee5ce0c93e43a3ac"],["/tags/Python接口自动化测试/index.html","e0574e435716bd1fb38023774c6e685b"],["/tags/Python自动化/index.html","7e335b16fd272f14bd52c2433817e779"],["/tags/Shell脚本/index.html","ccebb78542c80c51b01dc58a8c77c0b1"],["/tags/index.html","fdaa5f7624a2522a0a6a5f76c2520e9c"],["/tags/postman/index.html","abb2ae739401470fe7f7a435a3854b2c"],["/tags/postman/page/2/index.html","7aa08aed26c44cd9b20a0cb0ae0c42b2"],["/tags/postman/page/3/index.html","7735e0ac6c28d5e80d04922c97c37ccc"],["/tags/博客/index.html","f009672509e8977ef666c2fac0a7debc"],["/tags/自动化测试/index.html","62f469bef6058fe4a66d8b12d89a8566"]];
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
