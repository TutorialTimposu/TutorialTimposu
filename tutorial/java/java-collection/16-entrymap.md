---
sidebar_position: 16
title: 'Java EntryMap'
---

```java
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class DemoEntryMap {

	public static void main(String[] args) {
		
		Map<String, String> countrys = new HashMap<String, String>();
		countrys.put("th", "Thailand");
		countrys.put("cn", "China");
		countrys.put("my", "Malaysia");
		countrys.put("vn", "Vietnam");
		
		Set<Map.Entry<String, String>> entryCountrys = countrys.entrySet();
		
		for (var country : entryCountrys) {
			System.out.println(country.getKey() + " : " + country.getValue());
		}

	}

}
```

Output:

```java
th : Thailand
vn : Vietnam
cn : China
my : Malaysia
```