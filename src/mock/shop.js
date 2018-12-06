import Mock, { Random } from 'mockjs';
import picUrl from '@/assets/diro.jpg';
import picUrl1 from '@/assets/diro1.jpg';

Mock.mock('/v1/auth/shop/loadList', 'get', () => {
  const list = [
    { id: Random.guid(), price: Random.increment(100), name: '迪奥口红', picUrl },
    { id: Random.guid(), price: Random.increment(100), name: Random.ctitle(), picUrl },
    { id: Random.guid(), price: Random.increment(100), name: '迪奥口红', picUrl },
    { id: Random.guid(), price: Random.increment(100), name: Random.ctitle(), picUrl },
    { id: Random.guid(), price: Random.increment(100), name: '迪奥口红', picUrl },
    { id: Random.guid(), price: Random.increment(100), name: Random.ctitle(), picUrl },
    { id: Random.guid(), price: Random.increment(100), name: '迪奥口红', picUrl },
    { id: Random.guid(), price: Random.increment(100), name: Random.ctitle(), picUrl },
    { id: Random.guid(), price: Random.increment(100), name: '迪奥口红', picUrl },
    { id: Random.guid(), price: Random.increment(100), name: Random.ctitle(), picUrl: picUrl1 },
  ];
  return list;
});
