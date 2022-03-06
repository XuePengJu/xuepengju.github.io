/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

<<<<<<< HEAD
var precacheConfig = [["/404.html","191cab7d177a9c77d626d53b3574ba29"],["/about/index.html","d3172f16a221785e84d930b1617c1df7"],["/archives/2020/07/index.html","b883d07ce7dc14eacf92c70007fc7af6"],["/archives/2020/08/index.html","195a5d1faf70e1569b0674a016fb11aa"],["/archives/2020/index.html","9ced5f3617c4a3a0885dc5ef5bcf25b2"],["/archives/2021/02/index.html","e870336585cef0af34a376d3a1f0b1e5"],["/archives/2021/03/index.html","ca5f851de6b11094e349fa5a2e5d6209"],["/archives/2021/05/index.html","fff31c8044bf977eecabc43743b61a11"],["/archives/2021/11/index.html","08a21db95d7b755685ff749e6e98f7f8"],["/archives/2021/12/index.html","432e237b98409c9942fd7a08d6121671"],["/archives/2021/12/page/2/index.html","1ebb2deb9fff12199bc638ed6c578d83"],["/archives/2021/index.html","f7b3b82ba40ace0774c630f854cddfce"],["/archives/2021/page/2/index.html","439c361667fd1d8ff78324c28919beb5"],["/archives/2021/page/3/index.html","85cd9fd0c76341b1358a0d121d9fd0ac"],["/archives/2022/01/index.html","d9bb07615efe601ec1f024299828a232"],["/archives/2022/01/page/2/index.html","a10954215760b589ce803f0f14fde62c"],["/archives/2022/02/index.html","59557fd350869b0134b9471a827b3591"],["/archives/2022/02/page/2/index.html","9d03c630c3d52a0b62c3f1ec1f307f3b"],["/archives/2022/index.html","971304fc761f08aea85b97f1792cc8a7"],["/archives/2022/page/2/index.html","bb4dd0bb71afd739ee5386631f75d986"],["/archives/2022/page/3/index.html","619410a95faae41e21e1fe7922028977"],["/archives/index.html","4e720db6673638428b9e92bea513cbce"],["/archives/page/2/index.html","34bf857ae61bb3f55104383753bcd5fd"],["/archives/page/3/index.html","9df3f1f5e5d32d1c98499aa5382fac75"],["/archives/page/4/index.html","8de5c1384ba716ef6bde2f04e63311d5"],["/archives/page/5/index.html","1bddd3f306b851f85b7d15591c6d9573"],["/archives/page/6/index.html","e69dd15b217118b0616469e855b35a15"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","4b9feb191550d9a64598af45fd188e82"],["/categories/Appium/index.html","b9d24e00dae145adfe63281e30e321a1"],["/categories/Charles/index.html","3887ea7b75312994408414931b81ea85"],["/categories/Hexo/index.html","4fa34fdc0cd45ac1708281708fb14a8b"],["/categories/MySQL/index.html","b71c2b0f37325ad919e0628f3f39ba97"],["/categories/Python自动化/index.html","caea5d54faaca8a3e0e899de262631c9"],["/categories/Shell脚本/index.html","8da2b44827a690863ca93d51829c8c46"],["/categories/index.html","f96167beb3cb2468c1ff5c2677c1c82f"],["/categories/postman/index.html","9ca6eaf0aa92105dfc17172aafd45532"],["/categories/postman/page/2/index.html","52848c6ad769d33f3279d3e05af9879e"],["/categories/postman/page/3/index.html","eccdf4683b649f57c51f8c0a1e0955ce"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","ee1e75a4d04c23d11acf7a53618246cd"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","708a68dca193b988c8cf168b58b4d3b3"],["/index.html","2476587c58d7d041d2d6f7f536977625"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","d13cd814e475183d1069b8b2e8c93855"],["/music/index.html","72fba940ee1cab0014e5d017f3b1b446"],["/page/2/index.html","3ed2e356cbeca635881f5c64d64a3ebf"],["/page/3/index.html","d605261185825411552e4f66b865589b"],["/page/4/index.html","0808b9238d0181cedfd47ec2e23ba74e"],["/page/5/index.html","d8b2451aab86c2b83e0f137df5e3d58c"],["/page/6/index.html","e8abf15de5f6613d16dfcbc1ac52311c"],["/photo/index.html","d21b34c7afb1e578952d721056d9ac38"],["/posts/2173e2a4/index.html","c59b8eb2c5a577f334e05a70bf4b4a10"],["/posts/22131793/index.html","1134d1b1638fe932b52dc3cef299058f"],["/posts/2ab40ef8/index.html","0b5df220d81eb1cbe401a4f708c120a7"],["/posts/30fa304c/index.html","2b9d1d61f4d32f545b281eea46873312"],["/posts/3447541d/index.html","d1eec3b39fc55dc76f7bebd42a81d7dc"],["/posts/3447554d/index.html","fb8ce1873651ebc23696396f649e4321"],["/posts/344e3c5b/index.html","36d317b15545569e799f422d136b0249"],["/posts/3457ed69/index.html","9309777f4c6294576520c77b7a7dc8fa"],["/posts/39cb083c/index.html","4b334ae5caa9d808ef3143d1358ca908"],["/posts/3ba53770/index.html","06b07d713f47ea8d4c1996a492eb08bd"],["/posts/3bd3916a/index.html","afd7f0ef188c209fe01078396746bb31"],["/posts/3e4105ad/index.html","d85d4df92ead389e6637d0f1729e8ceb"],["/posts/42f034cf/index.html","b80ab8f12c85af19513d756674189aa8"],["/posts/43b8c324/index.html","0e46b9dc277907c193db8f674c67597d"],["/posts/50a2b841/index.html","5ea67409f117bf33fa698c8d52096731"],["/posts/54eecc7d/index.html","d38744d8f45aab6380ed487d9547acfc"],["/posts/5a17eb30/index.html","8164ef37aaefd48e5270ca3df3324dd6"],["/posts/6172e27e/index.html","3514cf68d42d008a982cc5585ea1b951"],["/posts/6556c33b/index.html","f24b51684878295f09c5493fb4e50f2b"],["/posts/66841aa6/index.html","37c406657a182367566883b35c6870a4"],["/posts/689fc75c/index.html","f0556ecbd1a36afd9feff58620294c86"],["/posts/69ae7450/index.html","6b2fd9103adbf37e71a09102739d1eef"],["/posts/7de15477/index.html","bed9041a587c622a2afa52ec84eff4c2"],["/posts/8a00d2ea/index.html","9f3d40e9dc91cbfb6dd2e8e292db50e0"],["/posts/8aa14a73/index.html","69ff033f121e6a5fdaaec35efbaad8ac"],["/posts/96032b58/index.html","290d065b674e74b4427f72e2b98fc1b9"],["/posts/9656df9f/index.html","1040888225fd18cbc41cd3c4255ddb92"],["/posts/99817e93/index.html","0fbc539bad3bcc50393ece9872664abe"],["/posts/a3886b70/index.html","b7f2232f145efed1faf5380f17d8dad1"],["/posts/a42e3f6d/index.html","a7153a75382cc6dd906586af25256086"],["/posts/a9438874/index.html","a001d563a895a1fdae5ec85d8d0b0384"],["/posts/ab3b7c7/index.html","7632d1c4ad1cd9cef7ab03291ef13c98"],["/posts/adb093cd/index.html","561d66cf53018347f8f2fa598726750c"],["/posts/b4b3bf4e/index.html","0b6abb530a095db9f553aabe9eb19471"],["/posts/b8685e49/index.html","6abc4dd2380e4176edbf8858cd557192"],["/posts/baaef441/index.html","b97f5b40e8ac8dd285b935f7e72fb033"],["/posts/bbd06fa5/index.html","27b4a94e6ec2f79b4b4b9ec0f0b6f222"],["/posts/be476180/index.html","278f536d6dcd62de633cb123df1a046e"],["/posts/c4b6dbb9/index.html","86a35f6e298ba6c34d05cc1f2f36a5e1"],["/posts/c98d9940/index.html","025ee81e984cbea4fdcd46b453b72c01"],["/posts/d2331223/index.html","6c155ed85574f1db8f20ae2a93279238"],["/posts/d5268b29/index.html","901cefc777d2da86d2e52d55acfdee87"],["/posts/d7719dab/index.html","b56fc5a697982de27593da608d5a9a85"],["/posts/dcc42dc3/index.html","915c21d7c653e7e523b8a93268980629"],["/posts/de4de369/index.html","aff6bd22b95cffe60769d49191e441ba"],["/posts/ea42950b/index.html","b5ea3a5e495dedd68adc908ee9c10afb"],["/posts/f3908263/index.html","c3285941f18eedfc6740a553fb53cfbf"],["/posts/f46b70d8/index.html","e102cb4426b3a0102e11e4d87705a86b"],["/posts/f5e730b6/index.html","8df6ac5b0aca85d214bd0aaa496eefda"],["/posts/f6c5d65f/index.html","afe824ee597ee2ed3e03593eecdfec89"],["/posts/f84657b8/index.html","edb23f8d43356cf09f2aae20a16fee4c"],["/posts/undefined/index.html","d7ba93aa0239e4b3a9c0092d6627b1c8"],["/shuoshuo/index.html","24a7e1f91f5e52604a36ef23a9bedbfb"],["/sw-register.js","424b390503eb0aa5f004e8adb4924b2f"],["/tags/API/index.html","afc3fb0a41c35fc50be5cdf323fde313"],["/tags/Appium/index.html","d78046e6c06373023bd685a82fbb0597"],["/tags/Charles/index.html","c4c21ff117b48f906e53b8811006369d"],["/tags/FLAG/index.html","0538377f51588745fc72ede41299f9f2"],["/tags/Hexo/index.html","dab35d566c54edca0b0d9bf4010a2de0"],["/tags/MQ/index.html","ec6818d6193f99e806bd32eeb9a25c85"],["/tags/MySQL/index.html","32d59fec9260c159fd004290c92be8ad"],["/tags/Python自动化/index.html","b6d086b62bb06f500fe1fe4f179ee450"],["/tags/Shell脚本/index.html","4fedcc17f768933ebf5d7ef0a2871469"],["/tags/index.html","a1ee54e712449fcdd032b9653b36f22a"],["/tags/postman/index.html","8b199ae525ffce965bddfb803c99c7fb"],["/tags/postman/page/2/index.html","1d77c6fd0089a943b8820580391aa696"],["/tags/postman/page/3/index.html","4e3ffbe45792e8849cfc35ad2f513912"],["/tags/博客/index.html","6c58926b0ef9a0ed45854689ce6c253a"],["/tags/自动化测试/index.html","6deee839c5cab00bf245cbc434affe26"],["/video/index.html","ef626a80bfcbf0f77a53faa39dd1f789"],["/风景/index.html","9e4c906ec55ae220ccc65c109abd09c2"]];
=======
var precacheConfig = [["/404.html","e26358790b5b49624ec54bf0d746a043"],["/about/index.html","cbfa2aecff2b255f5f9ca02a658c0c65"],["/archives/2020/07/index.html","19c7cfc89a4b5a2c040a956567fa2c74"],["/archives/2020/08/index.html","2dee57a835848d1f3936f12aec009acc"],["/archives/2020/index.html","2c6af8e8444f7eb000c9669ed6f2c496"],["/archives/2021/02/index.html","8f7772f94ee75854d9939fc4b92673b5"],["/archives/2021/03/index.html","562e93ebc53d342730f77f5f8dd9b176"],["/archives/2021/05/index.html","23b6806a525c308cf3e4f7fc792fbc10"],["/archives/2021/11/index.html","7adf8a119eae6216326e5384edb88dc5"],["/archives/2021/12/index.html","18616e968b79ad57832f525efe7f885c"],["/archives/2021/12/page/2/index.html","da9392a99cd5b8fdcd2553d491a6c76b"],["/archives/2021/index.html","0763c7eaa9cddf075e56016f2b6e3a86"],["/archives/2021/page/2/index.html","63716e815c385b69f6dc7c295d277159"],["/archives/2021/page/3/index.html","31a809934b581407758346b5bd93fbdb"],["/archives/2022/01/index.html","fa4907acb1fa6a5137f31d725ec9b617"],["/archives/2022/01/page/2/index.html","b53fc9f452e80878c5d733881133a1a1"],["/archives/2022/02/index.html","9e95ebe31e35f3768ebf9ba7ee4742dd"],["/archives/2022/index.html","afde0055eb6bbbc5968e1cf94ad03480"],["/archives/2022/page/2/index.html","d0d32588b13e2baab4bcd6d96a6f95d3"],["/archives/index.html","2453056f480aed978c9895539677cbff"],["/archives/page/2/index.html","6e17265f5b4b1672302e98baec261583"],["/archives/page/3/index.html","59dc836609bdf1f1467e3a2575e24a47"],["/archives/page/4/index.html","0fce607b1420ac827944a0a6cf94f633"],["/archives/page/5/index.html","0767352f1b8f9b6f0015d3e96b07a146"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","7acc683065ea4cecb39afef791eba336"],["/categories/Appium/index.html","71fa9689954d312d9fe4f93425d34451"],["/categories/Charles/index.html","d4e06ddaf14f4fdb5ea4f14a7fc0a22a"],["/categories/Hexo/index.html","c68a23be7b9e43038841f50285b28e53"],["/categories/MySQL/index.html","76f931b5def52df36c05d8a972c3bd89"],["/categories/Python自动化/index.html","5d81e8ab8e8e7a4a0cef4bfb8e9de5c0"],["/categories/Shell脚本/index.html","888d624d667edc76e20f23fde3cdd547"],["/categories/index.html","ce524c944c9214b78a88bfc539c099d8"],["/categories/postman/index.html","28629a3355b107c0e531eb8eaca42b94"],["/categories/postman/page/2/index.html","4b5be4a8b78be21789ff30e8d31e62c4"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","ee1e75a4d04c23d11acf7a53618246cd"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/blog/postman/15/015-01.png","5d5eef8d7373ee9a2fd8fa31044afcd9"],["/img/blog/postman/15/015-02.png","74b2783a2b3fa9ce877147c8a24df58b"],["/img/blog/postman/15/015-03.png","bd1123c853618aa0d722d2f6cc8fe903"],["/img/blog/postman/15/015-04.png","7a81600fc90dcf67ee1e53b56bab74d8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","708a68dca193b988c8cf168b58b4d3b3"],["/index.html","8f3bc777777b4e96c474a920be4be54d"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","7e048631952aff0dc7a30381b30610d1"],["/music/index.html","b3b681f02a28684da4459444930880c0"],["/page/2/index.html","4af4c6b17ce7eceb98e758a138433f88"],["/page/3/index.html","014aa0cdb59a6832b41c6bd34963cce5"],["/page/4/index.html","de1cae404337e54144d2dfc7d808a5e1"],["/page/5/index.html","6c787f5694ba6e68785fd6e4f5b1f81a"],["/photo/index.html","24e92eed8fe6e90b9973cf7cb612b4a8"],["/posts/2173e2a4/index.html","0434ab6de9662ef3994338397e9c4225"],["/posts/2ab40ef8/index.html","d75ead4f1f4e0133e6798bf7ee15a186"],["/posts/30fa304c/index.html","8b70ceafb0853b40d72d71484e02ff36"],["/posts/3447541d/index.html","8123b140fee5220a5618d9d97fbfc0f4"],["/posts/3447554d/index.html","ff923a298da15a1d36d39b91fd4e42f0"],["/posts/344e3c5b/index.html","c391c40afee3097d202eae10bc756235"],["/posts/3457ed69/index.html","40e0e43de6c850ebc87f32e1fad3ff86"],["/posts/39cb083c/index.html","0b4b1dbd6714f4af244f0cebd55091ca"],["/posts/3ba53770/index.html","b1f2a2297cd28770734ed0d64fcec452"],["/posts/3bd3916a/index.html","5704a67a8714ec7eeb6625dfc5e9f498"],["/posts/3e4105ad/index.html","1ab75f4e8c1b96a4888964c1269564a2"],["/posts/42f034cf/index.html","3fc8f20feb4015d2d55e100dc226d341"],["/posts/43b8c324/index.html","e9ea5a85ecc92176db5c8290f7cb9a77"],["/posts/50a2b841/index.html","5b4171f291888f37c1fe8d9092edc23c"],["/posts/54eecc7d/index.html","df1c0e1cfa2d61481d6084e9ebb13b3d"],["/posts/5a17eb30/index.html","3fdd2f17611233983db6957f6120e215"],["/posts/6172e27e/index.html","393133689fb8e023f853cc156af2f611"],["/posts/66841aa6/index.html","caabdf95bc93bb8adec0750c9bdf6066"],["/posts/689fc75c/index.html","37f37b18b5e281396f58085affe1834e"],["/posts/7de15477/index.html","4d64f645218e481f9928fd7ea9328a10"],["/posts/8a00d2ea/index.html","03cc3814f17a953fb6463fb0ce338311"],["/posts/8aa14a73/index.html","b21ee6abeb4bfde656d11e7649017e8e"],["/posts/96032b58/index.html","24a0ba57abd9389608ecb50de4930b1a"],["/posts/9656df9f/index.html","6a4c3f5b5550cea0648064bbca7e47bf"],["/posts/99817e93/index.html","a28cf8533b0a0193b4718532b5390837"],["/posts/a3886b70/index.html","11dfba4465bf2be7980da6a7ef4c9cc9"],["/posts/a42e3f6d/index.html","3ca220d2ad590362f2aa82a40f79f4b8"],["/posts/a9438874/index.html","d956ab09ac53d7d08697ac355ce4ba0c"],["/posts/adb093cd/index.html","03a6c668a26366c534d63afc36c658da"],["/posts/b4b3bf4e/index.html","fbccad2e637e0e626f9e50e4f4282e32"],["/posts/b8685e49/index.html","152dead7574d134302d3e3db01515d02"],["/posts/baaef441/index.html","e7a7e56eefe833f0641490f7d3f8d17f"],["/posts/bbd06fa5/index.html","669f2615457a427161b3239bbacc3636"],["/posts/be476180/index.html","5415e7d5d2794e6628ccec0f437c274e"],["/posts/c4b6dbb9/index.html","555bfb0f05d53eb4b93cf64c80df1954"],["/posts/c98d9940/index.html","24f462a4a3eb37871e5f487443ff9997"],["/posts/d2331223/index.html","b4fe26af15a13f0339bda8b5339b3c40"],["/posts/d5268b29/index.html","6cba6195342a152cc11a9aae35027a8e"],["/posts/d7719dab/index.html","2f56828ad6830697f793d2553a7eb4c7"],["/posts/dcc42dc3/index.html","2c90fd35ebf496b37f0ba30f3fb37551"],["/posts/de4de369/index.html","b8d66824dd563e99109d8de52390017a"],["/posts/ea42950b/index.html","e50ba029d678d9f8f8e111091da2f459"],["/posts/f3908263/index.html","1999d416b47ce969f407c4a0bf27439e"],["/posts/f5e730b6/index.html","a2efc7a60ca51c32376606fefab059f6"],["/posts/f6c5d65f/index.html","4ee1a30f60c739dd3caab738515763fd"],["/posts/f84657b8/index.html","d40121e8c9b90675750aa6d7eef5dd05"],["/posts/undefined/index.html","886d97d3fd08c812461c454073160997"],["/shuoshuo/index.html","d8c2da5335d071bbe72c05aa783f00f1"],["/sw-register.js","0c5d84bd37248e347809fee9b418f5b4"],["/tags/API/index.html","919e189fb51d01b2f1a950241352fbb8"],["/tags/Appium/index.html","597c2a49c564cb6284e83ffb80e16b2a"],["/tags/Charles/index.html","c93306827da05d7266b84b2c7eb4281c"],["/tags/FLAG/index.html","38fdec5d564b572ea8b9fa072eb65bbc"],["/tags/Hexo/index.html","426753eddde27cbe2f990748ba17490e"],["/tags/MQ/index.html","9fcec719766df534b7e9609a8dfd0d0d"],["/tags/MySQL/index.html","4ffe17e5730752d4c9d1dc74c3ec5122"],["/tags/Python自动化/index.html","77c9bacc84c2b7ba5ef4c1860ec9a3f4"],["/tags/Shell脚本/index.html","9331604f3d15d9a68e1a19f5bc89d304"],["/tags/index.html","98726540918be6b139d8ff0c0d78df64"],["/tags/postman/index.html","90582e9c905bba665a5b8cfa10277a5d"],["/tags/postman/page/2/index.html","d1700e6620ed3147bdd78069f5843006"],["/tags/博客/index.html","5d88d96099d8b7a4958a95846eeb231c"],["/tags/自动化测试/index.html","fe2cd0b70f8ce852aca65ff261150b42"],["/video/index.html","2201d3bd9b9385699721db121906d801"],["/风景/index.html","21219cd0054917748b9ff9adfa709d0f"]];
>>>>>>> a70e13535f7f73e52845d6c800b0c4ef8f7b272f
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
