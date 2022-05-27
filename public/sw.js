/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","97b7ab00c2dbd1d40617f0cef8ce63f0"],["/archives/2020/08/index.html","30648271fbf03192312acd48c20c914b"],["/archives/2020/index.html","c95ac2f3026af75b3de78cbd0cc81bec"],["/archives/2021/02/index.html","d12431b71508022b036f35ae1c690e3c"],["/archives/2021/03/index.html","f21da94bd4fa36b14fb74ccabac02123"],["/archives/2021/05/index.html","fd15ec6f3fa7414247430764c4360c9f"],["/archives/2021/11/index.html","0d0c25099e703a12964ad377c3cd999d"],["/archives/2021/12/index.html","2caef501d7ab6445c23db08d8341ada0"],["/archives/2021/12/page/2/index.html","73d6a1a03a8af91207a56847705ebfd4"],["/archives/2021/index.html","3f526f7f011c04c1867377e0577fd513"],["/archives/2021/page/2/index.html","f7ef21e0e410af0956011c974cf30b13"],["/archives/2021/page/3/index.html","51b04f58a50751e4f6278c87b8473b8f"],["/archives/2022/01/index.html","2ba7d95616b0e4b685e9e35927d575d0"],["/archives/2022/01/page/2/index.html","9610fdd10ed597f0045d1c5bbfc4f8c2"],["/archives/2022/02/index.html","3a0a74e5b4dea86797e957f71ff1b544"],["/archives/2022/02/page/2/index.html","17e9665da5853f79738a3c9c8eb606e2"],["/archives/2022/05/index.html","90a1fce1a56573f3abfaa0cfc61cfc01"],["/archives/2022/index.html","aaa4a58fd046d6bb4be605cb4f743262"],["/archives/2022/page/2/index.html","2395a76cfa7f20d64b2129705946551d"],["/archives/2022/page/3/index.html","e1e1873c2471d8d24905e4bfbf80bd5d"],["/archives/index.html","fb075fcf60aa3288f4f8364b631797bb"],["/archives/page/2/index.html","8b106eb6b95ecdbfe9bd1b58411e6127"],["/archives/page/3/index.html","63729e9e771f230dbd7c3ae0b239fa74"],["/archives/page/4/index.html","736254992954ba203b0ce9cd0633405a"],["/archives/page/5/index.html","f4eb681ecc58fdd1f66b34880cb9168e"],["/archives/page/6/index.html","2d54b9a68a10d0ada0a1c5d268df8632"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","a338a173cd79a6dbd68069342563e193"],["/categories/Charles/index.html","c48983a453a27356e0e06d151ba256cc"],["/categories/Hexo/index.html","df48a4b8013f31be66218e21f2dc18b2"],["/categories/MySQL/index.html","11cddf0c307d3b42bc471ff13695ad2c"],["/categories/Python接口自动化测试/index.html","6611ef436e6a59092024de398e3332d8"],["/categories/Python自动化/index.html","0dfd091bbd25557ab9eb1e9410b15216"],["/categories/Shell脚本/index.html","574c75c8d80ece4cc9fbb9ef89f73ae7"],["/categories/index.html","155394fe73e80d2da4228e7e54d6bb00"],["/categories/postman/index.html","07672b6cbbb8d1313a61177b048e22b3"],["/categories/postman/page/2/index.html","a2c1bba49204dac2a130848280f761d2"],["/categories/postman/page/3/index.html","56d8f1235abab9174cbe008db84c7f60"],["/categories/性能测试/index.html","5b33fc0e3a16fbda9c1f7f8116fce257"],["/categories/技术积累/index.html","e8e7ffda1753ee08415c2ea0f03dd63d"],["/categories/简历/index.html","54d65fc5cdf13ca94c8ce619a6e47b58"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/NFC/OpenWrt_Wifi.jpg","7428edaab587807cdf99fdca59ca0795"],["/img/NFC/WeChat.jpg","1a54b921e40a21d78c61c5354a3f6bce"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","92f90d6a4e7b230f3fc1cbf8e904cb65"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","6c3dfe011f74e3d358bae21bedf93f3a"],["/page/3/index.html","546a383c9d3ad45322f10eb20dc119ed"],["/page/4/index.html","fa565978376201efaec359b9daf1c210"],["/page/5/index.html","33832270062ac897eea3bcceb0a9cfc9"],["/page/6/index.html","103c109d7c9e0e1e50265fa5fbdd84b3"],["/posts/2173e2a4/index.html","8d64144f42c359cc53bf3df3afe734a0"],["/posts/22131793/index.html","13056b0aca92456059d8018ab27627c3"],["/posts/2ab40ef8/index.html","5d088c7f8dd4d70f39999f179294a9a1"],["/posts/30fa304c/index.html","8bd0d3d51cd4ea5b43ab4a265a6ee259"],["/posts/3447541d/index.html","58836898bc0847faa9cc5d56c86e8f89"],["/posts/3447554d/index.html","a0dc5749290f0d7bc50684f968db2e88"],["/posts/344e3c5b/index.html","5318629e613a4a050b1851057070799c"],["/posts/3457ed69/index.html","59377beee0caee515ef6b92d2f299dd7"],["/posts/39cb083c/index.html","06e094737c690468114262c7f067671c"],["/posts/3ba53770/index.html","0f2e99e886b155aaa7667280498b1b02"],["/posts/3bd3916a/index.html","597cc9d79ef8fd2d633e84b767fa80ce"],["/posts/3e4105ad/index.html","65d1267e361fc374802b9d4e439e2984"],["/posts/42f034cf/index.html","5443c0411c318dfef0e374f2b6d113c1"],["/posts/43b8c324/index.html","4c5ca1564937a5f8b1337e4a974f1d21"],["/posts/54eecc7d/index.html","7199db796a698b9a6e622335a8e00913"],["/posts/6172e27e/index.html","ec3250396df496279aee58a1e7e64241"],["/posts/6556c33b/index.html","3f23f174358656a9571b1fe831572043"],["/posts/66841aa6/index.html","9cd7bfe5fac1a45e897d39538cf04599"],["/posts/689fc75c/index.html","602766a572681c370a3d50388f25cdbe"],["/posts/69423a58/index.html","2f0393aa93cdac1ea6718907bf6abe15"],["/posts/69ae7450/index.html","96f9e3df1742b8840f582cddbf508527"],["/posts/6eec70c5/index.html","13f79498606d7f6588f492645d1751e0"],["/posts/7de15477/index.html","c93f05645ee0a1355475f74aef8dcb78"],["/posts/8a00d2ea/index.html","477426efa18b0e01a808d92c331cbbfd"],["/posts/8aa14a73/index.html","eda235611ca5ccc26651d4bf88d16dbc"],["/posts/8e85f61/index.html","f907eb7a5a460264d7a0f06a7578e282"],["/posts/96032b58/index.html","b982e7d19c908993028cf83d18345493"],["/posts/9656df9f/index.html","87877e513d711c70309dafc718dab810"],["/posts/99817e93/index.html","0acd836d66fa59ea687ac34689db40f6"],["/posts/9d1414ba/index.html","65d8869f1494eb3e75552ae7f2205d66"],["/posts/a3886b70/index.html","3f7e989aa07bae9f1f31bb24d704f474"],["/posts/a42e3f6d/index.html","e326870c31243cd49251870a8f9ac575"],["/posts/a9438874/index.html","69d66e3aad0a6fab189e193c2fab5bfc"],["/posts/ab3b7c7/index.html","016ddc646b2a369d0e99cbc5053bf1c1"],["/posts/adb093cd/index.html","bdf2eb7131a79fdd08b983f844c9a367"],["/posts/b4b3bf4e/index.html","f936be55292b84cd9b5e22635e4c3842"],["/posts/b8685e49/index.html","e9a804fe5cfd60f205887be1c3defb23"],["/posts/baaef441/index.html","46b1aaaf0a34821a80e67dbec9eb50de"],["/posts/bbd06fa5/index.html","0b23604ad009dfb1db06c09d9b032a41"],["/posts/be476180/index.html","06ff29e96955e757421aa67ca8038931"],["/posts/c4b6dbb9/index.html","079b5ed2cfeec0910cebb1e41d4b56b2"],["/posts/c98d9940/index.html","34c8196cb831886c7492b73a08b01cad"],["/posts/d2331223/index.html","7d2a3c45b95b7d1cd1dbbadee52d7c6c"],["/posts/d5268b29/index.html","3f94c893ccebcbece36e390e48ff4017"],["/posts/d7719dab/index.html","d75911d2cd0d4c6a1124962d8af07bb9"],["/posts/dcc42dc3/index.html","5d94dc1a8196a99fa330403cabcdb387"],["/posts/de4de369/index.html","4561ffe1333fea179173f29a7c44262a"],["/posts/ea42950b/index.html","465ec6caec1c0d51ed6ddecf1e50df50"],["/posts/eac202c0/index.html","cbc5c1d9968a070c48a263a31e865ebc"],["/posts/f3908263/index.html","b6d837cd8e38afca944001e926b26940"],["/posts/f46b70d8/index.html","1d5baadbd12579f4e2042dd2c3a2bccb"],["/posts/f5e730b6/index.html","dc06511434f5d95d360e0accf6272be3"],["/posts/f6c5d65f/index.html","7d843bc51cf813dbd7f687453487994b"],["/posts/undefined/index.html","679a880dca00cd91747c9ef66339b036"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","5fdc13ae786a29103e26f8ce1556c1b8"],["/tags/API/index.html","c04ac93a11297974b5b9d6cbd69fb801"],["/tags/Appium/index.html","1429df1827c5c95709eef480e93eab91"],["/tags/Charles/index.html","1320654b59d81943fddba940d695dbab"],["/tags/Hexo/index.html","054b0b0e331b2d87097ef0c04a0ba4b2"],["/tags/MQ/index.html","1ad99ae83db819efc4c55b4e13d53bf6"],["/tags/MySQL/index.html","9346deeb28d5a8926c7b754046d7162d"],["/tags/Python接口自动化测试/index.html","eba7d3b93707ae1840438234405a4f1a"],["/tags/Python自动化/index.html","026b22530e0bf87ee6055b921bbc5602"],["/tags/Shell脚本/index.html","b73f5edf4265c50136173b41edb2dc57"],["/tags/index.html","8fe9a1ae94a3e3122a953d7b31f24f8d"],["/tags/postman/index.html","ded08be36ca1afb652552ca32142c7b1"],["/tags/postman/page/2/index.html","bf84e015ca6976bef60b6c484e982b83"],["/tags/postman/page/3/index.html","cc5a8d09e95033d3f1927b5df1543bce"],["/tags/博客/index.html","a5127e566d4d4ada7f993acc631641eb"],["/tags/性能测试/index.html","c9780ecdd43a25c2bb6e624f0b596c76"],["/tags/简历/index.html","6c105199888e5fc1ef307cfddd4a24bc"],["/tags/自动化测试/index.html","277ad9416670a048aabe4cc318a7fd51"]];
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
