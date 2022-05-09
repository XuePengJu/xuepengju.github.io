/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","70b057f4bb54b77eec19c8b141831323"],["/archives/2020/08/index.html","b70d80c65afa035bee8bdf0094d9d6ff"],["/archives/2020/index.html","55b39b22474f2189ef69083545a6d159"],["/archives/2021/02/index.html","be450d2dfca759d8e8c17813d1c48b55"],["/archives/2021/03/index.html","81b4faeaebc61a48a2be135dc443df33"],["/archives/2021/05/index.html","d4bd5fda4a818f416eeefb2ac07693e5"],["/archives/2021/11/index.html","305ff942b50262185286447bc05317c5"],["/archives/2021/12/index.html","b0ef7479d7b73dc96b91669b93f658a7"],["/archives/2021/12/page/2/index.html","d3d0f59ec508602d6a62566585e09081"],["/archives/2021/index.html","f5320b686adc889fdde56ba6d7fef785"],["/archives/2021/page/2/index.html","fd197409dd595ddfcb52b3dec273e6f6"],["/archives/2021/page/3/index.html","a28299ba800668059cc56b16797cb019"],["/archives/2022/01/index.html","39ac2d5360e121396d962311f8b24a0e"],["/archives/2022/01/page/2/index.html","04306471ef6bd5fcc266557a76d83e73"],["/archives/2022/02/index.html","f03c0f2080f5ec59e4e4e18b7c0b8967"],["/archives/2022/02/page/2/index.html","b774fde3e80ab0d6ef5ef7f2c542116e"],["/archives/2022/05/index.html","d96e61fac3ce47ebd4fc5cea5ed7206d"],["/archives/2022/index.html","8398a1faadd0eb3e749c09157e9516f2"],["/archives/2022/page/2/index.html","c917f954622a06e8b5e5ca2544919da5"],["/archives/2022/page/3/index.html","123f04327a009b2ee26af5054d2462a0"],["/archives/index.html","335992dc2d77218c946b6b9039b668a8"],["/archives/page/2/index.html","a463105fd66f89672ddbda90babe202c"],["/archives/page/3/index.html","d51e44d4d9221b8e4048f6bd66deedf1"],["/archives/page/4/index.html","f9654039d73a8c37896a3f74c58b37c3"],["/archives/page/5/index.html","1901fa4032270ddf6a764552d4fc43e7"],["/archives/page/6/index.html","e79dae4973d98eebc7bf12165b4d80e1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","79dead1bb8c6a24af3de16fb04898c5d"],["/categories/Charles/index.html","3e5a0dab9b8bbaad31f85faed649c34c"],["/categories/Hexo/index.html","c9efaf23cfbd580a9b0c02b0708388e8"],["/categories/MySQL/index.html","906ab66b2b6f5fb343edaf807e638f27"],["/categories/Python接口自动化测试/index.html","df7780f9bdbde68d053cb71534ca7863"],["/categories/Python自动化/index.html","f8daa345b33ad08d7190c51ecdf68415"],["/categories/Shell脚本/index.html","af95521c00d9a82c0574fa6c92ba7f81"],["/categories/index.html","f96604e620265364b0e5b1c15378af7b"],["/categories/postman/index.html","7b18bf8e42c88a1ffe629a8760f8b366"],["/categories/postman/page/2/index.html","89c07ce4a055743090da3c2b388698d2"],["/categories/postman/page/3/index.html","5971d939a7ff49d7cebb7c2b9ffb2659"],["/categories/技术积累/index.html","8782b7ce43e15f178f7fe03bf6955f81"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/NFC/OpenWrt_Wifi.jpg","9d035bf94dd2fa32db6e0bff2e0fe2b5"],["/img/NFC/WeChat.jpg","f539b664e33e7fdb78efb1129a9d137e"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","3f979b9dbf2657e434c6d4e7ff12b36d"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","0cd4e1097f4205796a5fb660e778c627"],["/page/3/index.html","4c3d66370b3a848a9081bc3fb8073e1b"],["/page/4/index.html","b9ac6c0af3fa84d8cb6c2e50f60d2399"],["/page/5/index.html","572773e1ed0b57763fb7de3a84dd4f41"],["/page/6/index.html","9ee20da38c269a71891c1b6d31efde5a"],["/posts/2173e2a4/index.html","0b823e567d24b08bb4d5be93ecf915b2"],["/posts/22131793/index.html","4ed3b308ac55829189d73a4b10c9c6c2"],["/posts/2ab40ef8/index.html","b555533f78d7c5baacf03139cb53bae6"],["/posts/30fa304c/index.html","76a2d6e078868c142fce5d7e5f0d7ae2"],["/posts/3447541d/index.html","c646730c67148e037315b7dddbf56d21"],["/posts/3447554d/index.html","db8b7881fb6e7a4113a09e89290fda81"],["/posts/344e3c5b/index.html","9c936f3aaba5afbec3352b4bedc328fa"],["/posts/3457ed69/index.html","48234e6f779a25fb92eeed12cb05ab74"],["/posts/39cb083c/index.html","228febd18579dc0a56077a946f613134"],["/posts/3ba53770/index.html","64539589fe875be931be68aebae8b781"],["/posts/3bd3916a/index.html","7f9f779144e0e2eaaddf776040d9b26f"],["/posts/3e4105ad/index.html","20b150e675f90182a43985e690b8665d"],["/posts/42f034cf/index.html","e3174044f081f45e870ab80d558cbfbf"],["/posts/43b8c324/index.html","7c07e6656a50a2e7b2063ffffe660cd6"],["/posts/54eecc7d/index.html","c9383e1f6ba8c2bb17e2f7c0e2406d6b"],["/posts/6172e27e/index.html","16d141025a8fe7bd7b6b279ac894266d"],["/posts/6556c33b/index.html","b868310bcaa0044a101df679a3e84068"],["/posts/66841aa6/index.html","32c7e3cd755729cc7c42456659491ae7"],["/posts/689fc75c/index.html","eba4fc56f9673348db48e98f47f8db68"],["/posts/69423a58/index.html","510a003d0c7e9a77e8bfc6bd6c53ee85"],["/posts/69ae7450/index.html","ac0edd72e315f8a7aee1b7b18035a1f9"],["/posts/7de15477/index.html","2569c393bace5cbb635fc936571958d7"],["/posts/8a00d2ea/index.html","baf3ccf549435d4ba04d8e8d4eddf83f"],["/posts/8aa14a73/index.html","80ba857fb27fb7139fb3bd09ba9fc7bf"],["/posts/96032b58/index.html","7509f0072ac67efb89785e51a146f6b6"],["/posts/9656df9f/index.html","678f1615e487f63a75c39040837434fb"],["/posts/99817e93/index.html","5442738a7ab754ac229546b1e1a52f96"],["/posts/9d1414ba/index.html","b2a563052d0c975dcdd69c49660e4895"],["/posts/a3886b70/index.html","f23ed9e5117d5e6c491a46fb7d22ef7f"],["/posts/a42e3f6d/index.html","82c776fbadc27fa00cc944f6e3cf574d"],["/posts/a9438874/index.html","cafa4f0d1739c3e7fd1ec39838ebab79"],["/posts/ab3b7c7/index.html","1ae81d67bd8580ad59172237e551930e"],["/posts/adb093cd/index.html","bfafd42f7a8be01d6c7ec9ac80313480"],["/posts/b4b3bf4e/index.html","e1639c4b8349ea76e7c6cc4e98b3ecf3"],["/posts/b8685e49/index.html","03e3db053e6d93cf1a0d5e99d467808e"],["/posts/baaef441/index.html","0aeb016da8db877b1cac1eb0f3add0e8"],["/posts/bbd06fa5/index.html","3ebaca9a8fadc6d77a576ebff889ee47"],["/posts/be476180/index.html","315a0a300c82e6618b8c73901abf397f"],["/posts/c4b6dbb9/index.html","ce311977ee6a33824f07c81c4d115d03"],["/posts/c98d9940/index.html","ee0595b64dc10c5b4c84cb96499504d5"],["/posts/d2331223/index.html","9f3140dbec11a328123b4e57f5df64a1"],["/posts/d5268b29/index.html","d399da003b9db6e35a022c0fedc836ad"],["/posts/d7719dab/index.html","a0f48ebe0016a5aec4b7f29592905e2b"],["/posts/dcc42dc3/index.html","2e4c4b1072c2c3807f547dcf32aee93a"],["/posts/de4de369/index.html","33347e0dea87a43447b7397f16fd34c6"],["/posts/ea42950b/index.html","bb76442c68fb8f9a4f3ec73123faf8e1"],["/posts/f3908263/index.html","1544d0e28fede4d8c278527da080e721"],["/posts/f46b70d8/index.html","c03f85e46653051d1bd37174dc60a833"],["/posts/f5e730b6/index.html","c228066a44ea3e662275200e497dfe6b"],["/posts/f6c5d65f/index.html","113c87d1cbe30b330501c95455e4d5a5"],["/posts/undefined/index.html","a3f1bf0b145e481b7e1f78848ce69530"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","d6a7dae1181f241141314b08a78c2576"],["/tags/API/index.html","c3db7f2f5c96035694e14c32408f76e6"],["/tags/Appium/index.html","c1b32e605dfbb63ee0563a60dacf6336"],["/tags/Charles/index.html","9bec05ed04243b3fc05d9db4635e4a89"],["/tags/Hexo/index.html","0eee11d311ff042cfa436414e7a4f046"],["/tags/MQ/index.html","d2688c0ee5d7288e22d6f0eae03c6a32"],["/tags/MySQL/index.html","2eb1e8b9ca0a1a17fcdd41d2f8fcfd02"],["/tags/Python接口自动化测试/index.html","5d420062f1b5449b69574666a0bf5348"],["/tags/Python自动化/index.html","95daa4545f7d97130017be25b362f252"],["/tags/Shell脚本/index.html","3ed0e080e5e7f395fd5e5d86db7395f9"],["/tags/index.html","a613764424744264018cd1522e3bb207"],["/tags/postman/index.html","279af78795b0b7cb2d95fe867a992e83"],["/tags/postman/page/2/index.html","d211d2cd97d35954f2803aa4dd396048"],["/tags/postman/page/3/index.html","614f65c78934a7d6d18335e5d09b4247"],["/tags/博客/index.html","847daa4d7daa9d864d841a5b9e710d2f"],["/tags/自动化测试/index.html","3e700335bc2637e05744cc75e2f57990"]];
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
