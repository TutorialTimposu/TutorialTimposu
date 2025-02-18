---
sidebar_position: 21
title: 'Abstract Class Collections'
---

Struktur data collection di Java selalu berkembang, namun biasanya algoritma dasarnya selalu sama antar jenis collection. Hampir semua interface collection di Java sudah disediakan abstract class nya sebagai dasar algoritma nya, dan hampir semua implementasi class konkrit nya selalu extends abstract class collection. Hal ini mempermudah kita, jika ingin membuat collection manual, kita tidak perlu membuat dari awal, kita bisa menggunakan abstract class yang sudah disediakan.

## Abstract Class Collection

|Abstract Class|Untuk|
|---|---|
|AbstractCollection|Collection|
|AbstractList|List|
|AbstractMap|Map|
|AbstractQueue|Queue|
|AbstractSet|Set|

## Contoh Abstract Class Collection

Contoh misalnya kita membuat collection Queue dengan single element.

```java
import java.util.AbstractQueue;
import java.util.Collections;
import java.util.Iterator;
import java.util.Queue;

// membuat custom collection Queue single queue dari AbstractQueue class
class SingleQueue<E> extends AbstractQueue<E> {

	private E data;
	
	@Override
	public boolean offer(E e) {
		if (data == null) {
			data = e;
			return true;
		}
		return false;
	}

	@Override
	public E poll() {
		E temp = data;
		data = null;
		return temp;
	}

	@Override
	public E peek() {
		return data;
	}

	@Override
	public Iterator<E> iterator() {
		return Collections.singleton(data).iterator();
	}

	@Override
	public int size() {
		return data == null ? 0 : 1;
	}
	
}

public class DemoAbstractClass {

	public static void main(String[] args) {
		Queue<String> singleQueue = new SingleQueue<>();
		
		System.out.println(singleQueue.size());
		
		System.out.println(singleQueue.offer("Ucup"));
		System.out.println(singleQueue.offer("Ade"));
		System.out.println(singleQueue.offer("Restu"));
		
		System.out.println(singleQueue.size());
		System.out.println(singleQueue.peek());
		System.out.println(singleQueue.size());
		System.out.println(singleQueue.poll());
		System.out.println(singleQueue.size());	
		
	}

}
```

Output:

```
0
true
false
false
1
Ucup
1
Ucup
0
```