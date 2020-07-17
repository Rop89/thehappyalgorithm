<template>
  <footer>
    <div class="footer">
      <ul class="navigation">
        <li>
          <a class="back" id="nav" href="">&uarr;Back to Top</a>
        </li>
        <li><a class="home" href="#home">Home</a></li>
        <li><a class="contact" href="#">Get in Touch</a></li>
      </ul>
    </div>
    <div class="footer-social">
      <ul class="footer-navigation-social">
        <li><a href="" class="fa fa-instagram"></a></li>
        <li><a href="" class="fa fa-twitter"></a></li>
        <li><a href="" class="fa fa-facebook"></a></li>
        <li><a href="" class="fa fa-youtube"></a></li>
      </ul>
    </div>
    <div class="rights">
      <p>© Personal House Shopper. All rights reserved. Designed by THA.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background: black;
  margin-top: 100px;
}

.footer {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 15px;
}

.navigation a:hover {
  color: #d5c8bb;
}

.footer ul li {
  list-style-type: none;
  padding: 10px;
  color: white;
}
.footer-navigation-social a:hover {
  color: #d5c8bb;
}
.footer-navigation,
.footer-navigation-social {
  display: flex;
  justify-content: center;
}
.footer-social > ul > li {
  list-style-type: none;
  padding: 10px;
  font-size: 20px;
}
.fa {
  color: white;
}
/*Rights*/

.rights {
  padding-top: 10px;
  text-align: center;
  color: white;
  font-size: 12px;
}

.rights p {
  padding-bottom: 15px;
  margin: 0;
}
</style>
