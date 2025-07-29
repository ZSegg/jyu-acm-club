<template>
  <footer class="homePage-footer">
    <div class="homePage-footer__content">
      <div class="homePage-footer__newsltter">
        <div class="homePage-footer__logo">
          <img src="@/assets/logo.png" alt="logo" />
          <span>ACM算法协会</span>
        </div>
        <div class="homePage-footer__info">
          <p>订阅我们，第一时间获取竞赛信息、技术分享与通知。</p>
          <div class="homePage-footer__action">
            <div class="homePage-footer__input-wrapper">
              <input
                class="homePage-footer__input"
                type="text"
                placeholder="填写你的邮箱"
              />
              <button class="homePage-footer__btn">订阅</button>
            </div>
            <p>订阅即表示你同意我们的《隐私政策》并同意接收 ACM 更新。</p>
          </div>
        </div>
      </div>
      <div class="homePage-footer__links">
        <div class="homePage-footer__entry">
          <h4>快速入口</h4>
          <ul>
            <li>
              <a>首页</a>
            </li>
            <li>
              <a>比赛列表</a>
            </li>
            <li>
              <a>排行榜</a>
            </li>
            <li>
              <a>个人中心</a>
            </li>
          </ul>
        </div>
        <div class="homePage-footer__news">
          <h4>协会动态</h4>
          <ul>
            <li>
              <a>公告通知</a>
            </li>
            <li>
              <a>常见问题</a>
            </li>
            <li>
              <a>活跃度规则</a>
            </li>
            <li>
              <a>联系我们</a>
            </li>
          </ul>
        </div>
        <div class="homePage-footer__friends">
          <h4>友情链接</h4>
          <ul>
            <li>
              <a>JYU_OJ</a>
            </li>
            <li>
              <a href="https://dasai.lanqiao.cn/">蓝桥杯</a>
            </li>
            <li>
              <a href="https://gplt.patest.cn/">天梯赛</a>
            </li>
            <li>
              <a href="https://ccpc.io/">中国大学生程序设计竞赛 </a>
            </li>
            <li>
              <a>ACM算法协会公众号</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="homePage-footer__credits">Tcp备案 + 公安备案</div>
  </footer>
</template>

<script setup lang="js"></script>
<style scoped lang="scss">
.homePage-footer {
  height: $height-container-sm;
  padding: $padding-3xl;
  color: $white-smoke;
  .homePage-footer__content {
    height: 80%;
    background-color: #007bff;
    display: flex;
    gap: $space-lg;
    padding: $padding-2xl;
    .homePage-footer__newsltter {
      flex: 1;
      //  background-color: antiuewhite;
    }
    .homePage-footer__links {
      flex: 1;
      //  background-color: aqua;
    }
  }
  .homePage-footer__credits {
    width: 100%;
    text-align: center;
    margin-top: $space-xl;
  }
}
.homePage-footer__newsltter {
  height: 100%;
  .homePage-footer__logo {
    display: flex;
    height: $height-lg;
    width: fit-content;
    justify-content: space-between;
    align-items: center;
    gap: $space-md;
    img {
      height: 100%;
    }
    span {
      font-size: $font-size-xl;
    }
  }
  .homePage-footer__info {
    margin-top: $space-md;
    height: 50%;
    .homePage-footer__action {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      height: 80%;
      justify-content: space-between;
      margin: $space-md 0;
      .homePage-footer__input-wrapper {
        display: flex;
        height: 50%;
        width: 100%;
        gap: $space-sm;
      }
      .homePage-footer__input {
        flex: 1;
        height: 100%;
      }
      .homePage-footer__btn {
        @extend .btn;
        width: fit-content;
        height: 100%;
      }
    }
  }
}
.homePage-footer__links {
  display: flex;
  gap: 5%;
  div {
    height: 100%;
    width: 30%;

    h4 {
      font-weight: $font-weight-regular;
      margin-bottom: $space-md;
    }
    li {
      list-style: none;
      margin-bottom: $space-md;
      font-size: $font-size-sm;
    }
  }
}
</style>
