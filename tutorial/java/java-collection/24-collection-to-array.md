---
sidebar_position: 24
title: 'Collection to Array'
---

Interface Collection memiliki method `toArray() ` untuk melakukan konversi collection ke Array. Ini sangat cocok jika kita ingin mengubah collection ke Array, misal saja karena mau memanggil method yang memang parameternya tipenya array, bukan collection.

Contoh: 

```java
import java.util.Arrays;
import java.util.List;

public class DemoCollectionToArray {

	public static void main(String[] args) {
		List<String> names = List.of("Rani", "Endang", "Upik", "Ida");
		List<Integer> values = List.of(34, 67, 44, 55, 22);
		
		Object[] namesToArray = names.toArray(); // convert names to Array
		String[] stringNamesToArray = names.toArray(new String[]{}); // convert names to Array sekaligus konversi ke String
		
		System.out.println(Arrays.toString(namesToArray));
		System.out.println(Arrays.toString(stringNamesToArray));
		
		Object[] valuesToArray = values.toArray(); // convert names to Array
		Integer[] integerValuesToArray = values.toArray(new Integer[]{}); // convert names to Array sekaligus konversi ke Integer
		
		System.out.println(Arrays.toString(valuesToArray));
		System.out.println(Arrays.toString(integerValuesToArray));
	}	
}
```

Output:

```
[Rani, Endang, Upik, Ida]
[Rani, Endang, Upik, Ida]
[34, 67, 44, 55, 22]
[34, 67, 44, 55, 22]
```