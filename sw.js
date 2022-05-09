/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f6a112c7c4e397e3eca47a7a43688809"],["/archives/2020/08/index.html","761c80ce45ec77127fdbf43aecab4683"],["/archives/2020/index.html","06eedd041647945480ec376231a110fb"],["/archives/2021/02/index.html","de8104d56ce9d2297ab8ebef97e5e303"],["/archives/2021/03/index.html","7b6da13a0a75395bd0c123bb096bb104"],["/archives/2021/05/index.html","50785c6d6311d60ff5f83ce3a2e7c631"],["/archives/2021/11/index.html","2132f249831ca05b39f98bb23c93c200"],["/archives/2021/12/index.html","fafa66019d80096fff6f90b27048d244"],["/archives/2021/12/page/2/index.html","c1a9f53a137d2f1d284efecfd6b3acd2"],["/archives/2021/index.html","a4823823d2b0e3380fad9f896c07d346"],["/archives/2021/page/2/index.html","df67b87e78695c7fc5d2c84d16330427"],["/archives/2021/page/3/index.html","53b2fcf837f7986ad800b5deaa1961d0"],["/archives/2022/01/index.html","5786a97f42b3bc03a0436f1391692bcb"],["/archives/2022/01/page/2/index.html","33bef5b651d4ecef3407cb5a2db78e43"],["/archives/2022/02/index.html","5a3a0c98fceb8d5354a783c7f5c2df6c"],["/archives/2022/02/page/2/index.html","3df8e37be62aaba7ed7547914d40d3a4"],["/archives/2022/05/index.html","6b8b54430abeb7a8df4071ca30c35258"],["/archives/2022/index.html","793fd92517bbc7259a198275e68d9df6"],["/archives/2022/page/2/index.html","460bad536de7ba43e6b02076e3d9a1e8"],["/archives/2022/page/3/index.html","09b6b11a08a864249dd2eb4482fd9165"],["/archives/index.html","497f1b00e14bf2edaf1c591bc00088e4"],["/archives/page/2/index.html","3d7b03b9837e6df5e6d9e2bf06b637c0"],["/archives/page/3/index.html","ba7bb4120e71568d57618438de5c1edf"],["/archives/page/4/index.html","9331456518c8468a236e9da4958815ab"],["/archives/page/5/index.html","990e4fd7dd6a00dfb8c1dc242583b280"],["/archives/page/6/index.html","3d6ba57c7a3954f2d1d627f9fae83cba"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","7eda899559147554558d6e60ef4d63d4"],["/categories/Charles/index.html","5ba00ebeb695d0dadbbac5aba6c406bd"],["/categories/Hexo/index.html","45372f163e31331ecf6d312884d43336"],["/categories/MySQL/index.html","0525a9063ae2e770e533a37c7fe2417d"],["/categories/Python接口自动化测试/index.html","70b099b6dcb5f9a977738da2911b9dc2"],["/categories/Python自动化/index.html","8cda8d6310a68d265d5cdd9acc893f41"],["/categories/Shell脚本/index.html","dd58da82bb232fef1ae08de3d3e4477a"],["/categories/index.html","78bebd02d2b4e2759f4511f0a9b9c71d"],["/categories/postman/index.html","868c2419adee4ed69774a74b5636a108"],["/categories/postman/page/2/index.html","0999d8bfea164433e260c330a51d239c"],["/categories/postman/page/3/index.html","c694f27e0cecde98513e1e732e2fd653"],["/categories/技术积累/index.html","12494262b33a99b276f52b629d9b5427"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/NFC/OpenWrt_Wifi.jpg","7428edaab587807cdf99fdca59ca0795"],["/img/NFC/WeChat.jpg","f539b664e33e7fdb78efb1129a9d137e"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","e796f59fd92ff7d743bbe33c5738c843"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","ee4e1c61aeaeb21dc7b579fc6c43ccc2"],["/page/3/index.html","5ceb882141a66a3e1bfa452c7585fbc8"],["/page/4/index.html","089346d16284743627a1fd5661767f34"],["/page/5/index.html","974ae4e6401050cbac8bd135ed7f2fa3"],["/page/6/index.html","3d742c39dc1e75951ba5564216fd65e1"],["/posts/2173e2a4/index.html","6b248d866a8a8763a4c6cd14c6c5461d"],["/posts/22131793/index.html","e20dbe2e2056800ffd1f1bdb940ca7fc"],["/posts/2ab40ef8/index.html","70cd649e999c69587dc6bec9e02c3089"],["/posts/30fa304c/index.html","6b6b459d6152a53d171148b58f6c6c94"],["/posts/3447541d/index.html","c27a9e41ef7a0bedd8c40a0b79cb8b02"],["/posts/3447554d/index.html","d64cb74daf3447bf76a57db7558c333c"],["/posts/344e3c5b/index.html","0a4de2a40398d5419464139306357f96"],["/posts/3457ed69/index.html","5efe51e8ee0cf0b340c8f15a09998742"],["/posts/39cb083c/index.html","addc59e4dbba99385a0f965362202571"],["/posts/3ba53770/index.html","5f0c18801e4c6cde29920a0de7796327"],["/posts/3bd3916a/index.html","d2a7a8c8de8fb1193246dad47503d9f8"],["/posts/3e4105ad/index.html","23e2e000827eb47282660ab3def2e283"],["/posts/42f034cf/index.html","7f3992b119a9b68eb22c8a0bde2aabbf"],["/posts/43b8c324/index.html","cb3af546860ab2add9f6882924ee84f5"],["/posts/54eecc7d/index.html","512bcef800cfb3c97342d667de808685"],["/posts/6172e27e/index.html","8fe6aafab6a2fa01259cf9feaf085558"],["/posts/6556c33b/index.html","2354ed0f6bcd196a6c2620b3c5c357a7"],["/posts/66841aa6/index.html","24babcded20bfaf8c3ed7ce5b5799ed9"],["/posts/689fc75c/index.html","b393ae11a7136872ac9dbad86b1b6db9"],["/posts/69423a58/index.html","aec8a70d0cc9cc5d2805681a54512854"],["/posts/69ae7450/index.html","5236876d09ed0fd721c432afc685f3c8"],["/posts/7de15477/index.html","222cbac63383c5989a2141ef5a691b77"],["/posts/8a00d2ea/index.html","6f4bd58a3619ebe3b325aba7460c32f7"],["/posts/8aa14a73/index.html","bc9f0fccc6d8e8167278df76eb8d373c"],["/posts/96032b58/index.html","ea988e9f10512645f0ec74ae779db96f"],["/posts/9656df9f/index.html","b1d9e0af1986b4d42d026549ac3660cf"],["/posts/99817e93/index.html","73aed5ce0b4f9325a084c06f0451778e"],["/posts/9d1414ba/index.html","8ba88d739178bb670d3afdef46b85ec2"],["/posts/a3886b70/index.html","48f99e54b8b1bdd391e02f626d6820bd"],["/posts/a42e3f6d/index.html","940b3a59eb15d35e6e11c405a64249d5"],["/posts/a9438874/index.html","6afdf4922205fb0fb1c88bdad3edb413"],["/posts/ab3b7c7/index.html","60d620e378e652bd092dad286d64f284"],["/posts/adb093cd/index.html","cb10bc34e3eccca343ab2c12e0da7df4"],["/posts/b4b3bf4e/index.html","2c5454e0788de55e959a942723477ef9"],["/posts/b8685e49/index.html","178a9cd84424c83b3bb88c8e447838cf"],["/posts/baaef441/index.html","f28511d48d4b711d81bbcedb41dd7434"],["/posts/bbd06fa5/index.html","45dec76a7379c4e25957710efdc5621e"],["/posts/be476180/index.html","c06ac4ed0737508e98afdc3ca814a14b"],["/posts/c4b6dbb9/index.html","226900dc6a5256dfe8cba5112b69c33a"],["/posts/c98d9940/index.html","942054cfcc01eeda2278940a3bf6b1ca"],["/posts/d2331223/index.html","4febccb65e7ba876d4227b2e79b000d3"],["/posts/d5268b29/index.html","1a801e612cf823af83da11f19cdb0c4f"],["/posts/d7719dab/index.html","83b130049376b505c1c912bc6895aa89"],["/posts/dcc42dc3/index.html","3a85406f0f68b5aedb507c499920a2ea"],["/posts/de4de369/index.html","c7d86889ebf6c499bf7247540621d52c"],["/posts/ea42950b/index.html","9a2a616cad70e912d92fd44a35a0737b"],["/posts/f3908263/index.html","e2352191ddaddf49d1cf04101ace0548"],["/posts/f46b70d8/index.html","ee3167b339a22e794fd093403ba45944"],["/posts/f5e730b6/index.html","55f9f159623532a1200c57e210e3499c"],["/posts/f6c5d65f/index.html","18b8a3c248a6aea279f4d38e75e419d0"],["/posts/undefined/index.html","5c45589085334d474c987b24b8b40c80"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","fe640fec0bc639b4e941822980ddf3bf"],["/tags/API/index.html","474f4fc60963a63a9c336b458feb6ab0"],["/tags/Appium/index.html","f3899de72475e50cea04e6704a19ba6a"],["/tags/Charles/index.html","c72edba9d83f18cad2be88db2b82a8eb"],["/tags/Hexo/index.html","668dd637e32fc93a60ff55c35e494307"],["/tags/MQ/index.html","01011aebf842882546ff9ac8deb07a3e"],["/tags/MySQL/index.html","fbb458fb9d174f92c472d1811be9a7a2"],["/tags/Python接口自动化测试/index.html","5b8a4b1d9ca285ecf39563d0c03fba1b"],["/tags/Python自动化/index.html","fa1ba060d5218ede545ca1c7b52de7b1"],["/tags/Shell脚本/index.html","34d51602caa6b2659db691634c067bd6"],["/tags/index.html","e84f516e107169d78424673198f2d78a"],["/tags/postman/index.html","1bbd682c0a9da7c85094545253adebe7"],["/tags/postman/page/2/index.html","18fdb032f22be0347187e34a828d102f"],["/tags/postman/page/3/index.html","f7cf097b80a25966eaa75062bee0f5eb"],["/tags/博客/index.html","b69e2f7073e0a94da3e01e02d45a78c3"],["/tags/自动化测试/index.html","5ec6d16e594030901128c7abf23a9df6"]];
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
