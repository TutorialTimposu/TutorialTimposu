---
sidebar_position: 13
title: 'Immutable Map'
---

Sama seperti `List` dan `Set`, pada `Map` juga kita dapat membuatnya menjadi Immutable.

 | Method | Keterangan |
 |---|---|
 | `Collections.emptyMap()` | Membuat immutable Map kosong |
 | `Collections.unmodifiableMap(map)` | Mengubah mutable | Map menjadi immutable |
 | `Collections.singletonMap(key, value)` | Membuat Map dengan satu jumlah key-value |
 | `Map.of(...)` | Membuat immutable Map banyak elemen dari key-value |

Contoh:

```java
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class DemoImmutableMap {

	public static void main(String[] args) {
		
		// Membuat Map Kosong
		Map<String, String> emptyMap = Collections.emptyMap();
		// Membuat Map dengan satu elemen
		Map<String, String> singelMap = Collections.singletonMap("name", "Ucup");
		
		// Membuat Map Mutable
		Map<String, String> muttableMap = new HashMap<String, String>();
		muttableMap.put("id", "Indonesia");
		muttableMap.put("jp", "Japan");
		
		// Menjadikan Map Mutable menjadi Immutable
		Map<String, String> immutableMap = Collections.unmodifiableMap(muttableMap);
		
		// Menjadikan Map Immutable dengan banyak elemen
		Map<String, String> listImmutableMap = Map.of(
					"ec", "Ecuador",
					"de", "Germany",
					"vn", "Vietnam"					
				);
		
//		listImmutableMap.put("us", "United State"); // Error
	}

}
```