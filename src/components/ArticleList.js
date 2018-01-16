import Card from "./ArticleCard.vue";
import Api from "@/api"
export default {
  name: "ArticleList",
  data() {
    return {
      articles: [
        {
          title: "匠邦互联网",
          content:
            "匠邦，一流的设计，优秀的交互，竭诚的服务，以工匠精神打造非凡的互联网产品，带给你不一般的视觉冲击和前所未有的体验。匠邦，一流的设计，优秀的交互，竭诚的服务，以工匠精神打造非凡的互联网产品，带给你不一般的视觉冲击和前所未有的体验。",
          link: "www.jbangit.com",
          author: "Meowu",
          views: 232,
          likes: 32,
          stars: 23,
          comments: 13,
          images: [
            "https://images.unsplash.com/photo-1482017276394-d2ddc6d4c978?auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=750&q=80"
          ]
        },
        {
          title: "匠邦互联网",
          content:
            "匠邦，一流的设计，优秀的交互，竭诚的服务，以工匠精神打造非凡的互联网产品，带给你不一般的视觉冲击和前所未有的体验。匠邦，一流的设计，优秀的交互，竭诚的服务，以工匠精神打造非凡的互联网产品，带给你不一般的视觉冲击和前所未有的体验。",
          link: "www.jbangit.com",
          author: "Meowu",
          views: 432,
          likes: 80,
          stars: 53,
          comments: 23,
          images: [
            "https://images.unsplash.com/photo-1493274409115-3f5143dd3d9a?auto=format&fit=crop&w=811&q=80",
            "https://images.unsplash.com/photo-1482017276394-d2ddc6d4c978?auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=750&q=80"
          ]
        },
        {
          title: "匠邦互联网",
          content:
            "蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
          link: "www.jbangit.com",
          author: "Meowu",
          views: 332,
          likes: 70,
          stars: 33,
          comments: 23,
          images: [
            "https://images.unsplash.com/photo-1500440853933-3796d0182c96?auto=format&fit=crop&w=667&q=80",
            "https://images.unsplash.com/photo-1482017276394-d2ddc6d4c978?auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=750&q=80"
          ]
        }
      ],
    list: []
    };
  },
  created() {
    Api.getArticles({page: 1, page_size: 10}).then(res => {
      this.list = res.data
    })
  },
  render(h) {
    const articles = this.list.map(article => h(Card, {
      props: {
        article: article
      }
    }));
    return h(
      "div",
      {
        class: { "article-list": true },
        // style: {
        //   // overflow: 'auto',
        //   // width: '100%',
        //   // height: '100%',
        //   // boxSizing: 'border-box',
        //   // padding: '20px;'
        // }
      },
      articles
    );
  }
};
