/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","dcfd821929ffc9f46fb82a6f6cb30a88"],["/archives/2020/08/index.html","c2ddb80b1e647c5349cc57857a52a831"],["/archives/2020/index.html","7a422dfa080ce7b9ae816969dbcc51f7"],["/archives/2021/02/index.html","eda9f56935485b85567343181de739fa"],["/archives/2021/03/index.html","50a1063b4557886fe25e63977bbf0799"],["/archives/2021/05/index.html","90c9c29826dac312e1707063ba54a1a7"],["/archives/2021/11/index.html","76894e736433ff71e815fbe8aa243c24"],["/archives/2021/12/index.html","5eb8304e4653c1681feff6d6e69cbe9f"],["/archives/2021/12/page/2/index.html","845dcf0a8215af18edf9a1188419f775"],["/archives/2021/index.html","5503913ee165f2723714f10afefca76e"],["/archives/2021/page/2/index.html","c8f2f633bdef844814e0d223673b5b81"],["/archives/2021/page/3/index.html","e85458f56e283a015156a144bcafc89e"],["/archives/2022/01/index.html","d49069af5bef7c5b3dd05f27e014431f"],["/archives/2022/01/page/2/index.html","e793f82e100b5b43912d7267a1a8cb81"],["/archives/2022/02/index.html","c3ee7703340d33891f088e30b0896fb9"],["/archives/2022/02/page/2/index.html","b8f2a8dd5a0027f4c0e6c9927b67ac93"],["/archives/2022/05/index.html","7b90fe5e70fc4404198161198715a51e"],["/archives/2022/index.html","2a08845e50ad4ea93f870d6ea54a1706"],["/archives/2022/page/2/index.html","bb77b202570259ff028acaf94ec4b2ca"],["/archives/2022/page/3/index.html","6a5d268f4bcf249a43349977647efba4"],["/archives/index.html","8f14bf2a372560d56c81c0f4c09f1efd"],["/archives/page/2/index.html","13a1c28859630598b5dabe118d970edf"],["/archives/page/3/index.html","e43f26482ec8778623cf83b4b19c2659"],["/archives/page/4/index.html","83517122593c66f700e588c3cf1f3073"],["/archives/page/5/index.html","7086bd060d43d5f8f4b3e76b05fade0a"],["/archives/page/6/index.html","71fbdeb8042d1d1c3ebdd0e63e0ff34a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","03cf992054f653b2163b69707c00045c"],["/categories/Charles/index.html","f4f408f66c0265991afa018d939ad253"],["/categories/Hexo/index.html","66d713edf484194be32ec7bd050bab5a"],["/categories/MySQL/index.html","97a6042956b31376e5bb16d26c9a7d40"],["/categories/Python接口自动化测试/index.html","abf19efd975d27872f1f1d75c11b408c"],["/categories/Python自动化/index.html","c86593a44e459f85d7c3f275faab77e5"],["/categories/Shell脚本/index.html","8dd65c8a1221e09933cf59415f338dbb"],["/categories/index.html","4b7d22f68ba312c35148f78325ad3489"],["/categories/postman/index.html","45eff2774c5a64d9387397e698a9ffa2"],["/categories/postman/page/2/index.html","ecf10747c4add54a1a468bb1e2d58c0c"],["/categories/postman/page/3/index.html","f08993a8d9b0e19a977a155a1ea82209"],["/categories/技术积累/index.html","d91fc61c1c98ee11fb67956f428676ed"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","80256aebb4b632b719dbf1484f8d5f50"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","43fc34a5428d20d65eabcc84bb887f33"],["/page/3/index.html","0381d23d1b76c2ae57448627d0bc6aa0"],["/page/4/index.html","e8216aefd3cb84191ddb64cd42306560"],["/page/5/index.html","5150c6fd75be2f61b95b4204f094a01d"],["/page/6/index.html","35132424c863043afe21787d5decad10"],["/posts/2173e2a4/index.html","a9ac17d2a404c0941edfb317ddee47ca"],["/posts/22131793/index.html","97fab7c0f206c69b28f83ff5c407344a"],["/posts/2ab40ef8/index.html","88530881a08bfec0847c76088495f56b"],["/posts/30fa304c/index.html","e56498a2cee220632d20dcf1a506c921"],["/posts/3447541d/index.html","540afc1cde008ed7af77e7f89138484a"],["/posts/3447554d/index.html","e515d4fc8a6c6d83e83232a73eaa579a"],["/posts/344e3c5b/index.html","924a3ca69669ec8d12038d5978af619b"],["/posts/3457ed69/index.html","1127cbc526fdeaf2e3738c30a350fbea"],["/posts/39cb083c/index.html","84cf5df2c0a93ff1067279ea38c99faf"],["/posts/3ba53770/index.html","9103d0623fbb80bcd6bb81e283499436"],["/posts/3bd3916a/index.html","de836bd6ed969389eaef3ad78c54df6b"],["/posts/3e4105ad/index.html","5a4b794383ac8df5bf90292fb4d297b7"],["/posts/42f034cf/index.html","b668dfc0c82657742b238f98db34dafb"],["/posts/43b8c324/index.html","749a78645c7e9b5c546002b1873bc2b1"],["/posts/54eecc7d/index.html","80faab134e815f4935840d8899b715f8"],["/posts/6172e27e/index.html","1737b31b458b7f55a78f5b630c42963d"],["/posts/6556c33b/index.html","31f8a793b75498d77ec9c1d88ebdd9c1"],["/posts/66841aa6/index.html","a12b4366ec4cbf5f63656b4a57f63e87"],["/posts/689fc75c/index.html","ee09e531be841ade1cda0d9a646645fb"],["/posts/69423a58/index.html","d5a5f3b0d48d67de1dba09bdb9d612bb"],["/posts/69ae7450/index.html","5427938ddffe2253b3755acbf331e30f"],["/posts/7de15477/index.html","ed125612303dda2068730197c8ff473a"],["/posts/8a00d2ea/index.html","ba1168dcfff1d207dae12d0dd697f853"],["/posts/8aa14a73/index.html","070d57795a285e1504a7b1c5c6e22b37"],["/posts/96032b58/index.html","e008de46728f5e0dd42e2b0117661d59"],["/posts/9656df9f/index.html","120e8a21b9e1f4810f5993c323a50adb"],["/posts/99817e93/index.html","4c9fe01e6ed2efced1f77afd8b764cfc"],["/posts/9d1414ba/index.html","1b36f214595126e591baef92f6662f57"],["/posts/a3886b70/index.html","0d7bce59348bef74bfd6b22f40f7c18f"],["/posts/a42e3f6d/index.html","d2b6c59bcc28d20562716f13fbbe7d16"],["/posts/a9438874/index.html","da453dbf63bc9156a0a2276a49ec68ff"],["/posts/ab3b7c7/index.html","0b64c7a541fb09f72e46eaa53c80da22"],["/posts/adb093cd/index.html","d45d774e9ffca133fd499c401e1705a4"],["/posts/b4b3bf4e/index.html","2905d204d1fd15b40f98f6bad5721078"],["/posts/b8685e49/index.html","f8cbe399f0066a2756f4b24df4105ce7"],["/posts/baaef441/index.html","b74fa107f2026844c51349d8c991cc2c"],["/posts/bbd06fa5/index.html","7d62a5a4eeedc3eafc2a96d9c8e035ce"],["/posts/be476180/index.html","387f055ce6e87328ee959d04be5bd630"],["/posts/c4b6dbb9/index.html","3545fc5a067a7a7044d803a0c17ae5b0"],["/posts/c98d9940/index.html","20fb84334dd2d3498c4dd61bebbd3f65"],["/posts/d2331223/index.html","c9f30a1d7e627d9dc297884f37adac13"],["/posts/d5268b29/index.html","fd81d222b8172e4e803b25172c789d0e"],["/posts/d7719dab/index.html","1cdf170f7d12544ff24481e218abb6fd"],["/posts/dcc42dc3/index.html","2611a219377266d3c5671c841c68ce1f"],["/posts/de4de369/index.html","a13f1498b99f48f3ce142301b35e8ddb"],["/posts/ea42950b/index.html","a6eb464a8a2f75de5bee164eac023193"],["/posts/f3908263/index.html","ceac83e605f51f61137eb2778360bf5b"],["/posts/f46b70d8/index.html","a8a9e53dfd50a5904b0165ad15057d15"],["/posts/f5e730b6/index.html","b895d912787ac690b58070f849901eae"],["/posts/f6c5d65f/index.html","9c1fa200063a8be2d78329d451014f19"],["/posts/undefined/index.html","c7ce0f36a864f0ea13e3f0384ae86d4d"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","8a1d65d63b371dde3b72c2f2800e6a43"],["/tags/API/index.html","4f52c3706adc68e98fa27f442488a66d"],["/tags/Appium/index.html","98170046300c17fd7c8e7ba3253027bc"],["/tags/Charles/index.html","eaf733000206656e4804123ab7d8fcf5"],["/tags/Hexo/index.html","4691025de797f6b0dd197b6b9d192e33"],["/tags/MQ/index.html","a78178f2a1f2faf9aa7fc4f7385a9991"],["/tags/MySQL/index.html","11283a137a8a18249ada3b70ef4d1fa0"],["/tags/Python接口自动化测试/index.html","3d3cfc6c74295b02b13b025202f9e2d6"],["/tags/Python自动化/index.html","231a44b95debfc7be659ae4504096e22"],["/tags/Shell脚本/index.html","ff0ba5d8d76c5cf18cb04240e05a737c"],["/tags/index.html","8773fef29f5098c6bf778b62170b489b"],["/tags/postman/index.html","69310b97670c4abed520965a721f753e"],["/tags/postman/page/2/index.html","a9eabe4ae9e8a14d5bd896be0410f41a"],["/tags/postman/page/3/index.html","c5236138887dc755b09a8ddb7bc1abc0"],["/tags/博客/index.html","cfcbe35049f30ba5b86c7f2dc507cdb3"],["/tags/自动化测试/index.html","5ad9129b4c8b83b7213997f4d42222c4"]];
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
