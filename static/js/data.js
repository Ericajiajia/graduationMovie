// 题目有的不完整


const datans = ['你是武大的吧？', '无知青铜', '华科小白', '标准段友', '车技惊人', '喻家山车神']

const datas = [
	[
		{
			num:0,
			problem:'华科男对异性最常说的一句话是？',
			choose1:'放开那个男生！',
			choose2:'有时间一起自习吗？',
			choose3:'两个馒头三两饭谢谢阿姨！',
			ans:'两个馒头三两饭谢谢阿姨！',
			wenan:'华科男女比例一度高达7:1，华科男能常搭上话的异性也只能是食堂阿姨了...'
		},
		{
			num:0,
			problem:'华科哪个学院，竟然还有男生节！！？',
			choose1:'管理学院',
			choose2:'新闻学院',
			choose3:'社会学院',
			ans:'社会学院',
			wenan:'华科现状：文科男左拥右抱，理工男互相依靠'
		},
		{
			num:0,
			problem:'作为华科男，你终于有机会送女神礼物了，于是你',
			choose1:'送个游标卡尺',
			choose2:'送个锤子',
			choose3:'送她一张过去的CD，听听那时...',
			ans:'送个锤子',
			wenan:'把金工实习亲手打造的小锤锤送给女生是一项华科传统'
		},
		{
			num:0,
			problem:'你在毕业照中发现一张空白的照片，想了半天原来这张是',
			choose1:'灵异照片',
			choose2:'六娃的照片',
			choose3:'本专业全体女生合影',
			ans:'本专业全体女生合影',
			wenan: '华科某些专业的男生是不追女生的，因为他们根本没见过女生'
		},
		{
			num:0,
			problem:'华科男生的约会方式是',
			choose1:'西操一起晒太阳',
			choose2:'一下午的自习父子局',
			choose3:'光谷蹦一晚野迪',
			ans:'一下午的自习父子局',
			wenan: '在许多女生的印象里，华科男生“数量多，情商低，就知道约自习！”'
		},
		{
			num:0,
			problem:'华科男生说过最动人的情话是',
			choose1:'白痴，刷我校园卡',
			choose2:'今年的樱花，还是不如你美',
			choose3:'你的微积分，我教',
			ans:'你的微积分，我教',
			wenan:'找老公就来华科，实在！'
		},
		{
			num:0,
			problem:'华科东校区相对于西校区的唯一优势是',
			choose1:'民风淳朴',
			choose2:'物价便宜',
			choose3:'妹子多',
			ans:'妹子多',
			wenan:'文科学院集中在东校区，因此男女比例几乎要达到惊人的1:1！'
		},
		{
			num:0,
			problem:'华科情侣较少的原因不包括',
			choose1:'华科女生数量少',
			choose2:'无法接受异地恋',
			choose3:'华科男生太傲娇',
			ans:'华科男生太傲娇',
			wenan:'华科大到东西校区也是异地恋'
		},
		{
			num:0,
			problem:'如果你是东校区土著居民，你必须要掌握的一项技能是',
			choose1:'游泳',
			choose2:'钻洞',
			choose3:'翻栏杆',
			ans:'游泳',
			wenan:'每年夏天东九教学楼附近都会被水淹没，不会游泳还不能去自习了，给我气的！'
		},
		{
			num:0,
			problem:'请问从华科校门口的佳园路坐公交，五站地之后是什么位置',
			choose1:'武大',
			choose2:'还是华科校门口',
			choose3:'新屋熊',
			ans:'还是华科校门口',
			wenan:'华科东西方向距离很远，从东小门乘公交到校大门需要五站地'
		}
	],
	[
		{
			num:0,
			problem:'身为Huster，你在武汉闯红灯被抓之后，告诉交警叔叔',
			choose1:'三天之后，喻家山见',
			choose2:'不好意思，给武大丢人了',
			choose3:'时间很急！我正赶着去自习！',
			ans:'不好意思，给武大丢人了',
			wenan:'传说每次华科学生被协警大妈抓住闯红灯之后，都要说自己是武大的'
		},
		{
			num:0,
			problem:'去武大看樱花，千万不要带',
			choose1:'女朋友',
			choose2:'华科学生证',
			choose3:'老司机驾照',
			ans:'华科学生证',
			wenan:'武大赏樱门票20元，凭华科学生证30元'
		},
		{
			num:0,
			problem:'武大离世界一流名校有多远？',
			choose1:'还需奋斗三十年',
			choose2:'指日可待',
			choose3:'591路关山口下',
			ans:'591路关山口下',
			wenan:'武大已经很接近世界一流名校了，毕竟都在武汉'
		},
		{
			num:0,
			problem:'作为华科人，路上遇到摔倒的老人一定要扶，因为',
			choose1:'华科人毫无畏惧！',
			choose2:'被讹了就说自己是武大的',
			choose3:'华科人正直善良',
			ans:'被讹了就说自己是武大的',
			wenan:'武大、华kuo，相互接对方的guo~'
		},
		{
			num:0,
			problem:'华科的真正实力是',
			choose1:'世界一流',
			choose2:'全国知名',
			choose3:'高配三本，支持本降转',
			ans:'高配三本，支持本降转',
			wenan:'武汉的华中科技大学，哦，武汉科技大学啊'
		},
		{
			num:0,
			problem:'年末终于放假了，你回到家吃了顿年夜饭然后',
			choose1:'去拜访七大姑八大姨',
			choose2:'开始自习',
			choose3:'开学了',
			ans:'开学了',
			wenan:'我们华科不仅放假晚，我们还开学早啊~'
		},
		{
			num:0,
			problem:'华科西操场的建设目的是',
			choose1:'供学生锻炼',
			choose2:'让同学们晒太阳',
			choose3:'让大妈跳广场舞',
			ans:'让大妈跳广场舞',
			wenan:'没有大妈们占领不了的场地，包括学校操场'
		},
		{
			num:0,
			problem:'无论条件多么恶劣，华科都不会断供的是',
			choose1:'食堂饭菜',
			choose2:'寝室热水',
			choose3:'课',
			ans:'课',
			wenan:'华科可能断电断水断网，但是大家放心，课永远不会停'
		},
		{
			num:0,
			problem:'传说上帝当年创造华科，加作业的时候',
			choose1:'手抖了一下加多了',
			choose2:'不可能，我只信仰马克思主义',
			choose3:'睡着了',
			ans:'不可能，我只信仰马克思主义',
			wenan:'华科作业多只因为我们是马克思主义的接班人！'
		},
		{
			num:0,
			problem:'西十二楼建成时曾是全亚洲最大的',
			choose1:'教学楼',
			choose2:'迷宫',
			choose3:'考场',
			ans:'迷宫',
			wenan:'西十二楼的设计纳入了当时最为先进的“迷宫式设计”'
		}
	],
	[
		{
			num:0,
			problem:'华科最能制造惊喜的团队是',
			choose1:'爱闹',
			choose2:'v-fun',
			choose3:'华中科技大学施工队',
			ans:'华中科技大学施工队',
			wenan:'华中科技大学施工队：猜猜我今天挖断了什么？'
		},
		{
			num:0,
			problem:'华科哪个组织有先斩后奏的权力',
			choose1:'华中科技大学校党委',
			choose2:'华中科技大学学生会',
			choose3:'华中科技大学施工队',
			ans:'华中科技大学施工队',
			wenan:'华中科技大学施工队：是时候给同学们一个surprise了，开挖！'
		},
		{
			num:0,
			problem:'把控华科命脉的组织是',
			choose1:'华中科技大学后勤集团',
			choose2:'华中科技大学施工队',
			choose3:'华科串串香联盟',
			ans:'华中科技大学施工队',
			wenan:'华中科技大学施工队：没有我施工队断不了的东西'
		},
		{
			num:0,
			problem:'华科人最喜欢去的春游地点是',
			choose1:'图书馆',
			choose2:'森林公园',
			choose3:'武大',
			ans:'图书馆',
			wenan:'对华科人来说，学在华科，学在武大，学在华师，学在武理'
		},
		{
			num:0,
			problem:'一位路人问你南三楼在哪，你告诉他',
			choose1:'南二楼旁边',
			choose2:'自己看地图',
			choose3:'好巧，你也迷路了？',
			ans:'南二楼旁边',
			wenan:'华科建筑物的名称整齐划一，就是分不清哪个是哪个'
		},
		{
			num:0,
			problem:'在华科，你买得最多的东西是',
			choose1:'卫生纸',
			choose2:'麻辣烫',
			choose3:'自行车',
			ans:'自行车',
			wenan:'据民间统计，华科每年人均消耗近3辆自行车'
		},
		{
			num:0,
			problem:'以下哪个不是华科的别称',
			choose1:'华中可基大学',
			choose2:'滑中可稽大学',
			choose3:'华中嗑鸡大学',
			ans:'华中嗑鸡大学',
			wenan:'我可能已经忘了学校的原名了，华中可基？滑中可稽？'
		},
		{
			num:0,
			problem:'以下哪门课不是新闻学院的必修课',
			choose1:'微积分',
			choose2:'新闻评论',
			choose3:'哲学',
			ans:'新闻评论',
			wenan:'毕竟科技大学，文科起码也要从微积分开始嘛'
		},
		{
			num:0,
			problem:'你在华科遇到最绝望的事情是',
			choose1:'考试周突击',
			choose2:'骑单车爬绝望坡',
			choose3:'表白失败',
			ans:'骑单车爬绝望坡',
			wenan:'20度角五百米，让人绝望的距离'
		},
		{
			num:0,
			problem:'华科KFC生意兴隆的原因是',
			choose1:'渴鸡大学的学生都渴望吃鸡',
			choose2:'KFC里搭讪机会比较大',
			choose3:'KFC可以刷夜自习',
			ans:'KFC可以刷夜自习',
			wenan:'就算是蹦迪，我华科小叮当也会带上一本练习题'
		}
	],
	[
		{
			num:0,
			problem:'华科的曾用名不包括以下哪一个',
			choose1:'华中工学院',
			choose2:'华中理工大学',
			choose3:'国立新屋熊大学',
			ans:'国立新屋熊大学',
			wenan:'虽然听起来高大上，但国立新屋熊大学的确是假名'
		},
		{
			num:0,
			problem:'建校纪念碑想要传达的意思是',
			choose1:'四年大学顶个球',
			choose2:'四所大学齐心协力',
			choose3:'四年大学胖成球',
			ans:'四所大学齐心协力',
			wenan:'“四年顶个球”本意是华中工学院建立之初主要由四所大学的机械系组成'
		},
		{
			num:0,
			problem:'青年园之所以叫青年园是因为',
			choose1:'晚上没灯，里面有许多男女青年',
			choose2:'里面充满了生机与活力',
			choose3:'里面适合自习',
			ans:'里面充满了生机与活力',
			wenan:'青年园象征着青年学子的活力，当然里面确实有不少有活力的年轻人'
		},
		{
			num:0,
			problem:'华科首部毕业电影是',
			choose1:'《小猪佩奇》',
			choose2:'《断弦》',
			choose3:'《毕业戏》',
			ans:'《断弦》',
			wenan:'《断弦》是华科首部毕业电影，至今毕业电影已拍摄八年'
		},
		{
			num:0,
			problem:'华科四大才子是',
			choose1:'陈海春、刘克明、姚国华、尹平',
			choose2:'李工真、李敬一、赵林、尚重生',
			choose3:'张小龙、姚欣、汪海兵、杨永智',
			ans:'陈海春、刘克明、姚国华、尹平',
			wenan:'陈海春、刘克明、姚国华、尹平四位老师因为课程精彩而被称为华科四大才子'
		},
		{
			num:0,
			problem:'毛爷爷的手势有什么特殊含义',
			choose1:'就是想打辆车',
			choose2:'学费大概五千元~',
			choose3:'妖魔鬼怪快离开',
			ans:'妖魔鬼怪快离开',
			wenan:'传言校大门的毛爷爷像主要是为了镇校'
		},
		{
			num:0,
			problem:'“母校就是你一天骂八遍，却不许别人骂一句的地方”这句话出自',
			choose1:'《选择》',
			choose2:'《记忆》',
			choose3:'《忘记》',
			ans:'《记忆》',
			wenan:'根叔毕业演讲的知名度比华科要高得多...'
		},
		{
			num:0,
			problem:'“HUST”的是指',
			choose1:'忽悠死他',
			choose2:'某不知名三本院校',
			choose3:"I don't know her",
			ans:'某不知名三本院校',
			wenan:'Huazhong University of Science and Technology，简称HUST'
		},
		{
			num:0,
			problem:'支撑华科人度过大学四年的是',
			choose1:'对学习的向往',
			choose2:'对女朋友的渴望',
			choose3:'师生情',
			ans:'师生情',
			wenan:'没被本降转，全靠师生情！'
		},
		{
			num:0,
			problem:'东九涂鸦墙是',
			choose1:'华科艺术发展的顶峰',
			choose2:'华科人民与恶势力的斗争阵地',
			choose3:'农民伯伯给菜地圈的保护墙',
			ans:'农民伯伯给菜地圈的保护墙',
			wenan:'东九墙曾经挡住了大家的视线，但文艺的华科人通过涂鸦让它变成了风景线'
		}
	],
	[
		{
			num:0,
			problem:'“武汉晴，华科雨”是一种怎样的天气现象',
			choose1:'学校每年人工降雨避暑',
			choose2:'毕业季泼水节',
			choose3:'期末挂科率太高导致全校泪奔',
			ans:'毕业季泼水节',
			wenan:'泼水节是华科一项延续多年的毕业季送祝福活动'
		},
		{
			num:0,
			problem:'理工专业与文科专业进行最多的交流活动是',
			choose1:'关于促进异性学术交流的深刻讨论',
			choose2:'关于文理交叉建设的探讨',
			choose3:'关于正确认识马克思主义的报告会',
			ans:'关于促进异性学术交流的深刻讨论',
			wenan:'和文科学院的妹子联谊可能是华科男四年的巅峰了'
		},
		{
			num:0,
			problem:'在华科，什么职业永远不愁没活干',
			choose1:'施工队',
			choose2:'食堂大妈',
			choose3:'偷车贼',
			ans:'偷车贼',
			wenan:'华科没有偷不了的车，只有不努力的偷车贼'
		},
		{
			num:0,
			problem:'“华科炮楼”是',
			choose1:'抗战时期遗留的小鬼子根据地',
			choose2:'华科人的校外自习室',
			choose3:'异性学术交流场所',
			ans:'异性学术交流场所',
			wenan:'进西小门炮楼的男男女女真的只是去自习的，你们怎么就不信呢'
		},
		{
			num:0,
			problem:'“堕落街”是指',
			choose1:'本降专学生的临时居住地',
			choose2:'让华科人堕落为胖子的小吃街',
			choose3:'网吧一条街',
			ans:'让华科人堕落为胖子的小吃街',
			wenan:'只有吃才能让华科人学习的心动摇'
		}
	]
]




	


	
	