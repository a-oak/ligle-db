
ligle-db
====================

[![Build Status](https://travis-ci.org/a-oak/ligle-db.svg?branch=master)](https://travis-ci.org/a-oak/ligle-db)
[![Build Status](https://travis-ci.org/a-oak/ligle-db.svg?branch=develop)](https://travis-ci.org/a-oak/ligle-db)
Copyright (c) 2015 [A-Oak](http://a-oak.com/) Co. Ltd. under MIT LICENSE.


# 说明
暂时没有做封装。

参见官方文档 http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html

## 常用的接口：
- find, findOne, findOneAndReplace, findOneAndDelete, drop
- 关于常用的options的说明：
  - limit: 返回条目的数目。
  - sort: 对文档排序。 `[['name',-1]]` 按照name倒序；`[['a',1]]`按照a正序
  - skip: Set to skip N documents ahead in your query (useful for pagination).
  - fields:（用在find中） 返回的field. include or exclude (not both)。例子： {'a':1} 
  - projection: (和fields类似，但用在delete,replace,update中) Limits the fields to return for all matching documents. 

