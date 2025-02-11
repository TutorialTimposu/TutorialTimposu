---
sidebar_position: 10
title: 'Java Queue'
---

```java
import java.util.ArrayDeque;
import java.util.PriorityQueue;
import java.util.Queue;

public class DemoQueue {
	
	public static void main(String[] args) {
		
//		Queue<String> names = new ArrayDeque<String>();
		Queue<String> names = new PriorityQueue<String>(); // mengurutkan data element dengan menggukan comparator
		
		names.add("Ucup");
		names.add("Dika");
		names.add("Anton");
		names.add("Shena");
		
		for( String next = names.poll(); next != null; next = names.poll() ) {
			System.out.println(next);
		}

		System.out.println(names.size());
	}

}
```