# LanguageManager

**Package:** `net.minecraft.client.resources.language`
**Type:** class
**Implements:** `ResourceManagerReloadListener`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### LanguageManager

```java
public LanguageManager(String p_118971_, Consumer<ClientLanguage> p_345582_)
```

**Parameters:**

- `p_118971_` (`String`)
- `p_345582_` (`Consumer<ClientLanguage>`)

**Returns:** `public`

### setSelected

```java
 setSelected()
```

**Returns:** ``

### extractLanguages

```java
private static Map<String, LanguageInfo> extractLanguages(Stream<PackResources> p_118982_)
```

**Parameters:**

- `p_118982_` (`Stream<PackResources>`)

**Returns:** `private static Map<String, LanguageInfo>`

### onResourceManagerReload

```java
public void onResourceManagerReload(ResourceManager p_118973_)
```

**Parameters:**

- `p_118973_` (`ResourceManager`)

### getJavaLocale

```java
add locale information for modders
    public java.util.Locale getJavaLocale()
```

**Returns:** `add locale information for modders
    public java.util.Locale`

### setSelected

```java
public void setSelected(String p_265224_)
```

**Parameters:**

- `p_265224_` (`String`)

**Returns:** `public void`

### getSelected

```java
public String getSelected()
```

**Returns:** `public String`

### getLanguages

```java
public SortedMap<String, LanguageInfo> getLanguages()
```

**Returns:** `public SortedMap<String, LanguageInfo>`

### getLanguage

```java
public LanguageInfo getLanguage(String p_118977_)
```

**Parameters:**

- `p_118977_` (`String`)

**Returns:** `LanguageInfo`
