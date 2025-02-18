---
sidebar_position: 17
title: 'Legacy Collection'
---

## Vector

```java
// Vector
List<String> list = new Vector<String>();
list.add("Aco");
list.add("Dini");
list.add("Mike");

for (var name : list) {
	System.out.println(name);
}
```

## HashTable

```java
// HashTable
Map<String, String> map = new Hashtable<String, String>();
map.put("ph", "Philiphina");
map.put("vn", "Vietnam");
map.put("my", "Malaysia");

for (var m : map.keySet()) {
	System.out.println(m);
}
```

## Stack
 
```java
// Stack
Stack<String> stack = new Stack<String>();
stack.push("Dandi");
stack.push("Sultan");
stack.push("Fahmi");

// Error: stack.pop() akan menimbulkan exception EmptyStackException jika stack 0
for (var value = stack.pop() ; value != null ; value = stack.pop()) {
	System.out.println(value); 
}
```