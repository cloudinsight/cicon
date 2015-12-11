# fed-ci-icons

> 给 [CI](http://git.oneapm.me/cloud/fed-ci) 项目用的图标

[在阿里巴巴上的项目地址](http://www.iconfont.cn/users/project?pid=45332)

## 使用方法

添加依赖

```
npm install style-laoder css-loader url-loader fed-ci-icons -D
```

配置 WebPack Module Loaders

```js
{
  test:/\.css$/,
  loader:'style-loader!css-loader'
},{
  test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
  loader : 'url-loader?limit=999990'
}
```

导入

```js
import 'fed-ci-icons/iconfont.css';
```

使用

```
<i className='cicon cicon-mysql'></i>
```


## 版本历史

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
