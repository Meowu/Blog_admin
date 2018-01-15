import timestamp from './timestamp'
export default {
  randomNumber(length = 1, start) {
    // 随机生成一个指定长度（默认1位）的数，如果提供start则从start算起。
    const len = length - 1; // The ** operator is part of ES6, equals to Math.pow()
    if (Number(start)) {
      return start + Math.floor(Math.random() * (10 ** length - start))
    }
    return 10 ** len + Math.floor(Math.random() * (10 ** length - 10 ** len))
  },
  randomLetters(length = 1) {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return Array.from(Array(length), _ => letters[this.randomIndex(letters)]).join('')
  },
  randomEmail() {
    const host = '@qq.com,@163.com,@gmail.com,@outlook,@sina.com,@yahoo.com'
    const index = this.randomIndex(host.split(','))
    return this.randomLetters(4) + this.randomNumber(4) + host.split(',')[index]
  },
  randomPhone(length) {
    // 随机生成一个手机号码，如果length > 1则生成一个length个号码组成的数组
    const prefix = [138, 136, 159, 151, 137, 187]
    const randomPrefix = prefix[this.randomIndex(prefix)]
    if (length > 1) {
      return Array.from(Array(length), _ => '' + prefix[this.randomIndex(prefix)] + this.randomNumber(8))
    }
    return '' + randomPrefix + this.randomNumber(8)
  },
  randomValue(len = 1, nameArray) {
    if (!nameArray) {
      nameArray = Array.from(Array(10), _ => this.randomLetters(5)) 
    }
    if (len <= 1) {
      return nameArray[this.randomIndex(nameArray)]
    }
    return Array.from(new Array(len), _ => nameArray[this.randomIndex(nameArray)])
  },
  randomName(len = 1, nameArray) {
    // 生成一个随机名字。如果长度大于一则生成名字数组，并且如果提供名字数组则在该数组取名字，否则取默认数组。
    if (!nameArray) {
      nameArray =  ["王怡", "李慧", "叶嘉仪", "宋子文", "景桓", "赵武", "李达", "马旭", '黄海']
    }
    if (len <= 1) {
      return nameArray[this.randomIndex(nameArray)]
    }
    return Array.from(new Array(len), _ => nameArray[this.randomIndex(nameArray)])
  },
  randomIndex(len) {
    // 生成一个随机索引，如果len是数字则索引位于0~len-1之间，如果len是数组或者字符串则生成该数组或字符串长度以内的随机索引。
    if (typeof len !== 'number') {
      len = len.length
    }
    return Math.floor(Math.random() * len);
  },
  randomArray(type, length = 4, byteLength = 6) {
    if (type === "letter") {
      return Array.from(new Array(length), n => this.randomLetters(byteLength))
    } else {
      return Array.from(new Array(length), _ => this.randomNumber(byteLength))
    }
  },
  randomObject() {
    const self = this
    return {
      id: this.randomNumber(),
      name: this.randomName(),
      phone: this.randomPhone(),
      anotherName: this.randomValue(),
      persons: this.randomName(this.randomNumber()),
      order_trail_number: this.randomNumber(8),
      order_number: this.randomNumber(10),
      serviceNumber: this.randomNumber(8),
      amount: this.randomNumber(4, 50),
      seller_name: this.randomValue(1, ['洛可可时尚女装', '亲亲宝贝母婴店', '索尼官方信仰店', '诺基亚官方旗舰店', 'BOSE拔草店']),
      transfer_type: this.randomValue(1, ['个人转账', '现金支付', '公司转账']),
      buy_type: this.randomValue(1, ['商城下单', '线下下单', '外卖点餐']),
      time: timestamp(),
      buy_time: timestamp(),
      relate_store: this.randomValue(1, ['客家庄饭店', '董传辉', '新好景大酒店', '蒋冰冰']),
      position: this.randomValue(1, ['一级', '二级', '三级']),
      discount: this.randomValue(1, [0.1, 0.08, 0.2, 0.3, 0.05]),
      settle_status: this.randomValue(1, ['已结算', '结算失败', '待结算']),
      withdraw: {
        sum: self.randomValue(6, 1000),
        real: this.sum * 0.9,
        status: self.randomValue(1, ['提现成功', '提现失败', '待打款', '已打款'])
      },
      status: this.randomValue(1, [0, 1]),
      real_withdraw_sum: this.randomNumber(4),
      refund: this.randomNumber(),
      packet_sum: this.randomNumber(3),
      packet_num: this.randomNumber(2),
      bank_account: this.randomValue(1, ['交通银行', '工商银行', '建设银行', '平安银行']),
      service_status: this.randomValue(1, ['已处理', '未处理', '已拒绝']),
      service_reason: this.randomValue(1, ['7天无理由退货', '与商品描述不符', '有质量问题', '不喜欢']),
      service_type: this.randomValue(1, ['换货', '仅退款', '退货退款']),
      service_description: this.randomValue(1, ['试了不合适不想要了。', '7天无理由退货', '发错货，颜色不对']),
      service_credit: '',
      accept_account: this.randomValue(1, ['创业账户', '收益账户']),
      pay_type: this.randomValue(1, ['创业账户', '支付宝', '银联支付', '微信支付', '线下充值']),
      // order_type: '外卖订单',
      sold_type: this.randomValue(1, ['商城销售', '线下销售']),
      order_type: this.randomValue(1, ['商城订单', '外卖订单']),
      sold_status: this.randomValue(1, ['已完成', '新订单', '未支付']),
      donate_shares: this.randomNumber(2),
      donate_points: this.randomNumber(4, 100),
      donate_status: this.randomValue(1, ['赠送失败', '已赠送']),
      order_status: this.randomValue(1, ['新订单', '已接单', '配送中', '已完成']),
      order_status_mall: this.randomValue(1, ['待发货', '已发货', '已签收', '已完成']),
      order_price: this.randomNumber(2),
      redpacket: this.randomValue(1, ['私聊红包', '群红包']),
      email: this.randomEmail(),
      sex: this.randomValue(1, ['男', '女']),
      recharge_sum: this.randomNumber(4, 100),
      total: this.randomArray('number', 5, 3),
      total_cash: this.randomArray('number', 5, 3),
      // service_status: this.randomValue(1, ['换货', '仅退款', '退货退款']),
      position: this.randomValue(1, ['财务总监', '运营', '充值出纳助理', '积分出纳助理', '商家出纳助理', '出纳主管', '股权出纳助理']),
      credentials:  ['https://fuss10.elemecdn.com/a/65/7e911991a7856c105fa4dfd615565jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85', 'https://fuss10.elemecdn.com/4/71/472c06063ac6f2ba559237c322e3ajpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85'],
      dishes: [
        {
          name: "岩盐芝士绿茶",
          image: 'https://fuss10.elemecdn.com/a/65/7e911991a7856c105fa4dfd615565jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85',
          price: 12,
          number: 2,
          size: '大杯'
        },
        {
          name: "岩盐芝士酱",
          image: 'https://fuss10.elemecdn.com/4/71/472c06063ac6f2ba559237c322e3ajpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85',
          price: 6,
          number: 1,
          size: '小盒'
        },
        {
          name: "养乐多绿叉",
          image: 'https://fuss10.elemecdn.com/b/30/ea94fb6e2bd8a7c4347740c205eb2jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85',
          price: 18,
          number: 2,
          size: '中杯'
        },
      ],
      advertises: [
        {
          title: "吃了快高长大智商超强的山羊成长奶粉",
          image: 'https://gd4.alicdn.com/imgextra/i4/2259375474/TB2ax4knFXXXXXGXXXXXXXXXXXX_!!2259375474.jpg',
          link: 'https://gd4.alicdn.com',
          seller: '好宝宝',
          sort_index: 999,
          status: 0,
        },
        {
          title: "卤豆腐",
          seller: '羊城熟食连锁',
          sort_index: 32,
          image: 'https://img.alicdn.com/imgextra/i4/392147177/TB2wOR5XCyEJuJjSszfXXcJAVXa_!!392147177.jpg_430x430q90.jpg',
          link: 'https://img.alicdn.com',
          status: 1,
        },
      ],
      goods: [
        {
          name: "吃了快高长大智商超强的山羊成长奶粉",
          image: 'https://gd4.alicdn.com/imgextra/i4/2259375474/TB2ax4knFXXXXXGXXXXXXXXXXXX_!!2259375474.jpg',
          price: 160,
          number: 2,
          size: '大罐'
        },
        {
          name: "卤豆腐",
          image: 'https://img.alicdn.com/imgextra/i4/392147177/TB2wOR5XCyEJuJjSszfXXcJAVXa_!!392147177.jpg_430x430q90.jpg',
          price: 12,
          number: 6
        },
        {
          name: "绝味鸭脖",
          image: 'https://img.alicdn.com/imgextra/i1/392147177/TB2r9neXrUOJuJjSZPfXXaSqXXa_!!392147177.jpg_430x430q90.jpg',
          price: 30,
          number: 4
        },
        {
          name: '宇宙第一创新品牌水果时尚公司生成的无所不能的物美价廉的iPhone XXXXXX',
          image: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/TB1nYk_aGLN8KJjSZFGXXbjrVXa.jpg_180x180.jpg_.webp',
          price: 6666,
          number: 2,
          color: '亮黑色',
          brand: 'Plus'
        }
      ],
      articles: [
        {
          title: '匠邦互联网',
          content: '匠邦，一流的设计，优秀的交互，竭诚的服务，以工匠精神打造非凡的互联网产品，带给你不一般的视觉冲击和前所未有的体验。匠邦，一流的设计，优秀的交互，竭诚的服务，以工匠精神打造非凡的互联网产品，带给你不一般的视觉冲击和前所未有的体验。',
          link: 'www.jbangit.com',
          author: 'Meowu',
          views: 232,
          likes: 32,
          stars: 23,
          comments: 13,
          images: [
            'https://images.unsplash.com/photo-1482017276394-d2ddc6d4c978?auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=750&q=80',
          ]
        },
        {
          title: '匠邦互联网',
          content: '匠邦，一流的设计，优秀的交互，竭诚的服务，以工匠精神打造非凡的互联网产品，带给你不一般的视觉冲击和前所未有的体验。匠邦，一流的设计，优秀的交互，竭诚的服务，以工匠精神打造非凡的互联网产品，带给你不一般的视觉冲击和前所未有的体验。',
          link: 'www.jbangit.com',
          author: 'Meowu',
          views: 432,
          likes: 80,
          stars: 53,
          comments: 23,
          images: [
            'https://images.unsplash.com/photo-1493274409115-3f5143dd3d9a?auto=format&fit=crop&w=811&q=80',
            'https://images.unsplash.com/photo-1482017276394-d2ddc6d4c978?auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=750&q=80',
          ]
        },
        {
          title: '匠邦互联网',
          content: '蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
          link: 'www.jbangit.com',
          author: 'Meowu',
          views: 332,
          likes: 70,
          stars: 33,
          comments: 23,
          images: [
            'https://images.unsplash.com/photo-1500440853933-3796d0182c96?auto=format&fit=crop&w=667&q=80',
            'https://images.unsplash.com/photo-1482017276394-d2ddc6d4c978?auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=750&q=80',
          ]
        },
      ]
    }
  }
};
