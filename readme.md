set key value1
get key
del key
###Redis Hash
Redis hash 是一个string类型的field和value的映射表，hash特别适合用于存储对象。
Redis 中每个 hash 可以存储 232 - 1 键值对（40多亿）。
HMSET runoobkey name "redis tutorial" description "redis basic commands for caching" likes 20 visitors 23000
HGETALL runoobkey   获取指定key的所有字段和值
Hdel命令用于删除哈希表 key 中的一个或多个指定字段，不存在的字段将被忽略。   返回值为成功删除的字段数量
###Redis List