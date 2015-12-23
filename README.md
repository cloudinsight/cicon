# fed-ci-icons

> 给 [CI](http://git.oneapm.me/cloud/fed-ci) 项目用的图标, [在阿里巴巴上的项目地址](http://www.iconfont.cn/users/project?pid=45332)

## 安装前

### 配置 Scope

配置机器的 [Scope](https://docs.npmjs.com/misc/scope), 配置完以后 @oneapm 开头的模块都会从 OneAPM 的 [私有库](http://10.128.6.51:8080/) 安装

```sh
npm config set @oneapm:registry http://10.128.6.51:8080/
```

## 安装 fed-ci-icons

```sh
npm install @oneapm/fed-ci-icons -D
```

## 如何在基于 Webpack 的项目中使用

### 安装相关的依赖
```sh
npm install style-loader css-loader url-loader file-loader -D
```

### 配置 WebPack Module Loaders

```js
module:{
  loaders:[
    {
      test:/\.css$/,
      loader:'style-loader!css-loader'
    },{
      test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader : 'url-loader?limit=999990'
    }
    ...
  ]
}
```

### 在 Component 里导入

```js
import 'fed-ci-icons/iconfont.css';
```

### 在页面中使用

```html
<i className='cicon cicon-mysql'></i>
```

## 版本历史

v1.0.12

```css
.cicon-cog:before { content: "\e617"; }
.cicon-point:before { content: "\e618"; }
.cicon-oneapmlogo:before { content: "\e619"; }
.cicon-dashboard:before { content: "\e61a"; }
.cicon-desktop:before { content: "\e61b"; }
.cicon-download:before { content: "\e61c"; }
.cicon-server:before { content: "\e61d"; }
.cicon-listalt:before { content: "\e61e"; }
.cicon-ai:before { content: "\e61f"; }
.cicon-bi:before { content: "\e620"; }
.cicon-mi:before { content: "\e621"; }
.cicon-question:before { content: "\e622"; }
.cicon-ci:before { content: "\e623"; }
.cicon-onealert:before { content: "\e624"; }
.cicon-ct:before { content: "\e625"; }
```

v1.0.11

使用 [Scope](https://docs.npmjs.com/misc/scope) 发布

v1.0.10

添加了

```css
.cicon-trash:jianjiao { content: "\e616"; }
```

v1.0.9

添加了

```css
.cicon-trash:before { content: "\e614"; }
.cicon-disable:before { content: "\e615"; }
```

v1.0.8

* 必须删除css 文件中的注释，不然会出错

v1.0.7

重命名后

```css
.cicon-memcache:before { content: "\e601"; }
.cicon-php_fpm:before { content: "\e60f"; }
```

v1.0.5 

添加了

```css
.cicon-mesos:before { content: "\e612"; }
.cicon-solr:before { content: "\e613"; }
```

v1.0.1~v1.0.4 

> 不要用这几个版本

v1.0.0

```css
.cicon-apache:before { content: "\e600"; }
.cicon-memcached:before { content: "\e601"; }
.cicon-mongodb:before { content: "\e602"; }
.cicon-mysql:before { content: "\e603"; }
.cicon-ngnix:before { content: "\e604"; }
.cicon-postgresql:before { content: "\e605"; }
.cicon-redis:before { content: "\e606"; }
.cicon-tomcat:before { content: "\e607"; }
.cicon-activemq:before { content: "\e608"; }
.cicon-cassandra:before { content: "\e609"; }
.cicon-couchbase:before { content: "\e60a"; }
.cicon-couchdb:before { content: "\e60b"; }
.cicon-docker:before { content: "\e60c"; }
.cicon-elasticsearch:before { content: "\e60d"; }
.cicon-kafka:before { content: "\e60e"; }
.cicon-phpfpm:before { content: "\e60f"; }
.cicon-rabbitmq:before { content: "\e610"; }
.cicon-zookeeper:before { content: "\e611"; }
```
